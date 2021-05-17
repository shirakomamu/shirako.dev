<template>
  <div id="container mx-auto">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "@/views/Nav.vue";

export default defineComponent({
  components: {
    Nav,
  },
});
</script>

<style lang="less" scoped></style>
