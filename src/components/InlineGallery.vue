<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import ArrowBackIos from "@/components/icons/IconArrowBackIos.vue";
import ArrowForwardIos from "@/components/icons/IconArrowForwardIos.vue";
import { isDefined } from "@vueuse/core";

const SCROLL_DIST_SNAP_PX = 50;

const props = defineProps<{
  showControls: boolean;
  showPagination: boolean;
}>();

const wrapper = ref<HTMLDivElement>();
const camera = ref<HTMLDivElement>();
const viewport = ref<HTMLDivElement>();
const childElements = ref<HTMLCollection>();
const currentElementNum = ref(1);
const xDown = ref<number | null>(null);
const yDown = ref<number | null>(null);
const resizeObserver = ref<ResizeObserver>();
const numChildren = computed(() => childElements.value?.length ?? 0);

onMounted(() => {
  if (!isDefined(viewport)) return;
  childElements.value = viewport.value.children;

  for (const elem of childElements.value) {
    elem.classList.add("flex-shrink-0");
    elem.classList.add("w-full");
    elem.classList.add("h-full");
    const images = elem.querySelectorAll("img");

    for (const image of images) {
      image.classList.add("max-h-60vh");
      image.classList.add("object-scale-down");
      image.classList.add("w-full");
    }
  }
});

const scrollToElement = ({
  to,
  behavior = "smooth",
}: {
  to: number;
  behavior?: ScrollBehavior;
}): void => {
  if (!isDefined(childElements)) return;
  const elem = childElements.value.item(to);
  if (elem === null || !isDefined(camera) || !isDefined(viewport)) return;

  // using this instead of scrollIntoView because of lack of control over y-axis
  camera.value.scrollTo({
    left: camera.value.getBoundingClientRect().width * to,
    behavior,
  });
};

watch(currentElementNum, (newNum) => {
  scrollToElement({
    to: newNum - 1,
    behavior: "smooth",
  });
});

const goToPrevious = (): void => {
  currentElementNum.value = Math.max(currentElementNum.value - 1, 1);
};
const goToNext = (): void => {
  currentElementNum.value = Math.min(
    currentElementNum.value + 1,
    numChildren.value
  );
};

function handleTouchStart(event: TouchEvent): void {
  const firstTouch = event.touches[0];
  xDown.value = firstTouch?.clientX;
  yDown.value = firstTouch?.clientY;
}

function handleTouchMove(event: TouchEvent): void {
  if (xDown.value === null || yDown.value === null) return;

  const xUp = event.touches[0].clientX;
  const yUp = event.touches[0].clientY;
  const xDiff = xDown.value - xUp;
  const yDiff = yDown.value - yUp;
  const xDiffAbs = Math.abs(xDiff);
  const yDiffAbs = Math.abs(yDiff);

  if (xDiffAbs < SCROLL_DIST_SNAP_PX) return;
  if (xDiffAbs > yDiffAbs) {
    if (xDiff > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  }

  xDown.value = null;
  yDown.value = null;
}

onMounted(() => {
  resizeObserver.value = new ResizeObserver(() => {
    scrollToElement({ to: currentElementNum.value - 1, behavior: "auto" });
  });
  resizeObserver.value.observe(document.documentElement);
  viewport.value?.addEventListener("touchstart", handleTouchStart, false);
  viewport.value?.addEventListener("touchmove", handleTouchMove, false);
});

onUnmounted(() => resizeObserver.value?.disconnect());
</script>

<template>
  <div ref="wrapper" class="relative">
    <div ref="camera" class="camera overflow-hidden">
      <div ref="viewport" class="flex flex-1 flex-row items-center">
        <slot />
      </div>
    </div>

    <div ref="controls" v-if="props.showControls" class="controls transition">
      <button
        class="absolute top-1/2 left-0 p-0 ml-0 sm:ml-2 transition opacity-50 hover:opacity-100 focus:opacity-100 disabled:(invisible cursor-default)"
        type="button"
        alt="View previous"
        @click="goToPrevious"
        :disabled="currentElementNum <= 1"
      >
        <ArrowBackIos class="icon-inline text-4xl" />
      </button>
      <button
        class="absolute top-1/2 right-0 p-0 mr-0 sm:mr-2 transition opacity-50 hover:opacity-100 focus:opacity-100 disabled:(invisible cursor-default)"
        type="button"
        alt="View next"
        @click="goToNext"
        :disabled="currentElementNum >= numChildren"
      >
        <ArrowForwardIos class="icon-inline text-4xl" />
      </button>
    </div>

    <div ref="pagination" v-if="props.showPagination && numChildren > 1">
      <div class="space-x-2 text-center">
        <button
          type="button"
          @click="currentElementNum = index"
          v-for="index in numChildren"
          :key="index"
          class="pagination-button inline-block rounded-md bg-current h-3 transition px-0"
          :class="{
            active: currentElementNum === index,
            'opacity-20': currentElementNum !== index,
            'opacity-100': currentElementNum === index,
          }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.controls {
  opacity: 0;
}
.camera:hover {
  & + .controls {
    opacity: 1;
  }
}
.controls:hover {
  opacity: 1;
}

.pagination-button {
  transition: width 0.2s ease;

  width: 1rem;
  &.active {
    width: 2rem;
  }
}
</style>
