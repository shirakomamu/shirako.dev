<template>
  <div class="error space-y-8">
    <img
      alt="Cat on keyboard"
      src="@/assets/images/irasutoya/shigoto_zaitaku_cat_man.png"
      class="mx-auto h-64"
    />
    <article class="space-y-4">
      <h4 class="text-4xl dark:text-white">404 - Page not found</h4>
      <p>
        The page at <code>{{ $route.path }}</code> could not be found.
      </p>
    </article>
    <div>
      <button
        type="button"
        @click="$router.push('/')"
        class="font-semibold dark:text-white hover:underline focus:underline"
      >
        Go back to home page
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";

export default defineComponent({
  name: "Error",
  setup() {
    useMeta({
      title: "Error | " + process.env.VUE_APP_NAME,
    });
  },
});
</script>
