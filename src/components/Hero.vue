<template>
  <div
    class="hero h-32 md:h-64 flex flex-col items-center justify-center"
    role="img"
    :alt="'' + currentContext"
  >
    <!-- <div class="stars" /> -->
    <div class="space-x-2 m-2 text-xl md:text-4xl text-center dark:text-white">
      <!-- <span class="font-light"></span> -->
      <span class="font-mono typewriter">
        {{ currentContextResult }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onUnmounted,
  nextTick,
} from "vue";
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
    const timer = ref(0);
    const currentContext = computed(
      () => typewriterContexts[contextIndex.value]
    );
    const typingState = ref(0);
    const currentContextResult = ref("");

    const wordDisplayTime = 5000;
    const wordBlankTime = 1000;
    const wordTypeDelay = 30;

    const doWordCycle = (delay: number) => {
      typeWord(currentContext.value, wordTypeDelay);
      setTimeout(() => {
        eraseWord(wordTypeDelay);
      }, delay);
    };
    const typeWord = (word: string, delay: number) => {
      if (typingState.value !== 0) {
        return;
      }
      typingState.value = 1;
      currentContextResult.value = "";
      let timer: number = setInterval(() => {
        const contextLength = currentContextResult.value.length;
        if (contextLength === word.length) {
          typingState.value = 0;
          clearInterval(timer);
        }
        currentContextResult.value = word.slice(0, contextLength + 1);
      }, delay);
    };
    const eraseWord = (delay: number) => {
      if (typingState.value !== 0) {
        return;
      }
      typingState.value = -1;
      let timer: number = setInterval(() => {
        const contextLength = currentContextResult.value.length;
        if (contextLength === 0) {
          typingState.value = 0;
          clearInterval(timer);
        }
        currentContextResult.value = currentContextResult.value.slice(0, -1);
      }, delay);
    };

    onMounted(() => {
      doWordCycle(wordDisplayTime);

      if (timer.value) {
        return;
      }

      timer.value = setInterval(async () => {
        contextIndex.value =
          (contextIndex.value + 1) % typewriterContexts.length;

        await nextTick();
        doWordCycle(wordDisplayTime);
      }, wordDisplayTime + wordBlankTime);
    });

    onUnmounted(() => (timer.value = 0));

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
});
</script>

<style scoped lang="less">
.hero {
  position: relative;
  // background: linear-gradient(
  //   30deg,
  //   rgba(2, 0, 36, 0.05) 0%,
  //   rgba(37, 95, 111, 0.05) 45%,
  //   rgba(38, 99, 112, 0.05) 50%,
  //   rgba(41, 95, 115, 0.05) 55%,
  //   rgba(42, 8, 74, 0.05) 100%
  // );
}
.typewriter {
  // white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */

  &::after {
    content: "";
    border-right: 0.1em solid;
    animation: blink-caret 1s step-end infinite;
    @media (prefers-color-scheme: dark) {
      animation: blink-caret-dark 1s step-end infinite;
    }
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgba(0, 0, 0, 0.8);
  }
}

@keyframes blink-caret-dark {
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
  // background: transparent url(~@/assets/images/stars.png) repeat top center;
  // background-size: contain;
}
</style>
