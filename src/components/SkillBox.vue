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
      bg-gray-200
      dark:bg-gray-600
      bg-opacity-50
      hover:bg-opacity-0
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

      const animationDuration = 1.5; // seconds
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
          }, animationDuration * 1000);
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
  transition-property: background-color opacity;
  transition-duration: 0.4s;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.1) 0%,
    rgba(253, 29, 29, 0.1) 50%,
    rgba(252, 176, 69, 0.1) 100%
  );

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.4s;
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 0.15) 0%,
      rgba(253, 29, 29, 0.15) 50%,
      rgba(252, 176, 69, 0.15) 100%
    );
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: -50%;
    left: -200%;
    width: 200%;
    height: 150%;
    opacity: 0;
    background: linear-gradient(
      -30deg,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0.5) 30%,
      rgba(255, 255, 255, 0.9) 35%,
      rgba(255, 255, 255, 1) 40%,
      rgba(255, 255, 255, 0.9) 45%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    );
  }

  &.animated:after {
    animation: shine 1.5s infinite cubic-bezier(0.52, 0.36, 0.48, 0.9);
  }
}

@keyframes shine {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.2;
  }

  100% {
    opacity: 0;
    left: 100%;
  }
}

@media (prefers-color-scheme: dark) {
  @keyframes shine {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.02;
    }

    100% {
      opacity: 0;
      left: 100%;
    }
  }
}
</style>
