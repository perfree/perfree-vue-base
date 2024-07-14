
// 创建一个路由器实例
import {createRouter, createWebHistory} from "vue-router";
import Layout from "../layout/Layout.vue";

const router = createRouter({
    history: createWebHistory(),
    base: "/",
    routes: [
        {
            path: "/",
            name: "layout",
            component: Layout
        }
    ]
});

export default router;