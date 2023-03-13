import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import SearchListingView from '../views/SearchListingView.vue'
import DetailUserView from '../views/DetailUserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    component: SearchListingView,
  },
  {
    path: '/users/:username',
    name: 'userDetail',
    component: DetailUserView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'pageNotFound',
    component: PageNotFoundView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
