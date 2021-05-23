<template>
  <div class="nav h-12 flex items-center">
    <div class="justify-start ml-8 flex flex-grow items-center">
      <span class="text-gray-500 text-sm"
        >© {{ new Date().getFullYear() }} 白子マム |
        <a
          @mouseover="showEmail"
          @focus="showEmail"
          @mouseout="hideEmail"
          @blur="hideEmail"
          :href="emailMailto"
          class="text-blue-500 hover:underline focus:underline"
        >
          {{ emailText }}
        </a>
        |
        <router-link
          to="/privacy"
          class="text-blue-500 hover:underline focus:underline"
          >privacy</router-link
        ></span
      >
    </div>
    <div class="justify-end space-x-8 mr-8 flex items-center">
      <span class="text-gray-500 text-sm">build {{ hash }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppFooter",
  setup() {
    const hash = process.env.VUE_APP_GIT_HASH || "n/a";

    const isEmailShown = ref(false);

    const name = "hello";
    const domain = "shirako";
    const tld = "dev";
    const emailAddress = name + "@" + domain + "." + tld;
    const emailLink = "mailto" + ":" + emailAddress;

    const emailText = computed(() => {
      return isEmailShown.value ? emailAddress : "📧 say hello";
    });
    const emailMailto = computed(() => {
      return isEmailShown.value ? emailLink : "";
    });

    const showEmail = () => (isEmailShown.value = true);
    const hideEmail = () => (isEmailShown.value = false);

    return {
      hash,
      isEmailShown,
      showEmail,
      hideEmail,
      emailMailto,
      emailText,
    };
  },
});
</script>

<style lang="less" scoped></style>
