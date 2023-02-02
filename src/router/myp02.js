//JS套件Router
const myp201 = () => import('@/components/myp201/myp201.vue')
const myp202 = () => import('@/components/myp202/myp202.vue')
const myp203 = () => import('@/components/myp203/myp203.vue')

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
    {
      name: 'myp202',
      path: '/myp202',
      component: myp202,
      meta: {
        functionId: 'MYP202',
        label: '導出Excel',
        requiresAuth: true
      },
    },
    {
      name: 'myp203',
      path: '/myp203',
      component: myp203,
      meta: {
        functionId: 'MYP203',
        label: '生成QRCode',
        requiresAuth: true
      },
    },
]