<template>
  <teleport to=".view-container">
    <button
      type="button"
      alt="Back to top"
      class="fixed bottom-16 right-8 p-4 rounded-full ps-bg-panel transition opacity-50 hover:opacity-100 focus:(opacity-100 outline-none) z-1"
      @click="scrollToTop"
    >
      <ExpandLess />
    </button>
  </teleport>
</template>

<script setup lang="ts">
import ExpandLess from "@/components/icons/ExpandLess.vue";

const scrollToTop = () => {
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
