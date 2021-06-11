<template>
  <component
    :is="link ? 'a' : 'div'"
    v-bind:href="link"
    v-bind:target="link ? '_blank' : null"
    v-bind:rel="link ? 'noopener noreferrer' : null"
    class="
      box
      cursor-default
      p-4
      flex flex-col
      items-center
      justify-center
      rounded-lg
      bg-gray-200
      dark:bg-gray-600
      bg-opacity-50
      hover:bg-opacity-0
    "
    :class="{ pointer: link }"
  >
    <div class="block w-full">
      <p
        class="
          text-center text-sm
          font-semibold
          overflow-hidden overflow-ellipsis
        "
      >
        {{ name }}
        <OpenInNew v-if="link" class="icon" />
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
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OpenInNew from "./icons/OpenInNew.vue";

export default defineComponent({
  components: { OpenInNew },
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
    link: {
      type: String,
      default: () => null,
    },
  },
  // setup() {
  //   onMounted(() => {
  //     const elems = document.querySelectorAll<HTMLElement>(".box");

  //     const animationDuration = 1.5; // seconds
  //     elems.forEach((e) => {
  //       e.addEventListener("mouseenter", () => {
  //         e.classList.add("focus");
  //       });
  //       e.addEventListener("mouseleave", () => {
  //         e.classList.remove("focus");
  //       });

  //       e.addEventListener("mouseover", () => {
  //         if (e.classList.contains("animated")) {
  //           return;
  //         }
  //         e.classList.add("animated");

  //         const x = setInterval(() => {
  //           if (!e.classList.contains("focus")) {
  //             e.classList.remove("animated");
  //             clearInterval(x);
  //           }
  //         }, animationDuration * 1000);
  //       });
  //     });
  //   });
  // },
});
</script>

<style lang="less" scoped>
.box {
  &.pointer {
    cursor: pointer;
  }
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
    animation: shine 1.5s infinite cubic-bezier(0.52, 0.36, 0.48, 0.9);
    transition-property: opacity;
    transition-duration: 1.5s;
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

  &:hover:after {
    opacity: 0.2;
    @media (prefers-color-scheme: dark) {
      opacity: 0.02;
    }
  }
}

@keyframes shine {
  100% {
    left: 100%;
  }
}

.block {
  z-index: 2;
}

.icon {
  display: inline;
  width: 0.9rem;
  opacity: 0.54;
  fill: black;

  @media (prefers-color-scheme: dark) {
    fill: white;
  }
}
</style>
