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
        bg-flat
        top-0
        h-12
        z-50
        w-full
        border-b border-gray-300
        dark:border-gray-600
      "
    />

    <div
      class="pb-8 flex flex-col flex-grow justify-center"
      :class="{ 'pt-8': $route.path !== '/' }"
    >
      <transition-group name="fade" tag="div" mode="out-in">
        <Hero v-if="$route.path === '/'" key="hero" class="mb-8" />
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
      class="
        bg-flat
        border-t border-gray-300
        dark:border-gray-600
        bg-white
        dark:bg-gray-800
        h-12
      "
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useMeta } from "vue-meta";
// import { notify } from "@kyvg/vue3-notification";
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
        {
          rel: "icon",
          type: "image/png",
          href: "/icons/32-bl_rc-fc.png",
        },
      ],
      htmlAttrs: { lang: "en" },
    }));
    useMeta(meta);

    // Prevent multiple refreshes
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (refreshing.value) return;
      refreshing.value = true;
      // Here the actual reload of the page occurs
      window.location.reload();
    });

    const refreshing = ref<boolean>(false);
    const registration = ref<null | ServiceWorkerRegistration>(null);
    const updateExists = ref<boolean>(false);

    // Store the SW registration so we can send it a message
    // We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
    // To alert the user there is an update they need to refresh for

    const updateAvailable = (event: { detail: ServiceWorkerRegistration }) => {
      registration.value = event.detail;
      updateExists.value = true;
    };

    // Listen for our custom event from the SW registration
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.addEventListener("swUpdated", updateAvailable, {
      once: true,
    });

    // Called when the user accepts the update
    const refreshApp = () => {
      updateExists.value = false;
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!registration.value || !registration.value.waiting) return;

      // send message to SW to skip the waiting and activate the new SW
      registration.value.waiting.postMessage({ type: "SKIP_WAITING" });
    };

    return {
      refreshing,
      registration,
      updateExists,
      updateAvailable,
      refreshApp,
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
