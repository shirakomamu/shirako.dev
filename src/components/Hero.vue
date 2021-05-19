<template>
  <div class="hero h-64 flex flex-col items-center justify-center">
    <div class="stars" />
    <div class="space-x-2 m-2">
      <span class="text-white text-2xl font-light print:text-black"
        >I do...</span
      >
      <span class="text-white font-mono text-2xl print:text-black typewriter">
        {{ currentContextResult }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import useStore from "@/use/useStore";
import shuffleArray from "@/utils/shuffleArray";

export default defineComponent({
  name: "Hero",
  setup() {
    const store = useStore();

    // clone so it doesn't change the order of the list
    const techs = store.getters.technologies.map((e) => e.name);
    const typewriterContexts = shuffleArray([...techs]);

    const contextIndex = ref(0);
    const timer = 0;
    const currentContext = computed(
      () => typewriterContexts[contextIndex.value]
    );
    const typingState = ref(0);
    const currentContextResult = ref("");

    const wordDisplayTime = 5000;
    const wordBlankTime = 1000;
    const wordTypeDelay = 30;

    return {
      typewriterContexts,
      contextIndex,
      timer,
      currentContext,
      currentContextResult,
      typingState,
      wordDisplayTime,
      wordBlankTime,
      wordTypeDelay,
    };
  },
  mounted() {
    this.doWordCycle(this.wordDisplayTime);

    if (this.timer) {
      console.log("Ignoring");
      return;
    }

    this.timer = setInterval(() => {
      this.contextIndex =
        (this.contextIndex + 1) % this.typewriterContexts.length;

      this.$nextTick(() => this.doWordCycle(this.wordDisplayTime));
    }, this.wordDisplayTime + this.wordBlankTime);
  },
  unmounted() {
    this.timer = 0;
  },
  methods: {
    doWordCycle(delay: number) {
      this.typeWord(this.currentContext, this.wordTypeDelay);
      setTimeout(() => {
        this.eraseWord(this.wordTypeDelay);
      }, delay);
    },
    typeWord(word: string, delay: number) {
      if (this.typingState !== 0) {
        return;
      }
      this.typingState = 1;
      this.currentContextResult = "";
      let timer: number = setInterval(() => {
        const contextLength = this.currentContextResult.length;
        if (contextLength === word.length) {
          this.typingState = 0;
          clearInterval(timer);
        }
        this.currentContextResult = word.slice(0, contextLength + 1);
      }, delay);
    },
    eraseWord(delay: number) {
      if (this.typingState !== 0) {
        return;
      }
      this.typingState = -1;
      let timer: number = setInterval(() => {
        const contextLength = this.currentContextResult.length;
        if (contextLength === 0) {
          this.typingState = 0;
          clearInterval(timer);
        }
        this.currentContextResult = this.currentContextResult.slice(0, -1);
      }, delay);
    },
  },
});
</script>

<style scoped lang="less">
.hero {
  position: relative;
  background: linear-gradient(
    30deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(37, 95, 111, 1) 45%,
    rgba(38, 99, 112, 1) 50%,
    rgba(41, 95, 115, 1) 55%,
    rgba(42, 8, 74, 1) 100%
  );
}
.typewriter {
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */

  &::after {
    content: "";
    border-right: 0.1em solid rgba(255, 255, 255, 0.8); /* The typewriter cursor */
    animation: blink-caret 1s step-end infinite;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgba(255, 255, 255, 0.8);
  }
}

.stars {
  width: 100%;
  height: 100%;
  position: absolute;
  background: transparent url(~@/assets/images/stars.png) repeat top center;
}
</style>
