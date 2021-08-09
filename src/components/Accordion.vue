<template>
  <div class="accordion-container">
    <button
      type="button"
      class="accordion-title p-0 w-full text-left relative"
      @click="toggleVisibility"
      :alt="visible ? 'Hide accordion' : 'Show accordion'"
    >
      <div class="absolute top-0 left-0 h-full w-auto mr-2 text-2xl">
        <ExpandLess v-if="!visible" class="icon-inline" /><ExpandMore
          v-else
          class="icon-inline"
        />
      </div>
      <div class="ml-8 inline-block">
        <slot name="title" />
      </div>
    </button>
    <div
      ref="contentsContainer"
      class="accordion-contents overflow-y-hidden"
      :class="{
        'accordion-active': visible,
      }"
      :style="{
        '--r-h': realHeight,
      }"
    >
      <div ref="contents">
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";
import ExpandLess from "./icons/ExpandLess.vue";
import ExpandMore from "./icons/ExpandMore.vue";

export default defineComponent({
  name: "Accordion",
  components: {
    ExpandLess,
    ExpandMore,
  },
  props: {
    initialVisibility: {
      type: Boolean,
      default: false,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const visible = ref<boolean>(props.initialVisibility);
    const contentsContainer = ref<null | HTMLDivElement>(null);
    const contents = ref<null | HTMLDivElement>(null);
    const firstElementMarginTop = ref<string>("0px");

    const toggleVisibility = () => {
      if (!contentsContainer.value) return;
      contentsContainer.value.style.transition = "height 0.2s ease";
      visible.value = !visible.value;
      setTimeout(() => {
        if (!contentsContainer.value) return;
        contentsContainer.value.style.transition = "";
      }, 200);
    };
    const realHeightInt = ref<number>(0);
    const realHeight = computed(
      () => `calc(${realHeightInt.value}px + ${firstElementMarginTop.value})`
    );

    // the timer is used to "watch" the document as a computed property, since vue doesn't track it automatically
    // the height may change due to elements loading later
    const timer = ref<null | number>(0);

    // instantly resize if document is resized, without waiting for timer because timer has a delay of 500ms
    const resizeObserver = ref<null | ResizeObserver>(null);

    onMounted(() => {
      setRealHeight();

      timer.value = setInterval(() => {
        setRealHeight();
      }, 500);

      resizeObserver.value = new ResizeObserver(() => {
        setRealHeight();
      });
      resizeObserver.value.observe(document.documentElement);
    });

    onUnmounted(() => {
      timer.value = null;
      resizeObserver.value?.disconnect();
    });

    const setRealHeight = () => {
      // https://stackoverflow.com/questions/1762539/margin-on-child-element-moves-parent-element
      // margin top needs to be accounted for
      const firstChild = contents.value?.children.item(0);
      if (firstChild) {
        const style = window.getComputedStyle(firstChild);
        firstElementMarginTop.value = style.marginTop || "0px";
      }

      const sh = contents.value?.clientHeight || 0;
      realHeightInt.value = sh;
    };

    return {
      visible,
      toggleVisibility,
      contentsContainer,
      contents,
      realHeight,
      realHeightInt,
      setRealHeight,
      firstElementMarginTop,
    };
  },
});
</script>

<style lang="less" scoped>
.accordion-contents {
  height: 0px;

  &.accordion-active {
    height: var(--r-h);
  }
}
</style>
