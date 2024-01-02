import { createRouter, createWebHistory } from 'vue-router'
import UnLoginView from '../views/UnLoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import ListView from '../views/ListView.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: UnLoginView
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUpView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/:catchAll(.*)',
      component: PageNotFound
    }
  ]
})

export default router
