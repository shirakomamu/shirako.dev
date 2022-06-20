<script setup lang="ts">
import { computed, onMounted } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import BgStars from "@/components/BgStars.vue";
import { useMeta } from "vue-meta";

useMeta({
  htmlAttrs: { lang: "en" },
  description: import.meta.env.VITE_APP_DESCRIPTION,
});

const setTheme = (isDark: boolean): void => {
  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const queryList = computed(() =>
  window.matchMedia("(prefers-color-scheme: dark)")
);

onMounted(() => {
  setTheme(true);
  queryList.value.addEventListener("change", (e) => setTheme(e.matches));
});
</script>

<template>
  <metainfo />

  <div
    class="layout-container h-full text-black dark:text-gray-200 flex flex-col"
  >
    <BgStars />
    <AppHeader
      class="sticky ps-bg-flat top-0 h-12 z-50 w-full border-b border-gray-300 dark:border-gray-600"
    />

    <div class="py-8 flex flex-col flex-grow justify-center view-container">
      <RouterView v-slot="{ Component }">
        <Transition name="fade">
          <component
            :is="Component"
            class="flex-1 w-full mx-auto px-8 max-w-screen-2xl"
          />
        </Transition>
      </RouterView>
    </div>

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
