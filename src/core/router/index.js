
// 创建一个路由器实例
import {createRouter, createWebHistory} from "vue-router";
import Layout from "../layout/Layout.vue";
import _import from "../utils/_import.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "layout",
            component: Layout
        }
    ]
});

export default router;