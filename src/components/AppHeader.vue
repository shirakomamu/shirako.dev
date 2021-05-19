<template>
  <div class="nav h-12 flex items-center">
    <div class="justify-start ml-8 flex flex-grow items-center">
      <router-link to="/" class="space-x-4 flex items-center">
        <img alt="Logo" src="@/assets/images/icon-128b.png" class="h-8 w-8" />
        <span class="font-semibold show-when-wide prose dark:text-white">{{
          appName
        }}</span></router-link
      >
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
  name: "AppHeader",
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
