<template>
  <div class="about space-y-8">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "About",
  setup() {
    useMeta({
      title: "About me | " + process.env.VUE_APP_NAME,
    });
  },
});
</script>
