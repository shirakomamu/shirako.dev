<script setup lang="ts">
import { useRoute } from "vue-router";
import EmailHider from "@/components/EmailHider.vue";
import Email from "@/components/icons/IconEmail.vue";
import { Route } from "@/immutables/router";

interface NavigationLink {
  to: { name: Route };
  label: string;
}

const route = useRoute();
const appName = import.meta.env.VITE_APP_NAME;

const links: NavigationLink[] = [
  {
    to: { name: Route.HOME },
    label: "Home",
  },
  {
    to: { name: Route.PROJECTS },
    label: "Projects",
  },
];

const isRouteMatched = (to: { name: Route }): boolean => {
  return route.matched.some(({ name }) => name === to.name);
};
</script>

<template>
  <div class="flex flex-row items-center px-8">
    <div class="flex-shrink-0 justify-start items-center">
      <router-link to="/" class="flex flex-row gap-4 items-center">
        <img
          :alt="`${appName} logo`"
          src="/icons/512-bl_rc-fc.png"
          width="32"
          height="32"
      /></router-link>
    </div>
    <div class="flex-grow" />
    <div class="flex flex-row gap-4 items-center">
      <router-link
        v-for="(link, index) of links"
        :to="link.to"
        :key="index"
        class="align-middle dark:text-gray-100 text-sm link-underline-animate transition opacity-50"
        :class="{ 'opacity-100': isRouteMatched(link.to) }"
        >{{ link.label }}</router-link
      >
      <div class="flex flex-row gap-3 items-center">
        <EmailHider
          class="transition opacity-50 hover:opacity-100 focus:opacity-100"
          ><Email width="24" height="24"
        /></EmailHider>

        <a
          href="https://github.com/shirakomamu"
          class="flex-shrink-0 transition opacity-50 hover:opacity-100 focus:opacity-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/vendor-icons/github-black.svg"
            class="dark:hidden"
            alt="GitHub"
            height="24"
            width="24"
          />
          <img
            src="/vendor-icons/github-white.svg"
            class="hidden dark:block"
            alt="GitHub"
            height="24"
            width="24"
          />
        </a>

        <a
          href="https://twitter.com/shirakomamu"
          class="flex-shrink-0 transition opacity-50 hover:opacity-100 focus:opacity-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/vendor-icons/twitter-blue.svg"
            class="dark:hidden"
            alt="Twitter"
            height="24"
            width="24"
          />
          <img
            src="/vendor-icons/twitter-white.svg"
            class="hidden dark:block"
            alt="Twitter"
            height="24"
            width="24"
          />
        </a>
      </div>
    </div>
  </div>
</template>
