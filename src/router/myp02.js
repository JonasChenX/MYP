//JS套件Router
const myp201 = () => import('@/components/myp201/myp201.vue')

export default [
    {
      name: 'myp201',
      path: '/myp201',
      component: myp201,
      meta: {
        functionId: 'MYP201',
        label: 'notification套件',
        requiresAuth: true
      },
    },
   
]