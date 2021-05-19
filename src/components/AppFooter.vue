<template>
  <div class="nav h-12 flex items-center">
    <div class="justify-start ml-8 flex flex-grow items-center">
      <span class="text-gray-500 text-sm"
        >© {{ new Date().getFullYear() }} 白子マム</span
      >
    </div>
    <div class="justify-end space-x-8 mr-8 flex items-center">
      <span class="text-gray-500 text-sm">build {{ hash }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppFooter",
  setup() {
    const hash = process.env.VUE_APP_GIT_HASH || "n/a";
    return { hash };
  },
});
</script>

<style lang="less" scoped></style>
