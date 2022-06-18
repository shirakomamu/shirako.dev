import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import { registerSW } from "virtual:pwa-register";

import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

import "@/assets/styles/index.less";
import "virtual:windi.css";

const app = createApp(App);
const metaManager = createMetaManager();

app.use(pinia);
app.use(router);
app.use(metaManager);

app.mount("#app");
registerSW();
