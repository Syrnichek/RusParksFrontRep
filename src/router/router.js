import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import UserPage from "@/pages/UserPage.vue";
import AuthoPage from "@/pages/AuthoPage.vue";
import ParkIdPage from "@/pages/ParkIdPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";

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
        component: AuthoPage
    },
    {
        path:'/park/:parkId',
        component: ParkIdPage
    },
    {
        path:'/registration',
        component: RegistrationPage
    }
]
const router= createRouter({
    routes,
    history: createWebHistory()/*здесть должно быть process*/
})
export default router;