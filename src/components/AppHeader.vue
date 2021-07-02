<template>
  <div class="nav flex items-center px-8">
    <div class="justify-start items-center">
      <router-link to="/" class="space-x-4 flex items-center">
        <img
          alt="shirako.dev logo"
          src="images/icons/icon-128b.png"
          width="32"
          height="32"
        />
        <span class="font-semibold show-when-wide dark:text-white">{{
          appName
        }}</span></router-link
      >
    </div>
    <div class="flex-grow" />
    <div class="space-x-8 flex items-center">
      <router-link
        v-for="(link, index) of links"
        :to="link.to"
        :key="index"
        class="align-middle dark:text-gray-100 text-sm link-underline-animate"
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

<style lang="less" scoped>
.link-underline-animate {
  position: relative;
  text-decoration: none;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: 0;
    height: 1px;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    background: rgba(0, 0, 0, var(--tw-text-opacity));
    @media (prefers-color-scheme: dark) {
      background: rgba(243, 244, 246, var(--tw-text-opacity));
    }
  }
  &:hover:after,
  &:focus:after {
    width: 100%;
    left: 0;
  }
}
</style>
