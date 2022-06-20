<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";
import SkillBox from "@/components/SkillBox.vue";
import ToolBox from "@/components/ToolBox.vue";
import ExpandMore from "@/components/icons/IconExpandMore.vue";
import { useGeneralStore } from "@/stores/general";

const route = useRoute();
useMeta({
  title: `Home | ${import.meta.env.VITE_APP_NAME}`,
  link: [
    {
      rel: "canonical",
      href: "https://shirako.dev" + route.path,
    },
  ],
});
const store = useGeneralStore();

const mainText = ref<HTMLDivElement | null>(null);
const skillBoxes = ref<HTMLDivElement | null>(null);

const GUIDE_ARROW_DELAY = 5000; // ms, time to wait before arrow initially appears
const isGuideArrowVisible = ref<boolean>(false);
const hasIntersected = computed(() => store.isBioRead);

const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]): void => {
    // if user has scrolled down, detected by skill boxes being visible, then set the flag
    const skillBoxesEvent = entries.find((e) => e.target === skillBoxes.value);
    if (skillBoxesEvent?.isIntersecting === true) {
      store.markBioAsRed(true);
      observer.unobserve(skillBoxes.value as HTMLDivElement);
    }

    // main arrow logic
    const mainTextEvent = entries.find((e) => e.target === mainText.value);
    if (mainTextEvent === undefined || mainTextEvent.time < GUIDE_ARROW_DELAY) {
      return;
    }

    isGuideArrowVisible.value = mainTextEvent.isIntersecting;
  },
  { threshold: 0.9 }
);

onMounted(() => {
  observer.observe(mainText.value as HTMLDivElement);
  observer.observe(skillBoxes.value as HTMLDivElement);

  // activate the guide arrow only if the user hasn't scrolled down
  setTimeout(() => {
    if (!hasIntersected.value) {
      isGuideArrowVisible.value = true;
    }
  }, GUIDE_ARROW_DELAY);
});
</script>

<template>
  <div class="space-y-8 grid justify-center">
    <div
      v-if="!hasIntersected"
      class="arrow-container fixed left-0 w-full grid justify-items-center z-2 transition"
      :class="{
        'opacity-60': isGuideArrowVisible,
        'opacity-0': !isGuideArrowVisible,
      }"
    >
      <ExpandMore class="icon-inline text-8xl" />
    </div>

    <div class="grid grid-cols-1 grid-flow-row gap-4 max-w-prose">
      <div class="intro grid items-center pb-28">
        <article class="space-y-4">
          <h4 ref="mainText" class="text-3xl dark:text-white text-center">
            <span class="opacity-50">Hi, I am </span
            ><ruby>白狐<rt>しらこ</rt>マム</ruby>
            <span class="text-lg">
              <span class="opacity-50"> (</span>Mamu Shirako<span
                class="opacity-50"
                >)</span
              ><span class="opacity-50">.</span></span
            >
          </h4>

          <p>
            I'm a software engineer based in California. My education was in
            Aerospace Engineering. I specialize in developing web apps using
            modern technologies such as Vue, Node, and TypeScript.
          </p>

          <p>I first started programming as a hobby more than 10 years ago.</p>

          <p>
            I enjoy listening to music (favorites are from Touhou, NieR, and
            Final Fantasy), cooking, and hiking when I have time. I also
            occasionally make digital art in Photoshop.
          </p>

          <p>
            I also have a soft spot for cats, so you may sometimes come across
            cat illustrations, courtesy of
            <a
              href="https://irasutoya.com"
              target="_blank"
              ref="noopener noreferrer"
              class="ps-text-link"
              >Irasutoya</a
            >.
          </p>
        </article>
      </div>

      <div class="space-y-8 w-full max-w-prose mt-8">
        <h5 ref="skillBoxes" class="text-2xl dark:text-white">
          Core competencies
        </h5>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <SkillBox
            v-for="(technology, index) of store.technologies"
            :key="index"
            :name="technology.name"
            :link="technology.link"
            :logo-src="technology.logoSrc"
            :logo-src-when-dark="technology.logoSrcWhenDark"
            :logo-alt="technology.logoAlt"
          />
        </div>
      </div>

      <div class="space-y-8 w-full max-w-prose mt-8">
        <h5 class="text-2xl dark:text-white">Tools of choice</h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ToolBox
            v-for="(tool, index) of store.tools"
            :key="index"
            :name="tool.name"
            :logo-src="tool.logoSrc"
            :logo-src-when-dark="tool.logoSrcWhenDark"
            :logo-alt="tool.logoAlt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.arrow-container {
  bottom: 0;
  animation-name: bounce;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0%,
  25%,
  62.5%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
  }
  75% {
    transform: translateY(-0.5rem);
  }
}

.intro {
  min-height: 100vh - 5rem;
}
</style>
