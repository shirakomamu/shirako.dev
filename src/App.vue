<template>
  <div
    class="layout-container h-full bg-white dark:bg-gray-800 dark:text-gray-200"
  >
    <Nav />
    <transition name="fade">
      <div>
        <Hero v-if="$route.path === '/'" class="mb-8" />
        <div v-else class="mb-8" />
        <router-view class="mx-auto container px-8" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/views/Nav.vue";
import Hero from "@/components/Hero.vue";

export default defineComponent({
  components: {
    Nav,
    Hero,
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
