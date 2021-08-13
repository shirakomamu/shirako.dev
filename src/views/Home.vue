<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
      <article class="space-y-4 max-w-prose">
        <h4 class="text-4xl dark:text-white">
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
          My main competencies are listed below, but I'm always learning more.
        </p>

        <Accordion
          :initial-visibility="readMoreAboutMeState"
          @toggle="setReadMoreAboutMeState"
        >
          <template #title>
            <div>
              <p class="text-blue-srk">Read more about me</p>
            </div>
          </template>
          <template #default>
            <div class="mt-2 space-y-4">
              <p>
                Although I have some experience with various languages such as C
                and C++ in school, I first started programming as a hobby with
                MATLAB (and occasionally Python) more than 10 years ago.
              </p>

              <p>
                Outside of programming, I enjoy listening to music (favorites
                are BGM from Touhou and Final Fantasy), cooking, and hiking when
                I have time. I also occasionally draw art digitally in
                Photoshop.
              </p>

              <p>
                I also have a soft spot for cats, so you'll see a few cat
                illustrations around this site, courtesy of
                <a
                  href="http://irasutoya.com"
                  target="_blank"
                  ref="noopener noreferrer"
                  class="ps-text-link"
                  >Irasutoya</a
                >.
              </p>
            </div>
          </template>
        </Accordion>
      </article>
      <div class="grid grid-cols-1 col-span-2 md:col-span-1 justify-center">
        <blockquote class="quote mt-8 md:mt-32">
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
        class="grid grid-cols-1 col-span-1 items-center justify-items-center"
      >
        <img
          alt="Cat using laptop"
          src="@/assets/images/irasutoya/animal_chara_computer_neko.png"
          class="
            h-72
            mx-auto
            rounded-full
            p-4
            bg-gray-200/50
            dark:bg-gray-600/50
          "
        />
      </div>

      <div
        class="
          grid
          col-span-auto
          xl:col-span-1
          grid-cols-2
          lg:grid-cols-4
          gap-4
        "
      >
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

    <h5 class="text-2xl dark:text-white">Productivity tools</h5>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/use/useStore";
import SkillBox from "@/components/SkillBox.vue";
import ToolBox from "@/components/ToolBox.vue";
import Accordion from "@/components/Accordion.vue";
import { MutationEnums } from "@/store/modules/general/enums";

export default defineComponent({
  name: "Home",
  components: {
    SkillBox,
    ToolBox,
    Accordion,
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

    const readMoreAboutMeState = store.getters["isBioRead"];
    const setReadMoreAboutMeState = (state: boolean) => {
      console.log(state);
      store.commit(MutationEnums.SET_BIO_AS_READ, state);
    };

    return {
      technologies,
      tools,
      quote,
      readMoreAboutMeState,
      setReadMoreAboutMeState,
    };
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
