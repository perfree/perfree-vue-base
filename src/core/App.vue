<template>
  <router-view></router-view>
</template>

<script setup>

import _import from "./utils/_import.js";
import router from "./router/index.js";

function loadModule() {

  let childRouter = [
    {
      componentName: "home",
      moduleName: "home",
      name: "home",
      path: "/home",
      component: "/Home"
    },
    {
      componentName: "test",
      moduleName: "home",
      name: "test",
      path: "/test",
      component: "/Test"
    }
  ]
  _import("", "home").then(res => {
    let moduleRouter = res.router(childRouter, "home");
    moduleRouter.forEach(r => {
      router.addRoute("layout", r)
    })
    router.replace( router.currentRoute.value)
  })


  let childRouter2 = [{
    componentName: "tag",
    moduleName: "tag",
    name: "tag",
    path: "/tag",
    component: "/Tag"
  }]
  _import("", "tag").then(res => {
    let moduleRouter = res.router(childRouter2, "tag");
    moduleRouter.forEach(r => {
      router.addRoute("layout", r)
    })
    router.replace( router.currentRoute.value)
  })

  let childRouter3 = [{
    componentName: "demo02",
    moduleName: "demo02",
    name: "demo02",
    path: "/demo02",
    component: "/Demo02"
  }]
  _import("1", "demo02").then(res => {
    let moduleRouter = res.router(childRouter3, "demo02");
    moduleRouter.forEach(r => {
      router.addRoute("layout", r)
    })
    router.replace( router.currentRoute.value)
  })
}
loadModule();
</script>