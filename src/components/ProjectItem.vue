<template>
  <article class="grid grid-cols-1 gap-4">
    <div>
      <component
        :is="url ? 'a' : 'div'"
        class="text-2xl font-semibold"
        :class="{
          'hover:font-bold focus:font-bold': url,
        }"
        :href="url || undefined"
        :target="url ? '_blank' : undefined"
        :rel="url ? 'noopener noreferrer' : undefined"
      >
        <img
          v-if="iconUrl"
          :src="iconUrl"
          width="32"
          height="32"
          :alt="`${title} logo`"
          class="icon-inline mr-2 rounded-lg"
        />{{ title }}
        <OpenInNew v-if="url" class="icon-inline opacity-50 text-lg" />
      </component>
    </div>
    <p v-if="date" class="opacity-50 italic text-xl">{{ date }}</p>
    <slot />
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OpenInNew from "@/components/icons/OpenInNew.vue";

export default defineComponent({
  name: "ProjectItem",
  components: { OpenInNew },
  props: {
    iconUrl: {
      type: String,
      default: "",
    },
    url: {
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
  },
});
</script>

<style lang="less" scoped></style>
