<template>
  <router-view></router-view>
</template>

<script setup>

import _import from "./utils/_import.js";
import router from "./router/index.js";

function loadModule() {

  let childRouter = [{
    componentName: "home",
    moduleName: "home",
    name: "home",
    path: "/home",
    component: "/Home"
  }]
  _import("", "home").then(res => {
    let moduleRouter = res.router(childRouter, "home");
    moduleRouter.forEach(r => {
      router.addRoute("layout", r)
    })

    console.log(moduleRouter);
  })
}

loadModule();
</script>