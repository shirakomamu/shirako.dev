<template>
  <div
    class="layout-container h-full bg-white dark:bg-gray-800 dark:text-gray-200"
  >
    <Nav class="border-b border-gray-300 dark:border-gray-600" />

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
              @click="refresh"
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
import Nav from "@/views/Nav.vue";
import Hero from "@/components/Hero.vue";
import update from "./mixins/update";
import IconClose from "./components/icons/IconClose.vue";

export default defineComponent({
  components: {
    Nav,
    Hero,
    IconClose,
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
  mixins: [update],
  mounted() {
    notify({
      id: -1,
      title: "An update is available",
      text: "Please refresh the page",
      duration: -1,
    });
  },
  methods: {
    refresh() {
      const href = location.href;
      window.location.href = href;
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
