import { createRouter, createWebHistory } from "vue-router";
import { Route } from "@/immutables/router";
import Error from "@/views/Error.vue";
import Home from "@/views/Home.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import Projects from "@/views/Projects.vue";

function getAsync<T>(component: T): () => Promise<T> {
  return async () => component;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  routes: [
    {
      path: "/",
      name: Route.HOME,
      component: Home,
    },
    {
      path: "/projects",
      name: Route.PROJECTS,
      component: getAsync(Projects),
    },
    {
      path: "/privacy",
      name: Route.PRIVACY,
      component: getAsync(PrivacyPolicy),
    },
    {
      path: "/:all(.*)",
      name: Route.ERROR,
      component: getAsync(Error),
    },
  ],
});

export default router;
