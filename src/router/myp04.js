//JS套件Router
const myp401 = () => import('@/components/myp401/myp401.vue')
const myp402 = () => import('@/components/myp402/myp402.vue')

export default [
    {
      name: 'myp401',
      path: '/myp401',
      component: myp401,
      meta: {
        functionId: 'MYP401',
        label: '模組元件範例',
        requiresAuth: true
      },
    },
    {
      name: 'myp402',
      path: '/myp402',
      component: myp402,
      meta: {
        functionId: 'MYP402',
        label: 'CSS特效範例',
        requiresAuth: true
      },
    },
   
]