import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import SearchListingView from '../views/SearchListingView.vue'
import DetailUserView from '../views/DetailUserView.vue'
import FatoriteView from '../views/FatoriteView.vue'
import RepositoriesView from '../views/RepositoriesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FatoriteView
  },
  {
    path: '/users',
    name: 'users',
    component: SearchListingView,
  },
  {
    path: '/repositories',
    name: 'repositories',
    component: RepositoriesView,
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
