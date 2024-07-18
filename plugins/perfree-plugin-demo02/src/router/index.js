import { createRouter, createWebHistory } from 'vue-router'

const modules = import.meta.glob('../modules/**/index.js');
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})
console.log(modules)

export default router
