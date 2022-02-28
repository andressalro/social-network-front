import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RegisterView from "@/public/RegisterView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
