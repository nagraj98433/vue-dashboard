import Vue from 'vue'
import App from './App.vue'
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import vueRouter from 'vue-router'
import Home from './components/Views/Home.vue'
import About from './components/Views/About.vue'
import Services from './components/Views/Services.vue'
import Contact from './components/Views/Contact.vue'
import login from './components/Views/login.vue'
import dashbord from './components/Views/dashbord.vue'

Vue.use(vueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/contact', component: Contact },
  { path: '/login', component: login },
  { path: '/dashbord', component: dashbord },
]
const router = new vueRouter({
  routes: routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
