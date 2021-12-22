<template>
  <a
    @mouseover="showEmail"
    @focus="showEmail"
    @mouseout="hideEmail"
    @blur="hideEmail"
    :href="emailMailto"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from "vue";

defineProps({
  text: {
    type: String,
    default: "say hello",
  },
  showEmailAsText: {
    type: Boolean,
    default: true,
  },
});

const isEmailShown = ref(false);

const name = "hello";
const domain = "shirako";
const tld = "dev";
const emailAddress = name + "@" + domain + "." + tld;
const emailLink = "mailto" + ":" + emailAddress;

const emailMailto = computed(() => {
  return isEmailShown.value ? emailLink : "";
});

const showEmail = () => (isEmailShown.value = true);
const hideEmail = () => (isEmailShown.value = false);
</script>
