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
    <div class="block whitespace-normal w-full space-y-4">
      <p class="font-semibold overflow-hidden overflow-ellipsis">
        {{ name }}
      </p>
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
  },
});
</script>

<style lang="less" scoped></style>
