import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import RegisterView from "@/public/RegisterView.vue";
import LoginView from "@/public/LoginView.vue";
import DashboardView from "@/secure/DashboardView.vue";
import PostsView from "@/secure/content/PostsView.vue";

const routes: Array<RouteRecordRaw> = [
  {path: '/register', component: RegisterView},
  {path: '/login', component: LoginView},
  {
    path: "/",
    component: DashboardView,
    children: [
      {path: '', component: PostsView}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
