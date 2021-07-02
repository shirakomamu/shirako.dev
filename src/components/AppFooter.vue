<template>
  <div class="nav flex items-center px-8">
    <div class="justify-start flex flex-grow items-center">
      <div class="text-gray-500 text-sm">
        <span>© 2021 白狐マム</span> |
        <span><EmailHider :text="emailText" :showEmailAsText="false" /></span> |
        <router-link
          to="/privacy"
          class="text-blue-srk hover:underline focus:underline"
          >privacy</router-link
        >
      </div>
    </div>
    <div class="justify-end space-x-8 flex items-center">
      <span class="text-gray-500 text-sm">build {{ hash }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmailHider from "@/components/EmailHider.vue";

export default defineComponent({
  name: "AppFooter",
  components: {
    EmailHider,
  },
  setup() {
    const hash = process.env.VUE_APP_GIT_HASH || "n/a";
    const emailText = "✉️ say hello";

    return {
      hash,
      emailText,
    };
  },
});
</script>

<style lang="less" scoped></style>
