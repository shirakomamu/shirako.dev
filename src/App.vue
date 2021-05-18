<template>
  <div
    class="layout-container h-full bg-white dark:bg-gray-800 dark:text-gray-200"
  >
    <Nav class="border-b border-gray-300 dark:border-gray-600" />
    <transition name="fade">
      <div class="pb-8">
        <Hero v-if="$route.path === '/'" class="mb-8" />
        <div v-else class="mb-8" />
        <router-view class="mx-auto container px-8" />
      </div>
    </transition>
    <notifications position="bottom right">
      <template v-slot:body="{ item, close }">
        <div class="bg-gray-200 dark:bg-gray-600 m-8 flex flex-row p-2">
          <div class="flex-grow prose dark:text-white">
            <p class="text-sm">
              {{ item.title }}
            </p>
            <p class="text-xs">{{ item.text }}</p>
            <button type="button" class="text-xs mt-2" @click="refresh">
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
          duration: 10000,
        });
      }
    },
  },
  mixins: [update],
  methods: {
    refresh() {
      window.location.reload();
    },
  },
});
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave.from {
  opacity: 1;
}
</style>
