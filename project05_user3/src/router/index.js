import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/user3/list',
    name: 'ListView',
    component: () => import(/* webpackChunkName: "about" */ '../views/user3/ListView.vue')
  },
  {
    path: '/user3/create',
    name: 'CreateView',
    component: () => import(/* webpackChunkName: "about" */ '../views/user3/CreateView.vue')
  },
  {
    path: '/user3/detail',
    name: 'DetailView',
    component: () => import(/* webpackChunkName: "about" */ '../views/user3/DetailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
