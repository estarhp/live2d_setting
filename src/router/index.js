import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

const routes = [
    {     path: "/live",
          component: () => import("../components/DetailPage/LiveSetting.vue"),
        children:[
            {
                path:"bilibili",
                component: import("../components/DetailPage/live/Bilibili.vue")
            },
            {
                path:"overall",
                component:import("../components/DetailPage/live/Overall.vue")
            },
            {
                path:"youtube",
                component:import("../components/DetailPage/live/Youtube.vue")
            },
        ],
        redirect: "/live/bilibili"


    },
    { path: "/language", component: () => import("../components/DetailPage/LanguageSetting.vue") },
    {
        path:"/",
        redirect:"/live"
    }
];




export default createRouter({
    history: createWebHashHistory(),
    routes
});