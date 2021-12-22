<template>
  <div class="accordion-container">
    <button
      type="button"
      class="accordion-title p-0 w-full text-left relative min-h-8"
      @click="toggleVisibility"
      :alt="visible ? 'Hide accordion' : 'Show accordion'"
    >
      <div
        v-if="showArrow"
        class="absolute top-0 left-0 w-auto text-2xl max-h-8"
      >
        <component class="icon-inline" :is="visible ? ExpandMore : ExpandLess">
        </component>
      </div>
      <div class="inline-block" :class="{ 'ml-8': showArrow }">
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

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, ref } from "vue";
import ExpandLess from "@/components/icons/ExpandLess.vue";
import ExpandMore from "@/components/icons/ExpandMore.vue";

const props = defineProps({
  initialVisibility: {
    type: Boolean,
    default: false,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits({
  toggle(payload: unknown) {
    return typeof payload === "boolean";
  },
});

const visible = ref<boolean>(props.initialVisibility);
const contentsContainer = ref<null | HTMLDivElement>(null);
const contents = ref<null | HTMLDivElement>(null);
const transitionType = ref<"in" | "out" | null>(null);
const firstElementMarginTop = ref<string>("0px");
const setRealHeight = () => {
  // https://stackoverflow.com/questions/1762539/margin-on-child-element-moves-parent-element
  // margin top needs to be accounted for
  const firstChild = contents.value?.children.item(0);
  if (firstChild) {
    const style = window.getComputedStyle(firstChild);
    firstElementMarginTop.value = style.marginTop || "0px";
  }
};

onMounted(() => setRealHeight());

const toggleVisibility = () => {
  if (!contentsContainer.value) return;
  if (transitionType.value) return;
  const newState = !visible.value;
  visible.value = newState;
  transitionType.value = newState ? "in" : "out";
  emit("toggle", newState);
  setTimeout(() => {
    transitionType.value = null;
  }, 50);
};
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
