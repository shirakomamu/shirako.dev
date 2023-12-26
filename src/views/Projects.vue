<script setup lang="ts">
import { useHeadSafe } from "@unhead/vue";
import { useRoute } from "vue-router";
import FloatingButton from "@/components/FloatingButton.vue";
import InlineGallery from "@/components/InlineGallery.vue";
import ProjectItem from "@/components/ProjectItem.vue";
import OpenInNew from "@/components/icons/IconOpenInNew.vue";
import { APP_NAME } from "@/env.js";
import { head } from "@/main.js";

const route = useRoute();
useHeadSafe(
  {
    title: `Projects | ${APP_NAME}`,
    link: [{ rel: "canonical", href: "https://shirako.dev" + route.path }],
  },
  { head },
);
</script>

<template>
  <div class="flex-1 grid p-8 w-full max-w-3xl self-center">
    <FloatingButton />
    <div class="space-y-8">
      <h5 class="text-4xl dark:text-white">Projects</h5>

      <ProjectItem
        icon-url="/icons/sukonbu.png"
        title="Sukonbu"
        date="2022/06"
        :initially-expanded="true"
      >
        <div class="grid grid-cols-1 gap-2">
          <InlineGallery
            class="my-2 text-center sm:text-lg font-semibold"
            :show-pagination="true"
            :show-controls="true"
          >
            <div>
              <img
                src="@/assets/images/sukonbu_promo/home.png"
                alt="sukonbu promotional image"
                loading="lazy"
              />
            </div>
            <div class="px-8">
              <p>Upload your favorite wallpapers, and</p>
              <p>share your settings across devices.</p>
              <img
                src="@/assets/images/sukonbu_promo/settings.png"
                class="mt-4"
                alt="sukonbu promotional image"
                loading="lazy"
              />
            </div>
            <div class="px-8">
              <p>Import settings at any time with just a URL.</p>
              <img
                src="@/assets/images/sukonbu_promo/import.png"
                class="mt-4"
                alt="sukonbu promotional image"
                loading="lazy"
              />
            </div>
          </InlineGallery>

          <div class="text-center my-2">
            <a
              href="https://sukonbu.shirako.dev"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white transition bg-blue-srk/80 hover:bg-blue-srk/100 focus:bg-blue-srk/100 px-4 py-2 align-middle rounded-lg inline-block"
            >
              Open site
              <OpenInNew class="icon-inline" />
            </a>
          </div>

          <p>Homepage replacement for both desktop and mobile.</p>
          <p>
            Easily upload images and adjust which search engine is used. All
            data is stored locally on-device.
          </p>
          <p>
            The entire app is navigable with just the keyboard and from any
            page, your bookmarks are only one easy shortcut away.
          </p>
          <p>
            * Bonus: Works great with
            <a
              href="https://addons.mozilla.org/ja/firefox/addon/multi-account-containers/"
              target="_blank"
              rel="noopener noreferrer"
              class="ps-text-link"
            >
              Firefox containers
              <OpenInNew class="icon-inline" />
            </a>
            . Each container can store its own shortcuts and wallpaper settings.
          </p>

          <h6 class="font-semibold mt-8">Key technologies:</h6>
          <ul class="list-inside list-disc">
            <li>TypeScript, Less, and Vue 3 with Vite</li>
            <li>ESLint, Prettier, for automatic linting</li>
            <li>Vitest for basic unit coverage, no component testing</li>
            <li>Automatic localization support (ja, en)</li>
            <li>Local storage for KV storage</li>
            <li>Indexed DB for image blob storage</li>
            <li>App-wide keyboard shortcut support</li>
            <li>Schema validation with Zod</li>
            <li>Responsive design (desktop, mobile, dark mode)</li>
            <li>Installable as PWA</li>
            <li>Automated build/deploy from GitHub</li>
          </ul>
        </div>
      </ProjectItem>

      <ProjectItem
        icon-url="/icons/192-or-w.png"
        title="Shirako Eats"
        date="2021/07"
        :initially-expanded="false"
      >
        <div class="grid grid-cols-1 gap-2">
          <InlineGallery
            class="my-2 text-center sm:text-lg font-semibold"
            :show-pagination="true"
            :show-controls="true"
          >
            <div>
              <img
                src="@/assets/images/hrs_promo/initial.png"
                alt="Shirako Eats promotional image"
                loading="lazy"
              />
            </div>
            <div class="px-8">
              <p>Organize your favorites into lists.</p>
              <img
                src="@/assets/images/hrs_promo/hrs_promo_1.png"
                class="mt-4"
                alt="Shirako Eats promotional image"
                loading="lazy"
              />
            </div>
            <div class="px-8">
              <p>Easily find restaurants near you.</p>
              <img
                src="@/assets/images/hrs_promo/hrs_promo_2.png"
                class="mt-4"
                alt="Shirako Eats promotional image"
                loading="lazy"
              />
            </div>
            <div class="px-8">
              <p>When you want to go out to eat,</p>
              <p>just pick from your lists.</p>
              <img
                src="@/assets/images/hrs_promo/hrs_promo_3.png"
                class="mt-4"
                alt="Shirako Eats promotional image"
                loading="lazy"
              />
            </div>
            <div class="px-8">
              <p>Add your friends' lists, too. Up to 10.</p>
              <img
                src="@/assets/images/hrs_promo/hrs_promo_4.png"
                class="mt-4"
                alt="Shirako Eats promotional image"
                loading="lazy"
              />
            </div>
            <div class="px-8">
              <p>We'll find the best match for you.</p>
              <p>We'll make sure it's open, too.*</p>
              <img
                src="@/assets/images/hrs_promo/hrs_promo_5.png"
                class="my-4"
                alt="Shirako Eats promotional image"
                loading="lazy"
              />
              <p class="text-sm">
                * Only at US locations when business hours are available.
              </p>
            </div>
          </InlineGallery>

          <div class="text-center">
            <a
              href="https://github.com/shirakomamu/shirako-hrs"
              target="_blank"
              rel="noopener noreferrer"
              class="ps-text-link"
            >
              View source code on GitHub
              <OpenInNew class="icon-inline" />
            </a>
          </div>

          <p class="text-red-500">
            ※ Service discontinued effective November 2022.
          </p>
          <p>
            Service that allows people to organize their favorite restaurants
            into lists and helps choose which to go when feeling indecisive.
          </p>
          <p>
            When you mix your lists with your friends', the service will
            intelligently choose restaurants according to what's most popular
            among everyone, using a weighted randomization algorithm.
          </p>

          <h6 class="font-semibold mt-8">Key technologies:</h6>
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
            <li>Automated build/deploy from GitHub</li>
          </ul>
        </div>
      </ProjectItem>
    </div>
  </div>
</template>
