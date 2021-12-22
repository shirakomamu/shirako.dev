<template>
  <div
    class="p-4 flex flex-col items-center rounded-lg transition bg-gray-200/50 dark:bg-gray-600/50"
  >
    <div class="whitespace-normal h-full w-full flex flex-col gap-4">
      <div class="flex gap-4 items-center">
        <img
          v-if="logoSrc"
          :src="logoSrc"
          :alt="logoAlt"
          height="32"
          width="32"
          :class="{
            'dark:hidden': logoSrcWhenDark,
          }"
        />
        <img
          v-if="logoSrcWhenDark"
          :src="logoSrcWhenDark"
          :alt="logoAlt"
          class="hidden dark:block"
          height="32"
          width="32"
        />
        <div>
          <p class="font-semibold overflow-hidden overflow-ellipsis">
            {{ name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToolBox",
  props: {
    name: {
      type: String,
      default: "",
    },
    logoSrc: {
      type: String,
      default: "",
    },
    logoSrcWhenDark: {
      type: String,
      default: "",
    },
    logoAlt: {
      type: String,
      default: "",
    },
  },
});
</script>

<style lang="less" scoped></style>
