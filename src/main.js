import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
//   console.log('callback - particles.js config loaded');
// });