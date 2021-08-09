<template>
  <div class="flex flex-row items-center px-8">
    <div class="flex-shrink-0 justify-start items-center">
      <router-link to="/" class="flex flex-row gap-4 items-center">
        <img
          alt="shirako.dev logo"
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
        class="
          align-middle
          dark:text-gray-100
          text-sm
          link-underline-animate
          transition
          opacity-50
        "
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
          class="
            flex-shrink-0
            transition
            opacity-50
            hover:opacity-100
            focus:opacity-100
          "
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
          class="
            flex-shrink-0
            transition
            opacity-50
            hover:opacity-100
            focus:opacity-100
          "
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
        <button
          type="button"
          alt="Toggle dark mode"
          class="
            flex-shrink-0
            p-0
            dark:hidden
            transition
            opacity-50
            hover:opacity-100
            focus:opacity-100
          "
          @click="setTheme(true)"
        >
          <DarkMode class="inline-block" />
        </button>
        <button
          type="button"
          alt="Toggle light mode"
          class="
            p-0
            hidden
            dark:block
            transition
            opacity-50
            hover:opacity-100
            focus:opacity-100
          "
          @click="setTheme(false)"
        >
          <LightMode class="inline-block" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmailHider from "@/components/EmailHider.vue";
import Email from "@/components/icons/Email.vue";
import { useRoute } from "vue-router";
import DarkMode from "./icons/DarkMode.vue";
import LightMode from "./icons/LightMode.vue";

interface NavigationLink {
  to: string;
  label: string;
}

export default defineComponent({
  name: "AppHeader",
  components: {
    EmailHider,
    Email,
    DarkMode,
    LightMode,
  },
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
    ];

    const route = useRoute();

    const isRouteMatched = (to: string) => {
      return route.matched.some(({ path }) => path === to);
    };

    const setTheme = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    return { links, appName, isRouteMatched, setTheme };
  },
});
</script>

<style lang="less" scoped></style>
