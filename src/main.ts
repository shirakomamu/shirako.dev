import { createHead } from "@unhead/vue";
import { registerSW } from "virtual:pwa-register";
import "virtual:windi.css";
import { createApp } from "vue";
import "@/assets/styles/index.less";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

const app = createApp(App);
export const head = createHead();

app.use(head);
app.use(pinia);
app.use(router);

app.mount("#app");
registerSW();
