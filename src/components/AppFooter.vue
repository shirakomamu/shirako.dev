<template>
  <div class="nav h-12 flex items-center">
    <div class="justify-start ml-8 flex flex-grow items-center">
      <span class="text-gray-500 text-sm"
        >© {{ new Date().getFullYear() }} 白子マム |
        <button
          v-if="!isEmailShown"
          @mouseover="showEmail"
          @focus="showEmail"
          type="button"
          class="text-blue-500 hover:underline focus:underline"
        >
          say hello
        </button>
        <a
          v-else
          @mouseout="hideEmail"
          @blur="hideEmail"
          ref="emailLink"
          :href="emailMailto"
          class="text-blue-500 hover:underline focus:underline"
          >{{ email }}</a
        >
        |
        <router-link
          to="/privacy"
          class="text-blue-500 hover:underline focus:underline"
          >privacy policy</router-link
        ></span
      >
    </div>
    <div class="justify-end space-x-8 mr-8 flex items-center">
      <span class="text-gray-500 text-sm">build {{ hash }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AppFooter",
  setup() {
    const hash = process.env.VUE_APP_GIT_HASH || "n/a";

    let emailMailto = ref("");
    let email = ref("");
    const emailLink = ref<HTMLElement | undefined>();

    const isEmailShown = ref(false);

    const showEmail = () => {
      isEmailShown.value = true;

      const name = "hello";
      const domain = "shirako";
      const tld = "dev";
      const emailAddress = name + "@" + domain + "." + tld;
      email.value = emailAddress;
      emailMailto.value = "mailto" + ":" + emailAddress;
    };

    const hideEmail = () => (isEmailShown.value = false);

    return {
      hash,
      email,
      isEmailShown,
      emailMailto,
      emailLink,
      showEmail,
      hideEmail,
    };
  },
});
</script>

<style lang="less" scoped></style>
