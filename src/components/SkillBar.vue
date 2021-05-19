<template>
  <div class="bar">
    <div ref="barfill" class="fill">
      <div ref="barcover" class="cover" />
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
  },
  setup(props) {
    // const barcover = ref<HTMLElement | undefined>();
    const barfill = ref<HTMLElement | undefined>();

    onMounted(() => {
      const store = useStore();
      // const barCover = barcover.value;
      const barFill = barfill.value;

      // if (barCover) barCover.style.width = (1 - props.level) * 100 + "%";
      if (barFill) {
        if (store.getters.technologiesLoaded) {
          barFill.style.transition = "unset";
          barFill.style.width = props.level * 100 + "%";
          return;
        }

        setTimeout(() => {
          barFill.style.width = props.level * 100 + "%";
          if (!store.getters.technologiesLoaded) {
            store.commit(MutationEnums.SET_LOADED);
          }
        }, 1000);
      }
    });

    return { barfill };
  },
});
</script>

<style lang="less" scoped>
.bar {
  position: relative;
}

.fill {
  position: absolute;
  left: 0;
  width: 0%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(253, 29, 29, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
  transition: width 1s ease;
  border-radius: 8px;
  z-index: 2;
}
.cover {
  position: absolute;
  right: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  opacity: 1;
  z-index: 3;
}
</style>
