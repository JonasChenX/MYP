//JS套件Router
const myp401 = () => import('@/components/myp401/myp401.vue')

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
   
]