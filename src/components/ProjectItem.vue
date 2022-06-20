<script setup lang="ts">
import Accordion from "@/components/Accordion.vue";

const props = defineProps<{
  iconUrl?: string;
  title: string;
  date?: string;
  initiallyExpanded: boolean;
}>();
</script>

<template>
  <article class="grid grid-cols-1 gap-4">
    <Accordion :show-arrow="true" :initial-visibility="props.initiallyExpanded">
      <template #title>
        <div class="text-2xl font-semibold">
          <img
            v-if="props.iconUrl"
            :src="props.iconUrl"
            width="32"
            height="32"
            :alt="`${props.title} logo`"
            class="icon-inline mr-2 rounded-lg"
          />{{ props.title }}
          <p v-if="props.date" class="opacity-50 italic text-lg font-medium">
            {{ props.date }}
          </p>
        </div>
      </template>
      <template #default>
        <slot />
      </template>
    </Accordion>
  </article>
</template>
