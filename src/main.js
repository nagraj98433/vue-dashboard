import Vue from 'vue'
import App from './App.vue'

import vueRouter from 'vue-router'
import Home from './Views/Home.vue'
import About from './Views/About.vue'
import Services from './Views/Services.vue'
import Contact from './Views/Contact.vue'
import login from './Views/login.vue'
import dashboard from './Views/dashboard.vue'

Vue.use(vueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/login', component: login },
  { path: '/dashboard', component: dashboard },
]
const router = new vueRouter({
  routes: routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
