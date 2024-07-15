const modules = import.meta.glob('./view/*.vue');
export default module => {
    return {
        router: (menusRouter, moduleName) => {
            let router = [];
            // 动态路由
            for (let item of menusRouter)
                router.push({
                    name: item.componentName,
                    path: item.path,
                    component: modules[`./view${item.component}.vue`],
                    meta: {
                        moduleName: moduleName,
                        name: item.name,
                    }
                });
            return router;
        },
    };
};