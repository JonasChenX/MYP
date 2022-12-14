import { createRouter, createWebHistory } from 'vue-router'
import myp01 from '@/router/myp01'
import myp02 from '@/router/myp02'
const home = () => import('@/components/home.vue'); 

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  ...myp01,
  ...myp02
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
