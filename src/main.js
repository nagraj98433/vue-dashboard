import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/fontawesome'
import {BootstrapVue} from 'bootstrap-vue'

Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
