<template>
  <div class="privacy-policy space-y-8 max-w-prose">
    <h5 class="text-4xl dark:text-white">Privacy policy</h5>
    <p>
      This site does not collect your data for analytics nor store any cookies,
      functional or otherwise.
    </p>
    <p>
      Some files may be stored in your browser's cache to allow this site to
      function even when you do not have internet connectivity.
    </p>
    <p>
      Some functions provided by this site may ask you for necessary information
      to facilitate communication, such as your name or email address. By using
      such facilities, you agree that you voluntarily provide this information.
      We will take reasonable precautions to safeguard your personal
      information, and we will never transfer or disclose it to a third-party
      without your explicit consent.
    </p>
    <p>
      This site's hosting provider, Netlify, may log data necessary for the
      functioning of this site. Such data may include your browser metadata or
      IP address. Please see their privacy policy at
      <a
        href="https://www.netlify.com/privacy/"
        class="hover:underline focus:underline text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
        >https://www.netlify.com/privacy/</a
      >
      for more information.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "PrivacyPolicy",
  setup() {
    useMeta({
      title: "Privacy policy | " + process.env.VUE_APP_NAME,
    });
  },
});
</script>

<style lang="less" scoped></style>
