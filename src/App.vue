<template>
  <div
    class="
      layout-container
      mx-auto
      h-full
      bg-white
      dark:bg-gray-800
      dark:text-gray-200
    "
  >
    <Nav />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/views/Nav.vue";

export default defineComponent({
  components: {
    Nav,
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
