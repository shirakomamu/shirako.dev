<template>
  <metainfo>
    <template #title="{ content }">{{ `${content}` }}</template>
    <template #description="{ content }">{{ `${content}` }}</template>
  </metainfo>

  <div
    class="layout-container h-full text-black dark:text-gray-200 flex flex-col"
  >
    <BgStars />
    <AppHeader
      class="
        sticky
        ps-bg-flat
        top-0
        h-12
        z-50
        w-full
        border-b border-gray-300
        dark:border-gray-600
      "
    />

    <div
      class="pb-8 flex flex-col flex-grow justify-center view-container"
      :class="{ 'pt-8': $route.path !== '/' }"
    >
      <transition-group
        v-if="$route.path === '/'"
        name="fade"
        tag="div"
        mode="out-in"
      >
        <Hero key="hero" class="mb-8" />
      </transition-group>
      <router-view v-slot="{ Component }" key="router-view"
        ><transition name="fade" mode="out-in">
          <component
            :is="Component"
            class="flex-1 w-full mx-auto px-8 max-w-screen-2xl"
          />
        </transition>
      </router-view>
    </div>

    <AppFooter
      class="ps-bg-flat border-t border-gray-300 dark:border-gray-600 h-12"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { useMeta } from "vue-meta";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Hero from "@/components/Hero.vue";
import Close from "@/components/icons/Close.vue";
import { useRoute } from "vue-router";
import BgStars from "./components/BgStars.vue";

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    Hero,
    Close,
    BgStars,
  },
  setup() {
    const route = useRoute();
    const meta = computed(() => ({
      title: "Home | " + process.env.VUE_APP_NAME,
      meta: [
        {
          vmid: "description",
          name: "description",
          content: "Portfolio site for Shirako, the web developer.",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://shirako.dev" + route.path,
        },
      ],
      htmlAttrs: { lang: "en" },
    }));
    useMeta(meta);

    const refreshing = ref<boolean>(false);
    const registration = ref<null | ServiceWorkerRegistration>(null);
    const updateExists = ref<boolean>(false);

    // this is called when sw receives SKIP_WAITING event
    navigator.serviceWorker?.addEventListener("controllerchange", () => {
      // Prevent multiple refreshes
      if (refreshing.value) return;
      refreshing.value = true;
      // Here the actual reload of the page occurs
      window.location.reload();
    });

    const refreshApp = () => {
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!registration.value || !registration.value.waiting) return;

      // send message to SW to skip the waiting and activate the new SW
      registration.value.waiting.postMessage({ type: "SKIP_WAITING" });
    };

    // Store the SW registration so we can send it a message
    // We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
    // To alert the user there is an update they need to refresh for
    const onUpdateAvailable = async (event: {
      detail: ServiceWorkerRegistration;
    }) => {
      registration.value = event.detail;
      updateExists.value = true;

      // automatic refresh when update is available
      refreshApp();
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.addEventListener("swUpdated", onUpdateAvailable, {
      once: true,
    });

    const setTheme = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    const queryList = computed(() =>
      window.matchMedia("(prefers-color-scheme: dark)")
    );
    const supportsDarkMode = computed(
      () => window.matchMedia("(prefers-color-scheme)").matches
    );

    onMounted(() => {
      setTheme(true); // supportsDarkMode.value to initialize to theme
      queryList.value.addEventListener("change", (e) => setTheme(e.matches));
    });

    return {
      refreshing,
      registration,
      updateExists,
      onUpdateAvailable,
      refreshApp,
      queryList,
      supportsDarkMode,
    };
  },
});
</script>

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
