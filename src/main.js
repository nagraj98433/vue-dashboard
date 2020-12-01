import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import VueMq from 'vue-mq'

Vue.use(BootstrapVue)

Vue.use(VueMq, {
  breakpoints: {
    mobile: 450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity,
  }
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
