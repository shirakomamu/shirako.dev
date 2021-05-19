<template>
  <div
    class="layout-container h-full bg-white dark:bg-gray-800 dark:text-gray-200"
  >
    <Nav
      class="
        sticky
        top-0
        z-50
        border-b border-gray-300
        dark:border-gray-600
        bg-white
        dark:bg-gray-800
      "
    />

    <div class="pb-8">
      <transition-group name="fade" tag="div">
        <Hero v-if="$route.path === '/'" key="hero" />
        <div class="mb-8" key="spacer" />
      </transition-group>
      <router-view v-slot="{ Component }" key="router-view"
        ><transition name="fade">
          <component :is="Component" class="mx-auto container px-8" />
        </transition>
      </router-view>
    </div>

    <notifications class="notification space-y-8">
      <template v-slot:body="{ item, close }">
        <div class="bg-gray-200 dark:bg-gray-600 mr-8 mb-8 flex flex-row p-2">
          <div class="flex-grow prose dark:text-white">
            <p class="text-sm font-semibold">
              {{ item.title }}
            </p>
            <p class="text-xs">{{ item.text }}</p>
            <button
              type="button"
              class="text-xs mt-2 hover:underline"
              @click="refreshApp"
            >
              Refresh now
            </button>
          </div>
          <div>
            <button type="button" @click="close"><IconClose /></button>
          </div>
        </div>
      </template>
    </notifications>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { notify } from "@kyvg/vue3-notification";
import Nav from "@/components/Nav.vue";
import Hero from "@/components/Hero.vue";
import IconClose from "./components/icons/IconClose.vue";

export default defineComponent({
  components: {
    Nav,
    Hero,
    IconClose,
  },
  data() {
    return {
      refreshing: false,
      registration: null as null | ServiceWorkerRegistration,
      updateExists: false,
    };
  },
  watch: {
    updateExists(newValue) {
      if (newValue) {
        notify({
          id: -1,
          title: "An update is available",
          text: "Please refresh the page",
          duration: -1,
        });
      }
    },
  },
  created() {
    // Listen for our custom event from the SW registration
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.addEventListener("swUpdated", this.updateAvailable, {
      once: true,
    });

    // Prevent multiple refreshes
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) return;
      this.refreshing = true;
      // Here the actual reload of the page occurs
      window.location.reload();
    });
  },
  methods: {
    // Store the SW registration so we can send it a message
    // We use `updateExists` to control whatever alert, toast, dialog, etc we want to use
    // To alert the user there is an update they need to refresh for
    updateAvailable(event: { detail: ServiceWorkerRegistration }) {
      this.registration = event.detail;
      this.updateExists = true;
    },

    // Called when the user accepts the update
    refreshApp() {
      this.updateExists = false;
      // Make sure we only send a 'skip waiting' message if the SW is waiting
      if (!this.registration || !this.registration.waiting) return;

      console.log("Skip waiting");
      // send message to SW to skip the waiting and activate the new SW
      this.registration.waiting.postMessage({ type: "SKIP_WAITING" });
    },
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

.notification {
  position: fixed;
  display: block;
  top: unset !important;
  width: 350px !important;
  bottom: 0px !important;
  right: 0px !important;
  transition: all 300ms ease 0s !important;
}
</style>
