<script setup lang="ts">
import { useHeadSafe } from "@unhead/vue";
import { computed, onMounted } from "vue";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
import BgStars from "@/components/BgStars.vue";
import { APP_DESCRIPTION } from "@/env.js";
import { head } from "./main.js";

useHeadSafe(
  {
    htmlAttrs: { lang: "en" },
    meta: [{ name: "description", content: APP_DESCRIPTION }],
  },
  { head },
);

const setTheme = (isDark: boolean): void => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const queryList = computed(() =>
  window.matchMedia("(prefers-color-scheme: dark)"),
);

onMounted(() => {
  setTheme(true);
  queryList.value.addEventListener("change", (e) => setTheme(e.matches));
});
</script>

<template>
  <div class="flex flex-col min-h-screen h-full relative">
    <BgStars />

    <AppHeader
      class="sticky ps-bg-flat top-0 h-12 z-50 w-full border-b border-gray-300 dark:border-gray-600"
    />

    <main class="flex-1 flex flex-col view-container">
      <RouterView v-slot="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter
      class="ps-bg-flat border-t border-gray-300 dark:border-gray-600 h-12"
    />
  </div>
</template>

<style lang="less" scoped>
.fade-leave-from,
.fade-leave-active,
.fade-leave-to {
  display: none;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
