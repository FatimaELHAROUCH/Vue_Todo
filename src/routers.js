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
        path: "/login"
    },
    {
        name: "SignUp",
        component: signUp,
        path: "/signUp"
    },
    {
        name: "addTask",
        component: AddTask,
        path: "/addTask"
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;