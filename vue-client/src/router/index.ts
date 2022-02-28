import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RegisterView from "@/public/RegisterView.vue";
import LoginView from "@/public/LoginView.vue";

const routes: Array<RouteRecordRaw> = [
  {path: '/register', component: RegisterView},
  {path: '/login', component: LoginView},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
