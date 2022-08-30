import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../components/Login.vue';
import DashboardPage from '../components/Dashboard.vue';
import SignUp from '../components/SignUp.vue';

Vue.use(VueRouter)

const routes = [
    {
      name: "dashboard",
      component : DashboardPage,
      path : '/dashboard'
    },
    {
        name: "login",
        component: LoginPage,
        path: "/Login"
    },
    {
      name: "signUp",
      component: SignUp,
      path: "/SignUp"
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
