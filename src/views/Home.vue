<template>
  <div class="space-y-8 mt-5vh md:mt-15vh">
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

    <div class="grid grid-cols-1 grid-flow-row gap-4 justify-items-center">
      <article class="space-y-4 max-w-prose min-h-90vh md:min-h-75vh">
        <h4 ref="mainText" class="text-4xl dark:text-white">
          <span class="opacity-50">Hello, I'm </span
          ><ruby>白狐<rt>しらこ</rt>マム</ruby><span class="opacity-50">,</span>
        </h4>
        <h4 class="text-2xl">
          <span class="opacity-50">but you can call me </span
          ><span class="font-semibold">Mamu</span
          ><span class="opacity-50">.</span>
        </h4>
        <p>
          I'm a software engineer based in California. My education was in
          Aerospace Engineering. I specialize in developing web apps using
          modern technologies such as Vue, Node, and TypeScript.
        </p>

        <p>
          I first started programming as a hobby with MATLAB (and occasionally
          Python) more than 10 years ago.
        </p>

        <p>
          Outside of programming, I enjoy listening to music (favorites are from
          Touhou and Final Fantasy), cooking, and hiking when I have time. I
          also occasionally make digital art in Photoshop.
        </p>

        <p>
          I also have a soft spot for cats, so you may sometimes come across cat
          illustrations, courtesy of
          <a
            href="http://irasutoya.com"
            target="_blank"
            ref="noopener noreferrer"
            class="ps-text-link"
            >Irasutoya</a
          >.
        </p>
      </article>

      <div class="space-y-8 w-full max-w-prose mt-8">
        <h5 ref="skillBoxes" class="text-2xl dark:text-white">
          Core competencies
        </h5>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <SkillBox
            v-for="(technology, index) of technologies"
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
            v-for="(tool, index) of tools"
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

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";
import useStore from "@/use/useStore";
import SkillBox from "@/components/SkillBox.vue";
import ToolBox from "@/components/ToolBox.vue";
import ExpandMore from "@/components/icons/ExpandMore.vue";
import { MutationEnums } from "@/store/modules/general/enums";

const route = useRoute();
useMeta({
  title: "Home | " + process.env.VUE_APP_NAME,
  link: [
    {
      rel: "canonical",
      href: "https://shirako.dev" + route.path,
    },
  ],
});

const mainText = ref<HTMLDivElement | null>(null);
const skillBoxes = ref<HTMLDivElement | null>(null);

const store = useStore();
const { technologies, tools } = store.getters;

const GUIDE_ARROW_DELAY = 5000; // ms, time to wait before arrow initially appears
const isGuideArrowVisible = ref<boolean>(false);
const hasIntersected = computed(() => store.getters.isBioRead);
const setIntersected = (value: boolean) => {
  store.commit(MutationEnums.SET_BIO_AS_READ, value);
};

const onObserved = (entries: IntersectionObserverEntry[]) => {
  // if user has scrolled down, detected by skill boxes being visible, then set the flag
  const skillBoxesEvent = entries.find((e) => e.target === skillBoxes.value);
  if (skillBoxesEvent && skillBoxesEvent.isIntersecting) {
    setIntersected(true);
    observer.unobserve(skillBoxes.value as HTMLDivElement);
  }

  // main arrow logic
  const mainTextEvent = entries.find((e) => e.target === mainText.value);
  if (!mainTextEvent || mainTextEvent.time < GUIDE_ARROW_DELAY) return;

  isGuideArrowVisible.value = mainTextEvent.isIntersecting;
};
const observer = new IntersectionObserver(onObserved, {
  threshold: 0.9,
});

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
</style>
