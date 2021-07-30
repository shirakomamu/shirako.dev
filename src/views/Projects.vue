<template>
  <div class="space-y-8 max-w-2xl">
    <h5 class="text-4xl dark:text-white text-center">Projects</h5>

    <article class="grid grid-cols-1 gap-4">
      <a
        class="
          text-2xl
          font-semibold
          opacity-80
          transition
          hover:opacity-100
          focus:opacity-100
        "
        href="https://eats.shirako.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="@/assets/images/icons/192-or-w.png"
          width="32"
          height="32"
          alt="Shirako Eats logo"
          class="icon-inline mr-2"
        />Shirako Eats <OpenInNew class="icon-inline opacity-50 text-lg" />
      </a>
      <p>
        Service that allows people to organize their favorite restaurants into
        lists and helps choose which to go when feeling indecisive.
      </p>
      <p>
        When you mix your lists with your friends' lists, it'll intelligently
        choose restaurants according to what's popular among everyone.
      </p>

      <a
        href="https://eats.shirako.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="@/assets/images/hrs-promo.png"
          alt="Shirako Eats promotional image"
          class="w-full inline"
        />
      </a>

      <h6 class="font-semibold">Key functionality:</h6>
      <ul class="list-inside list-disc">
        <li>User authentication and authorization</li>
        <li>Hierarchical role-based access control system</li>
        <li>Relational database (PostgreSQL), managed by ORM</li>
        <li>Persistent Redis store</li>
        <li>Responsive design (desktop, mobile, dark mode)</li>
        <li>Installable as PWA</li>
        <li>Fully secured API services</li>
        <li>Integration with Auth0 APIs</li>
        <li>Integration with Yelp APIs</li>
        <li>Integration with SendGrid APIs</li>
      </ul>
    </article>
  </div>
</template>

<script lang="ts">
import OpenInNew from "@/components/icons/OpenInNew.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { OpenInNew },
  name: "Projects",
});
</script>

<style lang="less" scoped></style>
