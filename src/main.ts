import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import "tailwindcss/tailwind.css";
import "@/assets/styles/index.less";
import Notifications from "@kyvg/vue3-notification";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Notifications);

app.mount("#app");
