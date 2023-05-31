import { createRouter, createWebHistory } from "vue-router";


const routes = [
    { path: "/", component: () => import("../components/DetailPage/LiveSetting.vue") },

    { path: "/language", component: () => import("../components/DetailPage/LanguageSetting.vue") }
];




export default createRouter({
    history: createWebHistory(),
    routes
});