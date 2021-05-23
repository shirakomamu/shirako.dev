<template>
  <div class="about space-y-8">
    <article class="space-y-4">
      <h4 class="text-4xl dark:text-white">About me</h4>
      <p>This is an about page.</p>
    </article>

    <article class="space-y-4">
      <h6 class="text-2xl dark:text-white">Find me at</h6>
      <p>Email: <EmailHider :text="emailText" /></p>
      <p>
        GitHub:
        <a
          href="https://github.com/shirakomamu"
          class="hover:underline focus:underline text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/shirakomamu
        </a>
      </p>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
import EmailHider from "@/components/EmailHider.vue";

export default defineComponent({
  name: "About",
  components: {
    EmailHider,
  },
  setup() {
    useMeta({
      title: "About me | " + process.env.VUE_APP_NAME,
    });

    const emailText = "view email address";

    return {
      emailText,
    };
  },
});
</script>
