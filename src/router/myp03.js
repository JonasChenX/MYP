//vue元件觀念
const myp301 = () => import('@/components/myp301/myp301.vue')
const myp301A = () => import('@/components/myp301/componts/a.vue')
const myp301B = () => import('@/components/myp301/componts/b.vue')

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
          component: myp301A,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'b',
          component: myp301B,
        },
      ]
    },
   
]