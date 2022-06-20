<script setup lang="ts">
import { onMounted, ref } from "vue";
import ExpandLess from "@/components/icons/IconExpandLess.vue";
import ExpandMore from "@/components/icons/IconExpandMore.vue";
import { isDefined } from "@vueuse/core";

const TRANSITION_DURATION_MS = 50;

const props = defineProps<{
  initialVisibility: boolean;
  showArrow: boolean;
}>();

const emit = defineEmits<{
  (event: "toggle", value: boolean): boolean;
}>();

const visible = ref(props.initialVisibility);
const contentsContainer = ref<HTMLDivElement>();
const contents = ref<HTMLDivElement>();
const transitionType = ref<"in" | "out" | null>(null);
const firstElementMarginTop = ref("0px");

const setRealHeight = (): void => {
  // https://stackoverflow.com/questions/1762539/margin-on-child-element-moves-parent-element
  // margin top needs to be accounted for
  const firstChild = contents.value?.children.item(0);
  if (firstChild !== undefined && firstChild !== null) {
    const style = window.getComputedStyle(firstChild);
    firstElementMarginTop.value = style.marginTop ?? "0px";
  }
};

onMounted(() => setRealHeight());

const toggleVisibility = (): void => {
  if (!isDefined(contentsContainer)) return;
  const newState = !visible.value;

  visible.value = newState;
  transitionType.value = newState ? "in" : "out";

  emit("toggle", newState);
  setTimeout(() => {
    transitionType.value = null;
  }, TRANSITION_DURATION_MS);
};
</script>

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
