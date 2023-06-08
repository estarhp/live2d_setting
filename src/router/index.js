import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {     path: "/live",
          component: () => import("../components/DetailPage/LiveSetting.vue"),
        children:[
            {
                path:"bilibili",
                component: import("../components/DetailPage/live/LiveB.vue")
            }
        ],
        redirect: "/live/bilibili"


    },
    { path: "/language", component: () => import("../components/DetailPage/LanguageSetting.vue") },
    {
        path:"/",
        redirect:"/live/bilibili"


    }
];




export default createRouter({
    history: createWebHistory(),
    routes
});