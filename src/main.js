import Vue from 'vue'
import Store from './store'
import Bus from '../EventBus.js'
import Element from 'element-ui'
import App from './App.vue'
// import Router from './router'
Vue.use(Bus)
Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  // Router,
  Store,
  render: h => h(App),
})
.$mount('#app')
