import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from "vue-notification";
import Vuelidate from "vuelidate";
import VueI18n from 'vue-i18n'
import 'sweetalert2/src/sweetalert2.scss'
import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';

// import HTTP request inerceptor
import Interceptor from "./shared/services/Interceptor";
// initialiate interceptor
new Interceptor().intercept();

// module imported to be used
Vue.use(Notifications);
Vue.use(Vuelidate);
Vue.use(VueI18n);


Vue.config.productionTip = false;

const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
  'ja-JP': {
    currency: {
      style: 'currency', currency: 'JPY', currencyDisplay: 'symbol'
    }
  },
  'en-NG': {
    currency: {
      style: 'currency', currency: 'NGN', currencyDisplay: 'symbol'
    }
  }
}

Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'
  ],
  dayOfWeekNamesShort: [
    'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
  ],
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  // Timezone offset, in minutes (0 - UTC, 180 - Russia, undefined - current)
  timezone: 0
});

// register with `formatter` option
const i18n = new VueI18n({
  numberFormats,
  locale: 'en-NG'
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
