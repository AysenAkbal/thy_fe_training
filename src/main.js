import { createApp } from "vue";
import { createPinia } from "pinia";

import 'bootstrap/dist/css/bootstrap.min.css';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
