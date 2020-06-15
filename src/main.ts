import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from 'vue-notification';
import Vuelidate from 'vuelidate';

// import HTTP request inerceptor
import Interceptor from './shared/services/Interceptor';
// initialiate interceptor
new Interceptor().intercept();

// module imported to be used
Vue.use(Notifications);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
