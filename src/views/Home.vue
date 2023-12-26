<script setup lang="ts">
import { useHeadSafe } from "@unhead/vue";
import { useRoute } from "vue-router";
import { APP_NAME } from "@/env.js";
import { head } from "@/main.js";

const route = useRoute();
useHeadSafe(
  {
    title: `Home | ${APP_NAME}`,
    link: [{ rel: "canonical", href: "https://example.com" + route.path }],
  },
  { head },
);
</script>

<template>
  <div class="flex-1 grid space-y-8 justify-center p-8">
    <div class="grid items-center max-w-prose">
      <article class="space-y-4">
        <h4 class="text-3xl dark:text-white">初めまして。</h4>

        <p>
          I am a software engineer based in California. My education was in
          Aerospace Engineering.
        </p>

        <p>
          Though I first started programming as a hobby more than 10 years ago,
          I now specialize in developing web apps using modern technologies such
          as Vue, Node, and TypeScript.
        </p>

        <p>
          I enjoy listening to music (favorites are from Touhou, NieR, and Final
          Fantasy), cooking, and hiking when I have time. I also occasionally
          make digital art in Photoshop.
        </p>

        <p>
          I also have a soft spot for cats, so you may sometimes come across cat
          illustrations, courtesy of
          <a
            ref="noopener noreferrer"
            href="https://irasutoya.com"
            target="_blank"
            class="ps-text-link"
          >
            Irasutoya</a
          >.
        </p>

        <p class="text-right text-sm">
          <ruby>
            白狐
            <rt>しらこ</rt>
            マム
          </ruby>
          <br />
          <span class="opacity-50">(Shirako Mamu)</span>
        </p>
      </article>
    </div>
  </div>
</template>
