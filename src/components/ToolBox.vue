<template>
  <div
    class="
      box
      p-4
      flex flex-col
      items-center
      rounded-lg
      transition
      bg-gray-200
      dark:bg-gray-600
      bg-opacity-50
      hover:bg-opacity-60
    "
  >
    <div class="whitespace-normal h-full w-full flex flex-col gap-4">
      <div class="flex gap-4 items-center">
        <div v-if="logoSrc">
          <img :src="logoSrc" :alt="logoAlt" height="32" width="32" />
        </div>
        <div>
          <p class="font-semibold overflow-hidden overflow-ellipsis">
            {{ name }}
          </p>
        </div>
      </div>

      <p
        v-if="description"
        class="
          text-sm text-gray-600
          dark:text-gray-400
          overflow-hidden overflow-ellipsis
        "
      >
        {{ description }}
      </p>

      <div v-if="disclaimer" class="flex flex-grow items-end">
        <p
          class="
            text-xs text-gray-600
            dark:text-gray-400
            overflow-hidden overflow-ellipsis
            opacity-50
          "
        >
          {{ disclaimer }}
        </p>
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
      default: () => "",
    },
    description: {
      type: String,
      default: () => "",
    },
    disclaimer: {
      type: String,
      default: () => "",
    },
    logoSrc: {
      type: String,
      default: () => "",
    },
    logoAlt: {
      type: String,
      default: () => "",
    },
  },
});
</script>

<style lang="less" scoped></style>
