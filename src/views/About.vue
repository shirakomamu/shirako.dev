<template>
  <div class="space-y-8">
    <article class="space-y-4">
      <h4 class="text-4xl dark:text-white">About</h4>
      <p>This is an about page.</p>
    </article>

    <div class="space-y-4">
      <h6 class="text-2xl dark:text-white">Find me at</h6>
      <div>Email: <EmailHider :text="emailText" /></div>
      <div class="flex flex-row gap-4 items-center">
        <a
          href="https://github.com/shirakomamu"
          class="text-blue-srk space-x-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="svg-icon"
            src="/vendor-icons/github.svg"
            alt="GitHub"
            height="32"
            width="32"
          />
          <span class="hover:underline focus:underline">shirakomamu</span>
        </a>
      </div>
    </div>

    <!-- <div class="space-y-4">
      <h6 class="text-2xl dark:text-white">Contact me</h6>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        class="grid grid-cols-1 grid-form gap-4 w-full max-w-prose"
      >
        <div>
          <label :for="nameUid">Name</label>
        </div>
        <div>
          <input
            :id="nameUid"
            type="text"
            name="name"
            class="w-full"
            required
          />
        </div>
        <div>
          <label :for="emailUid">Email address</label>
        </div>
        <div>
          <input
            :id="emailUid"
            type="email"
            name="email"
            class="w-full"
            required
          />
        </div>
        <div>
          <label :for="bodyUid">Message</label>
        </div>
        <div>
          <textarea
            :id="bodyUid"
            name="body"
            class="w-full"
            rows="6"
            required
          />
        </div>

        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMeta } from "vue-meta";
import EmailHider from "@/components/EmailHider.vue";
// import uniqueId from "@/utils/uniqueId";

export default defineComponent({
  name: "About",
  components: {
    EmailHider,
  },
  setup() {
    useMeta({
      title: "About | " + process.env.VUE_APP_NAME,
    });

    const emailText = "view email address";

    // const uid = uniqueId();

    // const nameUid = `name-${uid}`;
    // const emailUid = `email-${uid}`;
    // const bodyUid = `body-${uid}`;

    return {
      emailText,
      // nameUid,
      // emailUid,
      // bodyUid,
    };
  },
});
</script>

<style lang="less" scoped>
.svg-icon {
  display: inline;
  @media (prefers-color-scheme: dark) {
    // https://codepen.io/sosuke/pen/Pjoqqp
    filter: brightness(0) saturate(100%) invert(94%) sepia(6%) saturate(120%)
      hue-rotate(182deg) brightness(101%) contrast(89%);
  }
}
// textarea {
//   resize: none;
// }

// .grid-form {
//   grid-template-columns: 0.25fr 0.75fr;
// }
</style>
