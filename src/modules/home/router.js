const modules = import.meta.glob('./view/*.vue');

export default function(menusRouter, moduleName) {
    // 动态路由
    for (let item of menusRouter)
      router.push({
        name: item.componentName,
        path: item.path,
        component: modules[`./view${item.component}.vue`],
        meta: {
          moduleName: moduleName,
          name: item.name,
          resource: item.resource ? item.resource : []
        }
      });
  
    return router;
  }