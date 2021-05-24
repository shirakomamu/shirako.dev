<template>
  <div class="nav flex items-center">
    <div class="justify-start ml-8 mr-4 items-center flex-grow">
      <router-link to="/" class="space-x-4 flex items-center">
        <img
          alt="shirako.dev logo"
          src="@/assets/images/icon-128b.png"
          width="32"
          height="32"
        />
        <span class="font-semibold show-when-wide dark:text-white">{{
          appName
        }}</span></router-link
      >
    </div>
    <div class="flex-shrink space-x-8 ml-4 mr-8 flex items-center">
      <router-link
        v-for="(link, index) of links"
        :to="link.to"
        :key="index"
        class="
          align-middle
          hover:underline
          focus:underline
          dark:text-gray-100
          text-sm
        "
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
        label: "About",
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
