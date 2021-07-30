<template>
  <div class="nav flex flex-row items-center px-8">
    <div class="justify-start items-center">
      <router-link to="/" class="flex flex-row gap-4 items-center">
        <img
          alt="shirako.dev logo"
          src="/icons/512-bl_rc-fc.png"
          width="32"
          height="32"
        />
        <span class="font-semibold show-when-wide dark:text-white">{{
          appName
        }}</span></router-link
      >
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
            dark:hidden
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
            alt="GitHub"
            height="24"
            width="24"
          />
        </a>
        <a
          href="https://github.com/shirakomamu"
          class="
            hidden
            dark:block
            transition
            opacity-50
            hover:opacity-100
            focus:opacity-100
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/vendor-icons/github-white.svg"
            alt="GitHub"
            height="24"
            width="24"
          />
        </a>

        <a
          href="https://twitter.com/shirakomamu"
          class="
            dark:hidden
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
            alt="Twitter"
            height="24"
            width="24"
          />
        </a>
        <a
          href="https://twitter.com/shirakomamu"
          class="
            hidden
            dark:block
            transition
            opacity-50
            hover:opacity-100
            focus:opacity-100
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/vendor-icons/twitter-white.svg"
            alt="Twitter"
            height="24"
            width="24"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmailHider from "@/components/EmailHider.vue";
import Email from "@/components/icons/Email.vue";
import { useRoute } from "vue-router";

interface NavigationLink {
  to: string;
  label: string;
}

export default defineComponent({
  name: "AppHeader",
  components: {
    EmailHider,
    Email,
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

    return { links, appName, isRouteMatched };
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
