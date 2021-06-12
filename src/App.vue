<template>
  <metainfo>
    <template #title="{ content }">{{ `${content}` }}</template>
    <template #description="{ content }">{{ `${content}` }}</template>
  </metainfo>
  <div
    class="
      bg-flat
      layout-container
      h-full
      text-black
      dark:text-gray-200
      flex flex-col
    "
  >
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

    <div class="pb-8 flex-grow">
      <transition-group name="fade" tag="div" mode="out-in">
        <Hero v-if="$route.path === '/'" key="hero" />
      </transition-group>
      <router-view v-slot="{ Component }" key="router-view"
        ><transition name="fade" mode="out-in">
          <component
            :is="Component"
            class="h-full mx-auto mt-8 px-8 max-w-screen-2xl"
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
      "
    />

    <!-- <notifications class="notification space-y-8">
      <template v-slot:body="{ item, close }">
        <div class="bg-gray-200 dark:bg-gray-600 mr-8 mb-8 flex flex-row p-2">
          <div class="flex-grow dark:text-white">
            <p class="text-sm font-semibold">
              {{ item.title }}
            </p>
            <p class="text-xs">{{ item.text }}</p>
            <button
              type="button"
              class="text-xs mt-2 hover:underline focus:underline"
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
    </notifications> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
// import { notify } from "@kyvg/vue3-notification";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import Hero from "@/components/Hero.vue";
import IconClose from "@/components/icons/IconClose.vue";

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    Hero,
    IconClose,
  },
  setup() {
    useMeta({
      title: "Home | " + process.env.VUE_APP_NAME,
      meta: [
        {
          vmid: "description",
          name: "description",
          content: "Portfolio site for Shirako, the web developer.",
        },
      ],
      htmlAttrs: { lang: "en" },
    });

    const refreshing = false;
    const registration: null | ServiceWorkerRegistration =
      null as null | ServiceWorkerRegistration;
    const updateExists = false;

    return { refreshing, registration, updateExists };
  },
  // watch: {
  //   updateExists(newValue) {
  //     if (newValue) {
  //       notify({
  //         id: -1,
  //         title: "An update is available",
  //         text: "Please refresh the page",
  //         duration: -1,
  //       });
  //     }
  //   },
  // },
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

// .notification {
//   position: fixed;
//   display: block;
//   top: unset !important;
//   width: 350px !important;
//   bottom: 0px !important;
//   right: 0px !important;
//   transition: all 300ms ease 0s !important;
// }

// .bg-image {
//   background-image: url("~@/assets/images/bg-light.jpg");
//   @media (prefers-color-scheme: dark) {
//     background-image: url("~@/assets/images/bg-dark.jpg");
//   }

//   background-repeat: no-repeat;
//   background-position: center;
//   background-attachment: fixed;
// }

.bg-flat {
  background-color: #fff;
  @media (prefers-color-scheme: dark) {
    background-color: #191919;
  }
}
</style>
