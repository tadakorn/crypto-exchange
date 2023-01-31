import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import VueCookies from "vue-cookies";
import { createPinia } from "pinia";

import "./assets/main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSun,
  faMoon,
  faHeart,
  faHandshake,
} from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faSun,
  faMoon,
  faHeart,
  faHandshake,
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass
);

const app = createApp(App);

app.use(router);
app.use(VueApexCharts);
app.use(VueCookies);
app.use(createPinia());
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
