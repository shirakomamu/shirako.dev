<template>
  <div class="error space-y-8">
    <img
      alt="Cat on keyboard"
      src="@/assets/images/shigoto_zaitaku_cat_man.png"
      class="mx-auto h-64 mt-8"
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
        class="font-semibold dark:text-white hover:underline"
      >
        Go back to home page
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // props: {
  //   requestedRoute: {
  //     type: String,
  //     // default: () => "",
  //   },
  //   mode: {
  //     type: String,
  //     // default: () => "404",
  //   },
  // },
});
</script>
