import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueLayers from "vuelayers";

Vue.config.productionTip = false;

Vue.use(VueLayers);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
