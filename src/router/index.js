import { storageFun } from '@/common/functionMain'
import { createRouter, createWebHistory } from 'vue-router'
import myp01 from '@/router/myp01'
import myp02 from '@/router/myp02'
import myp03 from '@/router/myp03'
import myp04 from '@/router/myp04'
const home = () => import('@/components/home.vue'); 
const login = () => import('@/core/login/login.vue'); 

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/home',
    name: 'home',
    meta: { requiresAuth: true },
    component: home
  },
  ...myp01,
  ...myp02,
  ...myp03,
  ...myp04,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 掛載路由導航守衛
router.beforeEach((to, from, next)=>{
  // to 將要訪問的路徑
  // from 從哪個路徑跳轉過來
  // next 是一個函數,表示放行

  //登入頁面直接放行
  // if(to.path === '/login') return next()

  // 如果到達頁面的路由配有 meta.requiresAuth 值為 true 就代表需要通過驗證
  if (to.meta.requiresAuth) {

    //獲取token
    const tokenStr = storageFun.sessionStorageObj.get('mypToken')
    //若沒有該token則跳轉登入頁面
    if(!tokenStr){
      next('/login') 
    } else{
      next()
    }
  }else {
    next()
  }

  

})

export default router
