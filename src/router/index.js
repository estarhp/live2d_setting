import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {     path: "/",
          component: () => import("../components/DetailPage/LiveSetting.vue"),
        children:[
            {
                path:"bilibili",
                component: import("../components/DetailPage/live/LiveB.vue")
            }
        ]


    },
    { path: "/language", component: () => import("../components/DetailPage/LanguageSetting.vue") }
];




export default createRouter({
    history: createWebHistory(),
    routes
});