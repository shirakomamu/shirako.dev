import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "projects" */ "@/views/Projects.vue"),
  },
  {
    path: "/privacy",
    name: "PrivacyPolicy",
    component: () =>
      import(/* webpackChunkName: "privacy" */ "@/views/PrivacyPolicy.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "error" */ "@/views/Error.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
