<template>
  <div class="nav h-12 flex items-center">
    <div class="justify-start ml-8 flex flex-grow items-center">
      <span class="text-gray-500 text-sm"
        >© {{ new Date().getFullYear() }} 白子マム |
        <a
          ref="emailLink"
          :href="emailMailto"
          class="email-link text-blue-500 hover:underline"
          >{{ email }}</a
        ></span
      >
    </div>
    <div class="justify-end space-x-8 mr-8 flex items-center">
      <span class="text-gray-500 text-sm">build {{ hash }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "AppFooter",
  setup() {
    const hash = process.env.VUE_APP_GIT_HASH || "n/a";

    let emailMailto = ref("");
    let email = ref("");
    const emailLink = ref<HTMLElement | undefined>();

    onMounted(() => {
      setTimeout(() => {
        const emailLinkRef = emailLink.value;

        const name = "hello";
        const domain = "shirako";
        const tld = "dev";
        const emailAddress = name + "@" + domain + "." + tld;
        email.value = emailAddress;
        emailMailto.value = "mailto" + ":" + emailAddress;

        if (emailLinkRef) {
          emailLinkRef.style.opacity = "1";
        }
      }, 3000);
    });

    return { hash, email, emailMailto, emailLink };
  },
});
</script>

<style lang="less" scoped>
.email-link {
  opacity: 0;
  transition: opacity 1s ease;
}
</style>
