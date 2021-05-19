<template>
  <div class="nav h-12 flex items-center">
    <div class="justify-start ml-8 flex flex-grow items-center">
      <span class="text-gray-500"></span>
    </div>
    <div class="justify-end space-x-8 mr-8 flex items-center">
      <router-link
        v-for="(link, index) of links"
        :to="link.to"
        :key="index"
        class="prose-sm align-middle hover:underline prose dark:text-gray-100"
        :class="{ 'font-bold': isRouteMatched(link.to) }"
        >{{ link.label }}</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface NavigationLink {
  to: string;
  label: string;
}

export default defineComponent({
  name: "Nav",
  setup() {
    const appName: string = process.env.VUE_APP_NAME;
    const links: NavigationLink[] = [
      {
        to: "/",
        label: "Home",
      },
      {
        to: "/projects",
        label: "Projects",
      },
      {
        to: "/about",
        label: "About me",
      },
    ];
    return { links, appName };
  },
  methods: {
    isRouteMatched(to: string) {
      return this.$route.matched.some(({ path }) => path === to);
    },
  },
});
</script>

<style lang="less" scoped></style>
