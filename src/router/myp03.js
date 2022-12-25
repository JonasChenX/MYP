//vue元件觀念
const myp301 = () => import('@/components/myp301/myp301.vue')
const myp301A = () => import('@/components/myp301/componts/a.vue')
const myp301B = () => import('@/components/myp301/componts/b.vue')
const myp302 = () => import('@/components/myp302/myp302.vue')
const myp303 = () => import('@/components/myp303/myp303.vue')
const myp304 = () => import('@/components/myp304/myp304.vue')
const myp305 = () => import('@/components/myp305/myp305.vue')

export default [
    {
      name: 'myp301',
      path: '/myp301',
      component: myp301,
      meta: {
        functionId: 'MYP301',
        label: '頁面切換',
        requiresAuth: true
      },
      children:[
        {
          path:'a',
          name:'myp301A',
          component: myp301A,
          meta: {
            keepAlive: true,
            requiresAuth: true
          }
        },
        {
          path:'b',
          name:'myp301B',
          component: myp301B,
          meta:{
            requiresAuth: true
          }
        },
      ]
    },
    {
      name: 'myp302',
      path: '/myp302',
      component: myp302,
      meta: {
        functionId: 'MYP302',
        label: 'vue元件遞迴',
        requiresAuth: true
      },
    },
    {
      name: 'myp303',
      path: '/myp303',
      component: myp303,
      meta: {
        functionId: 'MYP303',
        label: '跨元件(兄弟層)傳遞',
        requiresAuth: true
      },
    },
    {
      name: 'myp304',
      path: '/myp304',
      component: myp304,
      meta: {
        functionId: 'MYP304',
        label: '操作DOM方式',
        requiresAuth: true
      },
    },
    {
      name: 'myp305',
      path: '/myp305',
      component: myp305,
      meta: {
        functionId: 'MYP305',
        label: '自製directives指令',
        requiresAuth: true
      },
    }
   
]