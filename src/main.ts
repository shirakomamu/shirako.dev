import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import Notifications from "@kyvg/vue3-notification";
import "./registerServiceWorker";
import "tailwindcss/tailwind.css";
import "@/assets/styles/index.less";

const app = createApp(App);
const metaManager = createMetaManager();

app.use(metaManager);
app.use(store);
app.use(router);
app.use(Notifications);

app.mount("#app");
