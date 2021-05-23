<template>
  <div class="home space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
      <article class="intro space-y-4 max-w-prose">
        <h4 class="text-4xl dark:text-white">Hello. 👋</h4>
        <p
          v-for="(text, index) of introTexts"
          :key="index"
          class="dark:text-gray-200"
        >
          {{ text }}
        </p>
      </article>
      <div class="grid col-span-2 md:col-span-1 place-items-center">
        <blockquote class="quote">
          <p class="italic text-center text-gray-400 text-2xl">
            {{ quote.text }}
          </p>
          <footer class="text-right">
            <a
              :href="quote.source"
              class="
                hover:underline
                focus:underline
                italic
                font-semibold
                text-blue-500
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              ー {{ quote.author }}
            </a>
          </footer>
        </blockquote>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        class="grid col-span-2 md:col-span-1 items-center justify-items-center"
      >
        <SpinningCircle />
      </div>
      <article class="technologies space-y-4">
        <h5 class="text-2xl dark:text-white">Technologies I use</h5>
        <div class="flex flex-row">
          <div class="flex-grow">
            <ul class="space-y-4">
              <li
                v-for="(technology, index) of technologies"
                :key="index"
                class="grid grid-cols-1 md:grid-cols-2 items-center"
              >
                <div class="flex flex-row">
                  <span>{{ technology.name }}</span>
                  <span
                    class="
                      ml-1
                      mr-1
                      flex-1
                      leader
                      text-gray-200
                      dark:text-gray-600
                    "
                  />
                </div>
                <div class="flex flex-initial flex-row items-center">
                  <SkillBar
                    :level="technology.skill"
                    :label="technology.label"
                  />
                </div>
              </li>
              <li>... and always learning more.</li>
            </ul>
          </div>
          <div>
            <!-- for proper margin spacing, show the longest string -->
            <div class="ml-2 opacity-0">
              {{
                technologies
                  .map((e) => e.label)
                  .sort((a, b) => b.length - a.length)[0]
              }}
            </div>
          </div>
        </div>
      </article>
    </div>

    <article class="tools space-y-4">
      <h5 class="text-2xl dark:text-white">Tools I use</h5>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <article
          v-for="(tool, index) of tools"
          :key="index"
          class="max-w-prose space-y-4"
        >
          <p class="font-bold dark:text-white">{{ tool.name }}</p>
          <p>{{ tool.description }}</p>
        </article>
      </div>
    </article>

    <!-- <div class="col-span-2 md:col-span-1">
        <article class="tools space-y-4 max-w-prose">
          <h5 class="text-2xl dark:text-white">My interests</h5>
          <p>
            For the sake of brevity, I represent my interests here with emojis.
          </p>
          <div class="grid items-center justify-items-center">
            <EmojiPool />
          </div>
        </article>
      </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/use/useStore";
import SkillBar from "@/components/SkillBar.vue";
import SpinningCircle from "@/components/SpinningCircle.vue";

export default defineComponent({
  name: "Home",
  components: {
    SkillBar,
    SpinningCircle,
  },
  setup() {
    const introTexts = [
      `Welcome to my personal site.`,
      `I am a web developer with an engineering background.
      My education is in Aerospace Engineering (structural composites and optimization),
      but I self-taught modern web technologies both as a hobby and professionally.`,
      `I specialize in building intelligent web apps for business workflows.`,
    ];
    const quote = {
      text: `Everybody has a testing environment.
      Some people are lucky enough to have a totally separate environment to run production in.`,
      source: "https://twitter.com/stahnma/status/634849376343429120",
      author: "@stahnma",
    };

    const store = useStore();
    const technologies = store.getters.technologies;
    const tools = store.getters.tools;

    return { introTexts, technologies, tools, quote };
  },
});
</script>

<style lang="less" scoped>
.leader {
  display: block;
  overflow-x: hidden;

  &:before {
    float: right;
    text-align: right;
    white-space: nowrap;
    content: ". . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . "
      ". . . . . . . . . . . . . . . . . . . . ";
  }
}

.quote {
  p {
    &:before,
    &:after {
      font-family: serif;
      display: inline;
      height: 0;
      line-height: 0;
      position: relative;
      font-size: 3em;
      top: 1.5rem;
    }
    &:before {
      left: -1rem;
      content: open-quote;
    }
    &:after {
      left: 0rem;
      content: close-quote;
    }
  }
}
</style>
