<template>
  <div class="home space-y-8">
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
    <div class="grid grid-cols-2 grid-flow-row">
      <div class="grid col-span-2 md:col-span-1 justify-items-center">
        <img
          alt="Placeholder image"
          src="@/assets/images/icon-512t.png"
          class="w-auto h-auto"
        />
      </div>
      <article class="technologies space-y-4">
        <h5 class="text-2xl prose dark:text-white">Technologies I use</h5>
        <ul>
          <li
            v-for="(technology, index) of technologies"
            :key="index"
            class="grid grid-cols-2 grid-flow-row items-center"
          >
            <div class="flex flex-row">
              <span>{{ technology.name }}</span>
              <span
                class="ml-1 mr-1 flex-1 leader text-gray-200 dark:text-gray-600"
              />
            </div>
            <SkillBar
              :level="technology.skill"
              class="w-full h-4 col-span-2 md:col-span-1"
            />
          </li>
          <li>... and always learning more.</li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/use/useStore";
import SkillBar from "@/components/SkillBar.vue";

export default defineComponent({
  name: "Home",
  components: {
    SkillBar,
  },
  setup() {
    const introTexts: string[] = [
      `Welcome to my personal site.`,
      `I am a web developer with an engineering background.
      My education is in Aerospace Engineering (structural composites, if you're curious),
      but I self-taught modern web technologies as both a hobby and professionally.`,
      `I specialize in building intelligent web apps for business workflows.`,
    ];

    const store = useStore();
    const technologies = store.getters.technologies;

    return { introTexts, technologies };
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
</style>
