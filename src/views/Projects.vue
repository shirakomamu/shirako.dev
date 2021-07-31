<template>
  <div class="space-y-8 max-w-2xl">
    <h5 class="text-4xl dark:text-white text-center">Projects</h5>

    <article class="grid grid-cols-1 gap-4">
      <div>
        <a
          class="text-2xl font-semibold hover:font-bold focus:font-bold"
          href="https://eats.shirako.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/192-or-w.png"
            width="32"
            height="32"
            alt="Shirako Eats logo"
            class="icon-inline mr-2 rounded-lg"
          />Shirako Eats <OpenInNew class="icon-inline opacity-50 text-lg" />
        </a>
      </div>
      <p class="opacity-50 italic">2021/07</p>
      <p>
        Service that allows people to organize their favorite restaurants into
        lists and helps choose which to go when feeling indecisive.
      </p>
      <p>
        When you mix your lists with your friends' lists, it'll intelligently
        choose restaurants according to what's popular among everyone.
      </p>

      <InlineGallery :show-pagination="true" :show-controls="true">
        <div class="w-full">
          <img
            src="@/assets/images/hrs_promo/initial.png"
            alt="Shirako Eats promotional image"
            class="w-full"
            loading="lazy"
          />
        </div>
        <div class="w-full p-16">
          <img
            src="@/assets/images/hrs_promo/hrs_promo_1.png"
            alt="Shirako Eats promotional image"
            class="w-full rounded"
            loading="lazy"
          />
        </div>
        <div class="w-full p-16">
          <img
            src="@/assets/images/hrs_promo/hrs_promo_2.png"
            alt="Shirako Eats promotional image"
            class="w-full rounded"
            loading="lazy"
          />
        </div>
        <div class="w-full p-16">
          <img
            src="@/assets/images/hrs_promo/hrs_promo_3.png"
            alt="Shirako Eats promotional image"
            class="w-full rounded"
            loading="lazy"
          />
        </div>
        <div class="w-full p-16">
          <img
            src="@/assets/images/hrs_promo/hrs_promo_4.png"
            alt="Shirako Eats promotional image"
            class="w-full rounded"
            loading="lazy"
          />
        </div>
        <div class="w-full p-16">
          <img
            src="@/assets/images/hrs_promo/hrs_promo_5.png"
            alt="Shirako Eats promotional image"
            class="w-full rounded"
            loading="lazy"
          />
        </div>
      </InlineGallery>

      <h6 class="font-semibold">Key functionality:</h6>
      <ul class="list-inside list-disc">
        <li>User authentication and authorization</li>
        <li>Hierarchical role-based access control system</li>
        <li>Relational database (PostgreSQL), managed by ORM</li>
        <li>Persistent Redis store</li>
        <li>Responsive design (desktop, mobile, dark mode)</li>
        <li>Installable as PWA</li>
        <li>Optional API service</li>
        <li>Auth0 integration (management API)</li>
        <li>Yelp APIs (business identify, business search)</li>
        <li>SendGrid APIs (email send)</li>
      </ul>
    </article>
  </div>
</template>

<script lang="ts">
import OpenInNew from "@/components/icons/OpenInNew.vue";
import InlineGallery from "@/components/InlineGallery.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { OpenInNew, InlineGallery },
  name: "Projects",
});
</script>

<style lang="less" scoped></style>
