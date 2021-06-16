//import
import Vue from 'vue'
import Store from './store'
import Bus from '../EventBus.js'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMask from 'v-mask'

//use
// import Router from './router'
Vue.use(Bus)
Vue.use(VueAxios, axios)
Vue.use(VueMask);

Vue.config.productionTip = false

new Vue({
  // Router,
  Store,
  render: h => h(App),
})
.$mount('#app')
