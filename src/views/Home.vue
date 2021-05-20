<template>
  <div class="home space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row space-y-8">
      <article class="intro space-y-4">
        <h4 class="text-4xl prose dark:text-white">Hello. 👋</h4>
        <p
          v-for="(text, index) of introTexts"
          :key="index"
          class="prose dark:text-gray-200"
        >
          {{ text }}
        </p>
      </article>
      <div class="grid col-span-2 md:col-span-1 place-items-center">
        <blockquote class="quote">
          <p class="italic text-center text-gray-400 text-2xl">
            Everybody has a testing environment. Some people are lucky enough
            enough to have a totally separate environment to run production in.
          </p>
          <footer class="text-right text-blue-500">
            <a
              href="https://twitter.com/stahnma/status/634849376343429120"
              class="hover:underline italic font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              ー @stahnma
            </a>
          </footer>
        </blockquote>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row space-y-8">
      <div
        class="grid col-span-2 md:col-span-1 items-center justify-items-center"
      >
        <SpinningCircle />
      </div>
      <article class="technologies space-y-4">
        <h5 class="text-2xl prose dark:text-white">Technologies I use</h5>
        <div class="flex flex-row">
          <div class="flex-grow">
            <ul class="space-y-2">
              <li
                v-for="(technology, index) of technologies"
                :key="index"
                class="
                  grid grid-cols-1
                  md:grid-cols-2
                  grid-flow-row
                  items-center
                "
              >
                <div class="flex flex-row">
                  <span class="text-sm">{{ technology.name }}</span>
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

    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row space-y-8">
      <article class="technologies space-y-4">
        <h5 class="text-2xl prose dark:text-white">Some tools I use</h5>
        <ul>
          <li v-for="(tool, index) of tools" :key="index">
            <span>{{ tool }}</span>
          </li>
        </ul>
      </article>

      <div class="grid col-span-2 md:col-span-1 justify-items-center">
        <img
          alt="Placeholder image"
          src="@/assets/images/icon-512t.png"
          class="w-auto h-auto"
        />
      </div>
    </div>
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
    const introTexts: string[] = [
      `Welcome to my personal site.`,
      `I am a web developer with an engineering background.
      My education is in Aerospace Engineering (structural composites and optimization),
      but I self-taught modern web technologies both as a hobby and professionally.`,
      `I specialize in building intelligent web apps for business workflows.`,
    ];

    const store = useStore();
    const technologies = store.getters.technologies;
    const tools = store.getters.tools;

    return { introTexts, technologies, tools };
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
      left: -10px;
      position: relative;
      top: 30px;
      font-size: 3em;
    }
    &:before {
      content: open-quote;
    }
    &:after {
      content: close-quote;
    }
  }
}
</style>
