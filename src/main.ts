import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import "./registerServiceWorker";
import "windi.css";
import "@/assets/styles/index.less";

const app = createApp(App);
const metaManager = createMetaManager();

app.use(metaManager);
app.use(store);
app.use(router);

app.mount("#app");
