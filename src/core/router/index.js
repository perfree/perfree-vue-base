
// 创建一个路由器实例
import {createRouter, createWebHistory} from "vue-router";
import Layout from "../layout/Layout.vue";
import CoreIndexView from "../views/core-index/CoreIndexView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "layout",
            component: Layout,
            children: [
                {
                    path: "/coreIndex",
                    name: "coreIndex",
                    component: CoreIndexView
                }
            ]
        },
    ]
});

export default router;