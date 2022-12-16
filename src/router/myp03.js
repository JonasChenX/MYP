//vue元件觀念
const myp301 = () => import('@/components/myp301/myp301.vue')
const myp301A = () => import('@/components/myp301/componts/a.vue')
const myp301B = () => import('@/components/myp301/componts/b.vue')
const myp302 = () => import('@/components/myp302/myp302.vue')
const myp303 = () => import('@/components/myp303/myp303.vue')
const myp304 = () => import('@/components/myp304/myp304.vue')

export default [
    {
      name: 'myp301',
      path: '/myp301',
      component: myp301,
      meta: {
        functionId: 'MYP301',
        label: '頁面切換',
      },
      children:[
        {
          path:'a',
          name:'myp301A',
          component: myp301A,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'b',
          name:'myp301B',
          component: myp301B,
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
      },
    },
    {
      name: 'myp303',
      path: '/myp303',
      component: myp303,
      meta: {
        functionId: 'MYP303',
        label: '跨元件(兄弟層)傳遞',
      },
    },
    {
      name: 'myp304',
      path: '/myp304',
      component: myp304,
      meta: {
        functionId: 'MYP304',
        label: '操作DOM方式',
      },
    }
   
]