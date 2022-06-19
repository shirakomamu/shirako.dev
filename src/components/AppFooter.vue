<script setup lang="ts">
import EmailHider from "@/components/EmailHider.vue";
</script>

<template>
  <div class="nav flex items-center px-8">
    <div class="justify-start flex flex-grow items-center">
      <div class="text-gray-500 text-sm">
        <span>© 2021 白狐マム</span> |
        <span
          ><EmailHider :show-email-as-text="false" class="ps-text-link"
            >✉️ say hello</EmailHider
          ></span
        >
        |
        <router-link to="/privacy" class="ps-text-link">privacy</router-link>
      </div>
    </div>
  </div>
</template>
