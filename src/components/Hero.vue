<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import shuffleArray from "@/utils/shuffleArray";
import { useGeneralStore } from "@/stores/general";

const store = useGeneralStore();

// clone so it doesn't change the order of the list
const techs = store.technologies.map((e) => e.name);
const typewriterContexts = shuffleArray([...techs]);

const contextIndex = ref(0);
const timer = ref<ReturnType<typeof setInterval> | null>(null);
const currentContext = computed(() => typewriterContexts[contextIndex.value]);
const typingState = ref(0);
const currentContextResult = ref("");

const wordDisplayTime = 5000;
const wordBlankTime = 1000;
const wordTypeDelay = 30;

const typeWord = (word: string, delay: number): void => {
  if (typingState.value !== 0) {
    return;
  }
  typingState.value = 1;
  currentContextResult.value = "";
  const localTimer = setInterval(() => {
    const contextLength = currentContextResult.value.length;
    if (contextLength === word.length) {
      typingState.value = 0;
      clearInterval(localTimer);
    }
    currentContextResult.value = word.slice(0, contextLength + 1);
  }, delay);
};

const eraseWord = (delay: number): void => {
  if (typingState.value !== 0) {
    return;
  }
  typingState.value = -1;
  const localTimer = setInterval(() => {
    const contextLength = currentContextResult.value.length;
    if (contextLength === 0) {
      typingState.value = 0;
      clearInterval(localTimer);
    }
    currentContextResult.value = currentContextResult.value.slice(0, -1);
  }, delay);
};

const doWordCycle = (delay: number): void => {
  typeWord(currentContext.value, wordTypeDelay);
  setTimeout(() => {
    eraseWord(wordTypeDelay);
  }, delay);
};

onMounted(() => {
  doWordCycle(wordDisplayTime);

  if (timer.value !== null) {
    return;
  }

  timer.value = setInterval(async () => {
    contextIndex.value = (contextIndex.value + 1) % typewriterContexts.length;

    await nextTick();
    doWordCycle(wordDisplayTime);
  }, wordDisplayTime + wordBlankTime);
});

onUnmounted(() => (timer.value = null));
</script>

<template>
  <div
    class="hero h-32 md:h-48 flex flex-col items-center justify-center"
    role="img"
    :alt="'' + currentContext"
  >
    <div class="sm-2 text-2xl md:text-4xl text-center dark:text-white">
      <span class="font-mono typewriter">
        {{ currentContextResult }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.hero {
  position: relative;
}
.typewriter {
  margin: 0 auto;

  &::after {
    content: "";
    border-right: 0.1em solid;
    animation: blink-caret 1s step-end infinite;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    @apply border-white dark:border-black border-opacity-80;
  }
}
.stars {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
