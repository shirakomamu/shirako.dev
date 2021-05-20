<template>
  <div ref="bar" class="w-full flex flex-row items-center">
    <div ref="barfill" class="fill h-4 flex items-center">
      <span ref="labeltext" class="text prose dark:text-white text-xs">{{
        label
      }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import useStore from "@/use/useStore";
import { MutationEnums } from "@/store/modules/general/enums";

export default defineComponent({
  name: "SkillBar",
  props: {
    level: {
      type: Number,
      default: () => 0,
      validator: (value: unknown) =>
        typeof value === "number" && value >= 0 && value <= 1,
    },
    label: {
      type: String,
      default: () => "",
    },
  },
  setup(props) {
    // const barcover = ref<HTMLElement | undefined>();
    const barfill = ref<HTMLElement | undefined>();
    const labeltext = ref<HTMLElement | undefined>();

    const TIMEOUT_DELAY_MS_MAX = 1000;

    onMounted(() => {
      const store = useStore();

      // const barCover = barcover.value;
      const barfillRef = barfill.value;
      const labeltextRef = labeltext.value;

      if (store.getters.technologiesLoaded) {
        if (labeltextRef) {
          labeltextRef.style.opacity = "1";
        }
        if (barfillRef) {
          barfillRef.style.transition = "unset";
          barfillRef.style.width = props.level * 100 + "%";
        }
        return;
      } else {
        setTimeout(() => {
          if (labeltextRef) labeltextRef.style.opacity = "1";
          if (barfillRef) barfillRef.style.width = props.level * 100 + "%";
          store.commit(MutationEnums.SET_LOADED);
        }, (1 - props.level ** 2 / 2) * TIMEOUT_DELAY_MS_MAX);
      }
    });

    return { barfill, labeltext };
  },
});
</script>

<style lang="less" scoped>
// .bar {
//   position: relative;
// }

.fill {
  position: relative;
  left: 0;
  width: 0%;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  transition: width 1s ease;
  border-radius: 8px;
  z-index: 20;
}

.text {
  position: absolute;
  left: calc(100% + 0.5rem);
  opacity: 0;
  transition: opacity 1s ease;
  z-index: 30;
  white-space: nowrap;
}

// .cover {
//   position: absolute;
//   right: 0;
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
//   opacity: 1;
//   z-index: 3;
// }
</style>
