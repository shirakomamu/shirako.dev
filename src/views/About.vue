<template>
  <div class="space-y-8">
    <article class="space-y-4">
      <h4 class="text-4xl dark:text-white">About</h4>
      <p>This is an about page.</p>
    </article>

    <div class="space-y-4">
      <h6 class="text-2xl dark:text-white">Find me at</h6>
      <p>Email: <EmailHider :text="emailText" /></p>
      <p>
        GitHub:
        <a
          href="https://github.com/shirakomamu"
          class="hover:underline focus:underline text-blue-srk"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/shirakomamu
        </a>
      </p>
    </div>

    <!-- <div class="space-y-4">
      <h6 class="text-2xl dark:text-white">Contact me</h6>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        class="grid grid-form gap-4 w-full max-w-prose"
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
textarea {
  resize: none;
}

.grid-form {
  grid-template-columns: 0.25fr 0.75fr;
}
</style>
