<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row">
      <article class="intro space-y-4 max-w-prose">
        <h4 class="text-4xl dark:text-white">
          <span class="opacity-50">Hello, I'm </span
          ><ruby>白狐<rt>しらこ</rt>マム</ruby><span class="opacity-50">,</span>
        </h4>
        <h4 class="text-2xl">
          <span class="opacity-50">but you can call me </span
          ><span class="font-semibold">Mamu</span
          ><span class="opacity-50">.</span>
        </h4>
        <p class="dark:text-gray-200">
          I'm a web developer specializing in Vue and Node, and I'm based in
          California. Although my education is in Aerospace Engineering, I now
          specialize in developing web apps using modern web technologies.
        </p>
      </article>
      <div class="grid grid-cols-1 col-span-2 md:col-span-1 place-items-center">
        <blockquote class="quote mt-8">
          <p
            class="italic text-center text-gray-600 dark:text-gray-400 text-xl"
          >
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
                text-blue-srk
              "
              target="_blank"
              rel="noopener noreferrer"
            >
              ― {{ quote.author }}
            </a>
          </footer>
        </blockquote>
      </div>
    </div>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div
        class="
          grid grid-cols-1
          col-span-2
          xl:col-span-1
          items-center
          justify-items-center
        "
      >
        <img
          alt="Cat using laptop"
          src="@/assets/images/irasutoya/animal_chara_computer_neko.png"
          class="mx-auto h-64 m-4"
        />
      </div>
      <div>
        <!-- <h5 class="text-2xl dark:text-white">Technologies I use</h5> -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
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
    </div>

    <h5 class="text-2xl dark:text-white">Productivity tools</h5>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <ToolBox
        v-for="(tool, index) of tools"
        :key="index"
        :name="tool.name"
        :description="tool.description"
        :logo-src="tool.logoSrc"
        :logo-src-when-dark="tool.logoSrcWhenDark"
        :logo-alt="tool.logoAlt"
      />
    </div>

    <!-- <div
      class="
        tools-disclaimers
        text-xs text-gray-600
        dark:text-gray-400
        overflow-hidden overflow-ellipsis
        opacity-50
      "
    >
      <p v-for="(tool, index) of tools" :key="index">{{ tool.disclaimer }}</p>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/use/useStore";
import SkillBox from "@/components/SkillBox.vue";
import ToolBox from "@/components/ToolBox.vue";

export default defineComponent({
  name: "Home",
  components: {
    SkillBox,
    ToolBox,
  },
  setup() {
    const quote = {
      text: `Everybody has a testing environment.
      Some people are lucky enough to have a totally separate environment to run production in.`,
      source: "https://twitter.com/stahnma/status/634849376343429120",
      author: "@stahnma",
    };

    const store = useStore();
    const technologies = store.getters.technologies;
    const tools = store.getters.tools;

    return { technologies, tools, quote };
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
      font-size: 2em;
      top: 0.3em;
    }
    &:before {
      right: 0.2em;
      content: open-quote;
    }
    &:after {
      right: -0em;
      content: close-quote;
    }
  }
}
</style>
