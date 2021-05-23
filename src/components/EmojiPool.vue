<template>
  <div class="emoji-container grid grid-cols-3 items-center h-full">
    <div
      v-for="(emoji, index) in emojis"
      :key="index"
      class="emoji text-5xl grid items-center justify-items-center"
    >
      {{ emoji }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "EmojiPool",
  setup() {
    const emojis = ["🦊", "🌽", "🌧️", "🍔", "⛩️", "🍣", "🏞️", "🍍", "🐈"];

    onMounted(() => {
      const elems = document.querySelectorAll<HTMLElement>(".emoji");

      elems.forEach((e) => {
        e.addEventListener("animationend", () => {
          e.classList.remove("animated");
        });

        e.addEventListener("mouseover", () => {
          e.classList.add("animated");
        });
      });
    });

    return { emojis };
  },
});
</script>

<style lang="less" scoped>
.emoji-container,
.emoji {
  aspect-ratio: 1/1;
}

// .emoji-container {
//   position: relative;
//   min-height: 200px;
//   min-width: 200px;
// }

// .emoji-track {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   animation: spin linear infinite;
// }

.emoji {
  cursor: default;
  &.animated {
    animation: spin 2s ease-in-out;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
