//JS方法Router
const myp101 = () => import('@/components/myp101/myp101.vue')
const myp102 = () => import('@/components/myp102/myp102.vue')
const myp103 = () => import('@/components/myp103/myp103.vue')

export default [
    {
      name: 'myp101',
      path: '/myp101',
      component: myp101,
      meta: {
        functionId: 'MYP101',
        label: '常用函數工具',
        requiresAuth: true
      },
    },
    {
        name: 'myp102',
        path: '/myp102',
        component: myp102,
        meta: {
          functionId: 'MYP102',
          label: '技術文章',
          requiresAuth: true
        },
    },
    {
      name: 'myp103',
      path: '/myp103',
      component: myp103,
      meta: {
        functionId: 'MYP103',
        label: 'LeetCode',
        requiresAuth: true
      },
  },
]