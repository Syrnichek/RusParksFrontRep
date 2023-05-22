import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import PostPage from "@/pages/PostPage.vue";

const routes=[
    {
        path:'/',
        components: MainPage
    },
    {
        path:'/user',
        components: PostPage
    }
]
const router= createRouter({
    routes,
    history: createWebHistory()/*здесть должно быть process*/
})
export default router;