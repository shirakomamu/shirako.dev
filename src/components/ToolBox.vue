<script setup lang="ts">
const props = defineProps<{
  name: string;
  logoSrc?: string;
  logoSrcWhenDark?: string;
  logoAlt?: string;
}>();
</script>

<template>
  <div
    class="p-4 flex flex-col items-center rounded-lg transition bg-gray-200/50 dark:bg-gray-600/50"
  >
    <div class="whitespace-normal h-full w-full flex flex-col gap-4">
      <div class="flex gap-4 items-center">
        <img
          v-if="props.logoSrc"
          :src="props.logoSrc"
          :alt="props.logoAlt"
          height="32"
          width="32"
          :class="{
            'dark:hidden': props.logoSrcWhenDark,
          }"
        />
        <img
          v-if="props.logoSrcWhenDark"
          :src="props.logoSrcWhenDark"
          :alt="props.logoAlt"
          class="hidden dark:block"
          height="32"
          width="32"
        />
        <div>
          <p class="font-semibold overflow-hidden overflow-ellipsis">
            {{ props.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
