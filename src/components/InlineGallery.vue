<template>
  <div ref="wrapper" class="relative">
    <div ref="camera" class="camera overflow-hidden">
      <div ref="viewport" class="flex flex-1 flex-row items-center">
        <slot />
      </div>
    </div>
    <div ref="controls" v-if="showControls" class="controls transition">
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
    <div ref="pagination" v-if="showPagination && numChildren > 1">
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

<script setup lang="ts">
import { computed, defineProps, onMounted, onUnmounted, ref, watch } from "vue";
import ArrowBackIos from "@/components/icons/ArrowBackIos.vue";
import ArrowForwardIos from "@/components/icons/ArrowForwardIos.vue";

defineProps({
  showControls: {
    type: Boolean,
    default: false,
  },
  showPagination: {
    type: Boolean,
    default: false,
  },
});

const wrapper = ref<HTMLDivElement | null>(null);
const camera = ref<HTMLDivElement | null>(null);
const viewport = ref<HTMLDivElement | null>(null);
const childElements = ref<HTMLCollection | null>(null);

const currentElementNum = ref<number>(1);

onMounted(() => {
  childElements.value = viewport.value?.children || null;

  if (!childElements.value) return;

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

watch(currentElementNum, (newNum: number) => {
  scrollToElement({
    to: newNum - 1,
    behavior: "smooth",
  });
});

const scrollToElement = ({
  to,
  behavior = "smooth",
}: {
  to: number;
  // eslint-disable-next-line no-undef
  behavior?: ScrollBehavior;
}) => {
  if (!childElements.value) return;
  const elem = childElements.value.item(to);
  if (!elem || !camera.value || !viewport.value) return;

  // using this instead of scrollIntoView because of lack of control over y-axis
  camera.value.scrollTo({
    left: camera.value.getBoundingClientRect().width * to,
    behavior,
  });
};

const numChildren = computed(() => childElements.value?.length || 0);

const goToPrevious = () => {
  currentElementNum.value = Math.max(currentElementNum.value - 1, 1);
};
const goToNext = () => {
  currentElementNum.value = Math.min(
    currentElementNum.value + 1,
    numChildren.value
  );
};

const xDown = ref<undefined | number>(undefined);
const yDown = ref<undefined | number>(undefined);

function handleTouchStart(event: TouchEvent) {
  const firstTouch = event.touches[0];
  xDown.value = firstTouch?.clientX;
  yDown.value = firstTouch?.clientY;
}

function handleTouchMove(event: TouchEvent) {
  if (!xDown.value || !yDown.value) {
    return;
  }

  const xUp = event.touches[0].clientX;
  const yUp = event.touches[0].clientY;
  const xDiff = xDown.value - xUp;
  const yDiff = yDown.value - yUp;
  const xDiffAbs = Math.abs(xDiff);
  const yDiffAbs = Math.abs(yDiff);

  if (xDiffAbs < 50) return;
  if (xDiffAbs > yDiffAbs) {
    xDiff > 0 ? goToNext() : goToPrevious();
  }

  xDown.value = undefined;
  yDown.value = undefined;
}

const resizeObserver = ref<null | ResizeObserver>(null);

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
