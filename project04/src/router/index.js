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
    path: '/wel',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "about" */ '../views/WelcomeView.vue')
  },
  {
    path: '/binding',
    name: 'BindingView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/BindingView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingSHtmlView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingSInputView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue')
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue')
  },
  {
    path: '/event',
    name: 'EventView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventView.vue')
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventClickView.vue')
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventChangeView.vue')
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () => import(/* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventKeyView.vue')
  },
  {
    path: '/memo',
    name: 'MemoView',
    component: () => import(/* webpackChunkName: "memo", webpackPrefetch:true */ '../views/3_memo/MemoView.vue')
  },
  {
    path: '/memo/list',
    name: 'MemoListView',
    component: () => import(/* webpackChunkName: "memo", webpackPrefetch:true */ '../views/3_memo/MemoListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
