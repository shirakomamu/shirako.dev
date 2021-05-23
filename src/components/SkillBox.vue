<template>
  <div
    class="
      box
      p-4
      flex flex-col
      items-center
      justify-center
      rounded-lg
      cursor-default
      transition
      bg-gray-200
      dark:bg-gray-600
      bg-opacity-50
      hover:bg-opacity-60
    "
  >
    <div class="block whitespace-normal w-full">
      <p class="text-center font-semibold overflow-hidden overflow-ellipsis">
        {{ name }}
      </p>
      <p
        v-if="label"
        class="
          text-center text-xs text-gray-600
          dark:text-gray-400
          overflow-hidden overflow-ellipsis
        "
      >
        {{ label }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "SkillBox",
  props: {
    name: {
      type: String,
      default: () => "",
    },
    label: {
      type: String,
      default: () => "",
    },
  },
  setup() {
    onMounted(() => {
      const elems = document.querySelectorAll<HTMLElement>(".box");

      elems.forEach((e) => {
        e.addEventListener("mouseenter", () => {
          e.classList.add("focus");
        });
        e.addEventListener("mouseleave", () => {
          e.classList.remove("focus");
        });

        e.addEventListener("mouseover", () => {
          if (e.classList.contains("animated")) {
            return;
          }
          e.classList.add("animated");

          const x = setInterval(() => {
            if (!e.classList.contains("focus")) {
              e.classList.remove("animated");
              clearInterval(x);
            }
          }, 2000);
        });
      });
    });
  },
});
</script>

<style lang="less" scoped>
.box {
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 40%,
      rgba(255, 255, 255, 0.9) 45%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0.9) 55%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  &.animated:after {
    animation: shine 2s infinite ease;
  }
}

@keyframes shine {
  0% {
    opacity: 0;
    transform: translate(0, 0);
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
    transform: translate(300%, 0);
  }
}

@media (prefers-color-scheme: dark) {
  @keyframes shine {
    0% {
      opacity: 0;
      transform: translate(0, 0);
    }

    50% {
      opacity: 0.1;
    }

    100% {
      opacity: 0;
      transform: translate(300%, 0);
    }
  }
}
</style>
