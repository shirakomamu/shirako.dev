<script setup lang="ts">
import { computed, ref } from "vue";

const isEmailShown = ref(false);

const name = "hello";
const domain = "shirako";
const tld = "dev";
const emailAddress = name + "@" + domain + "." + tld;
const emailLink = "mailto" + ":" + emailAddress;

const emailMailto = computed(() => {
  return isEmailShown.value ? emailLink : "";
});

const showEmail = (): void => void (isEmailShown.value = true);
const hideEmail = (): void => void (isEmailShown.value = false);
</script>

<template>
  <a
    :href="emailMailto"
    @mouseover="showEmail"
    @focus="showEmail"
    @mouseout="hideEmail"
    @blur="hideEmail"
  >
    <slot />
  </a>
</template>
