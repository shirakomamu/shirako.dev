<script setup lang="ts">
import { useMeta } from "vue-meta";
import { useRoute } from "vue-router";

const route = useRoute();
useMeta({
  title: `Privacy policy | ${import.meta.env.VITE_APP_NAME}`,
  link: [
    {
      rel: "canonical",
      href: "https://shirako.dev" + route.path,
    },
  ],
});
</script>

<template>
  <div class="flex-1 w-full max-w-prose self-center p-8">
    <div class="space-y-8">
      <h5 class="text-4xl dark:text-white">Privacy policy</h5>
      <p>
        This site does not collect your data for analytics nor store any
        cookies, functional or otherwise.
      </p>
      <p>
        Some files may be stored in your browser's cache to allow this site to
        function even when you do not have internet connectivity.
      </p>
      <p>
        Some functions provided by this site may ask you for necessary
        information to facilitate communication, such as your name or email
        address. By using such facilities, you agree that you voluntarily
        provide this information. We will take reasonable precautions to
        safeguard your personal information, and we will never transfer or
        disclose it to a third-party without your explicit consent.
      </p>
      <p>
        This site's hosting provider, Cloudflare, may log data necessary for the
        functioning of this site. Such data may include your browser metadata or
        IP address. Please see their privacy policy at
        <a
          href="https://www.cloudflare.com/privacypolicy"
          class="ps-text-link"
          target="_blank"
          rel="noopener noreferrer"
          >https://www.cloudflare.com/privacypolicy</a
        >
        for more information.
      </p>
    </div>
  </div>
</template>
