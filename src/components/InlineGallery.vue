<template>
  <div ref="wrapper" class="relative">
    <div ref="camera" class="camera overflow-hidden">
      <div ref="viewport" class="flex flex-1 flex-row items-center">
        <slot />
      </div>
    </div>
    <div ref="controls" v-if="showControls" class="controls transition">
      <button
        class="
          absolute
          top-1/2
          left-0
          p-0
          ml-0
          sm:ml-2
          transition
          opacity-50
          hover:opacity-100
          focus:opacity-100
          disabled:(invisible
          cursor-default)
        "
        type="button"
        alt="View previous"
        @click="goToPrevious"
        :disabled="currentElementNum <= 1"
      >
        <ArrowBackIos class="icon-inline text-4xl" />
      </button>
      <button
        class="
          absolute
          top-1/2
          right-0
          p-0
          mr-0
          sm:mr-2
          transition
          opacity-50
          hover:opacity-100
          focus:opacity-100
          disabled:(invisible
          cursor-default)
        "
        type="button"
        alt="View next"
        @click="goToNext"
        :disabled="currentElementNum >= numChildren"
      >
        <ArrowForwardIos class="icon-inline text-4xl" />
      </button>
    </div>
    <div ref="pagination" v-if="showPagination">
      <div class="space-x-2 text-center">
        <button
          type="button"
          @click="currentElementNum = index"
          v-for="index in numChildren"
          :key="index"
          class="
            pagination-button
            inline-block
            rounded-md
            bg-current
            h-3
            transition
            px-0
          "
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

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import ArrowBackIos from "./icons/ArrowBackIos.vue";
import ArrowForwardIos from "./icons/ArrowForwardIos.vue";
import modulus from "@/utils/modulus";

export default defineComponent({
  components: { ArrowBackIos, ArrowForwardIos },
  name: "InlineGallery",
  props: {
    showControls: {
      type: Boolean,
      default: false,
    },
    showPagination: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
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

      // const rect = elem.getBoundingClientRect();

      // using this instead of scrollIntoView because of lack of control over y-axis
      camera.value.scrollTo({
        left: camera.value.getBoundingClientRect().width * to,
        behavior,
      });
      // elem.scrollIntoView({ behavior, block: "nearest" });
    };

    const numChildren = computed(() => childElements.value?.length || 0);

    const infiniteRolloverChildrenFocus = (target: number) => {
      return 1 + modulus(target - 1, numChildren.value);
    };

    const goToPrevious = () => {
      currentElementNum.value = infiniteRolloverChildrenFocus(
        currentElementNum.value - 1
      );
    };
    const goToNext = () => {
      currentElementNum.value = infiniteRolloverChildrenFocus(
        currentElementNum.value + 1
      );
    };

    const resizeObserver = ref<null | ResizeObserver>(null);

    onMounted(() => {
      resizeObserver.value = new ResizeObserver(() => {
        scrollToElement({ to: currentElementNum.value - 1, behavior: "auto" });
      });
      resizeObserver.value.observe(wrapper.value as HTMLDivElement);
    });

    onUnmounted(() => resizeObserver.value?.disconnect());

    return {
      currentElementNum,
      wrapper,
      camera,
      viewport,
      childElements,
      numChildren,

      scrollToElement,
      goToPrevious,
      goToNext,

      resizeObserver,
    };
  },
});
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
