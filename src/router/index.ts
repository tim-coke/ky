import { createRouter, createWebHistory } from 'vue-router'
import error from '@/views/error/error.vue'
import index from '@/views/index/index.vue'
import SchoolPage from '@/views/index/school.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '前台',
      component: index,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: index,
          meta: {
            title: '首页',
          },
        },
      ],
    },
    {
      path: '/school',
      component: SchoolPage, // 查院校页
    },

    //错误页面
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: error,
      meta: {
        title: '404',
      },
    },
  ],
})

export default router
