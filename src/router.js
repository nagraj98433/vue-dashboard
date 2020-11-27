import Vue from 'vue'
import vueRouter from 'vue-router'
import login from './Views/login.vue'
import dashboard from './Views/dashboard.vue'
import Showcase from './components/dashboard/showcase.vue'
import EditPermission from './Views/EditPermission.vue'

Vue.use(vueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  {
    path: '/dashboard', component: dashboard,
    children: [
      { path: '/', component: Showcase },
      { path: 'edit-permission', component: EditPermission },
    ]
  },
]
const router = new vueRouter({
  routes: routes
});

export default router