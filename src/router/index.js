import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MdFilePage from '@/components/MdFilePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeview',
      component: HomeView
    },
    {
      path: '/js',
      name: 'js',
      component: () => import('@/views/JsPage.vue')
    },
    {
      path: '/vue',
      name: 'vue',
      component: () => import('@/views/VuePage.vue')
    },
    {
      path: '/note',
      name: 'note',
      component: () => import('@/views/NotePage.vue')
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('@/views/OtherPage.vue')
    },
    {
      path: '/mdfile/:fileName',
      component: MdFilePage
    }
  ]
})

export default router
