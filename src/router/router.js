import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import UserPage from "@/pages/UserPage.vue";
import AuthPage from "@/pages/AuthPage.vue";
import ParkIdPage from "@/pages/ParkIdPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";
import NewsPage from "@/pages/NewsPage.vue";
import NewsIdPage from "@/pages/NewsIdPage.vue";

const routes=[
    {
        path:'/',
        component: MainPage
    },
    {
        path:'/user',
        component: UserPage
    },
    {
        path:'/authorisation',
        component: AuthPage
    },
    {
        path:'/park/:parkId',
        component: ParkIdPage
    },
    {
        path:'/registration',
        component: RegistrationPage
    },
    {
        path:'/news',
        component: NewsPage
    },
    {
        path:'/news/:newsId',
        component: NewsIdPage
    }
]
const router= createRouter({
    routes,
    history: createWebHistory()
})
export default router;