import LoginPage from './components/Login.vue';
import DashboardPage from './components/Dashboard.vue';
import signUp from './components/SignUp.vue';

import { createRouter, createWebHistory } from 'vue-router';


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
        name: "SignUp",
        component: signUp,
        path: "/SignUp"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;