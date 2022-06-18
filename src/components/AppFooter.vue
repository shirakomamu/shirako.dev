<script setup lang="ts">
import EmailHider from "@/components/EmailHider.vue";

const hash = "n/a";
const emailText = "✉️ say hello";
</script>

<template>
  <div class="nav flex items-center px-8">
    <div class="justify-start flex flex-grow items-center">
      <div class="text-gray-500 text-sm">
        <span>© 2021 白狐マム</span> |
        <span
          ><EmailHider :show-email-as-text="false" class="ps-text-link">{{
            emailText
          }}</EmailHider></span
        >
        |
        <router-link to="/privacy" class="ps-text-link">privacy</router-link>
      </div>
    </div>
    <div class="justify-end space-x-8 flex items-center">
      <span class="text-gray-500 text-sm">build {{ hash }}</span>
    </div>
  </div>
</template>
