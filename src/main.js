import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "@/assets/css/main.css";

axios.interceptors.request.use(
  function(config) {
    config.baseURL = "https://api.cognitive.microsofttranslator.com/";
    config.headers["Ocp-Apim-Subscription-Key"] = process.env.VUE_APP_KEY;
    config.headers["Content-type"] = "application/json";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

createApp(App)
  .use(router)
  .mount("#app");
