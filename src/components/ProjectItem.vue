<script setup lang="ts">
import Accordion from "@/components/Accordion.vue";

defineProps({
  iconUrl: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: "",
  },
  initiallyExpanded: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <article class="grid grid-cols-1 gap-4">
    <Accordion :initial-visibility="initiallyExpanded">
      <template #title>
        <div class="text-2xl font-semibold">
          <img
            v-if="iconUrl"
            :src="iconUrl"
            width="32"
            height="32"
            :alt="`${title} logo`"
            class="icon-inline mr-2 rounded-lg"
          />{{ title }}
          <p v-if="date" class="opacity-50 italic text-lg font-medium">
            {{ date }}
          </p>
        </div>
      </template>
      <template #default>
        <slot />
      </template>
    </Accordion>
  </article>
</template>
