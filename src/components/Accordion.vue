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
      class="accordion-contents relative"
      :class="{
        'accordion-active': visible,
        'accordion-transition-in': transitionType === 'in',
        'accordion-transition-out': transitionType === 'out',
      }"
    >
      <div ref="contents">
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ExpandLess from "@/components/icons/ExpandLess.vue";
import ExpandMore from "@/components/icons/ExpandMore.vue";

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
    const transitionType = ref<"in" | "out" | null>(null);

    const toggleVisibility = () => {
      if (!contentsContainer.value) return;
      if (transitionType.value) return;

      const newState = !visible.value;

      visible.value = newState;
      transitionType.value = newState ? "in" : "out";

      setTimeout(() => {
        transitionType.value = null;
      }, 50);
    };

    return {
      visible,
      toggleVisibility,
      contentsContainer,
      contents,
      transitionType,
    };
  },
});
</script>

<style lang="less" scoped>
.accordion-contents {
  display: none;
  transition: opacity 0.1s ease, top 0.1s ease;

  &.accordion-active {
    display: block;
    opacity: 1;
    top: 0;

    &.accordion-transition-in {
      opacity: 0;
      top: -25px;
    }
  }
}
</style>
