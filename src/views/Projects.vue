<script setup lang="ts">
import { useRoute } from "vue-router";
import { useMeta } from "vue-meta";
import InlineGallery from "@/components/InlineGallery.vue";
import ProjectItem from "@/components/ProjectItem.vue";
import OpenInNew from "@/components/icons/IconOpenInNew.vue";
import FloatingButton from "@/components/FloatingButton.vue";

const route = useRoute();
useMeta({
  title: `Projects | ${import.meta.env.VITE_APP_NAME}`,
  link: [
    {
      rel: "canonical",
      href: "https://shirako.dev" + route.path,
    },
  ],
});
</script>

<template>
  <div class="space-y-8 max-w-3xl">
    <FloatingButton />
    <h5 class="text-4xl dark:text-white">Projects</h5>

    <ProjectItem
      icon-url="/icons/192-or-w.png"
      title="Shirako Eats"
      date="2021/07"
      :initially-expanded="true"
    >
      <div class="grid grid-cols-1 gap-2">
        <InlineGallery
          class="my-2"
          :show-pagination="true"
          :show-controls="true"
        >
          <div>
            <img
              src="@/assets/images/hrs_promo/initial.png"
              alt="Shirako Eats promotional image"
              class=""
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold">
              Organize your favorites into lists.
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_1.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold">
              Easily find restaurants near you.
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_2.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold">
              When you want to go out to eat,
            </p>
            <p class="text-center text:lg sm:text-xl font-semibold mb-8">
              just pick from your lists.
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_3.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold mb-8">
              Add your friends' lists, too. Up to 10.
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_4.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
          </div>
          <div class="px-8">
            <p class="text-center text:lg sm:text-xl font-semibold">
              We'll find the best match for you.
            </p>
            <p class="text-center text:lg sm:text-xl font-semibold mb-8">
              We'll make sure it's open, too.*
            </p>
            <img
              src="@/assets/images/hrs_promo/hrs_promo_5.png"
              alt="Shirako Eats promotional image"
              loading="lazy"
            />
            <p class="text-xs sm:text-sm mt-4">
              * Only at US locations when business hours are available.
            </p>
          </div>
        </InlineGallery>

        <div class="text-center my-2">
          <a
            href="https://eats.shirako.dev"
            target="_blank"
            rel="noopener noreferrer"
            class="text-white transition bg-blue-srk/80 hover:bg-blue-srk/100 focus:bg-blue-srk/100 px-4 py-2 align-middle rounded-lg"
          >
            Open site (registration required) <OpenInNew class="icon-inline" />
          </a>
        </div>

        <div class="text-center">
          <a
            href="https://github.com/shirakomamu/shirako-hrs"
            target="_blank"
            rel="noopener noreferrer"
            class="ps-text-link"
          >
            View source code on GitHub <OpenInNew class="icon-inline" />
          </a>
        </div>

        <p>
          Service that allows people to organize their favorite restaurants into
          lists and helps choose which to go when feeling indecisive.
        </p>
        <p>
          When you mix your lists with your friends', the service will
          intelligently choose restaurants according to what's most popular
          among everyone, using a weighted randomization algorithm.
        </p>

        <h6 class="font-semibold">Key technologies:</h6>
        <ul class="list-inside list-disc">
          <li>User authentication and authorization</li>
          <li>Hierarchical role-based access control system</li>
          <li>Relational database (PostgreSQL), managed by MikroORM</li>
          <li>Client-side relational store, managed by Vuex ORM</li>
          <li>Persistent Redis store</li>
          <li>Responsive design (desktop, mobile, dark mode)</li>
          <li>Installable as PWA</li>
          <li>User-accessible API service</li>
          <li>Auth0 API integration (user management)</li>
          <li>Yelp API integration (business identify, business search)</li>
          <li>SendGrid API integration (email send)</li>
          <li>Automated build/deploy from Git source</li>
        </ul>
      </div>
    </ProjectItem>
  </div>
</template>
