//import
import Vue from 'vue'
import Store from './store'
import Bus from '../EventBus.js'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMask from 'v-mask'
import money from 'v-money'
import router from './router'
import vueDebounce   from "vue-debounce";


// new DevExpress.ui.dxDateBox(container, {
//   "displayFormat": "dd/MM/yyyy",
//   "height": "40px",
//   "hint": "01/01/1900",
//   "invalidDateMessage": "Ngày nhập không hợp lệ",
//   "opened": true,
//   "placeholder": "dd/MM/yyyy",
//   "useMaskBehavior": true,
//   "width": "100%"
// });


//use

Vue.use(Bus)
Vue.use(VueAxios, axios)
Vue.use(VueMask);
Vue.use(money);
Vue.use(vueDebounce);

// Or if you want to pass in the lock option
Vue.use(vueDebounce, {
  lock: true
})

// Setting a different event to listen to
Vue.use(vueDebounce, {
  listenTo: 'input'
})

// Listening to multiple events
Vue.use(vueDebounce, {
  listenTo: ['keyup']
})

// Setting a default timer This is set to '300ms' if not specified
Vue.use(vueDebounce, {
  defaultTime: '700ms'
})

Vue.config.productionTip = false

new Vue({
  router,
  Store,
  render: h => h(App),
})
.$mount('#app')
