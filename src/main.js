import Vue from 'vue'
import Store from './store'
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import library from '@fortawesome/fontawesome-svg-core'
// import fas from '@fortawesome/free-solid-svg-icons'
// import fab from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

// library.add(fas, fab)
// Vue.component('font-`awesome`-icon', FontAwesomeIcon)
// import Router from './router'

Vue.config.productionTip = false

new Vue({
  // Router,
  Store,
  render: h => h(App),
})
.$mount('#app')
