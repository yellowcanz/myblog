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
      path: '/mdfile/:fileSha',
      component: MdFilePage
    }
  ]
})

// eslint-disable-next-line no-unused-vars
router.onError((error, to) => {
  if (error.message.includes('Failed to fetch dynamically imported module')) {
    console.log('ERROR IN ROUTE; ', error.message);
    setTimeout(() => {
      window.location.href = to.fullPath;
    }, 2000);
  }
})

export default router
