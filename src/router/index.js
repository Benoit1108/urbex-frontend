import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cookies from "js-cookie";
import Main from '../views/Main';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    beforeEnter: () => {
      if (Cookies.get('token') === undefined) {
        return {
          path: '/login'
        }
      }
    },
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/map',
        name: 'Map',
        component: () => import(/* webpackChunkName: "about" */ '../views/Map.vue')
      },
      {
        path: '/guide',
        name: 'Guide',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Guide.vue')
      },
      {
        path: '/practice',
        name: 'Practice',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Practice.vue')
      },
      {
        path: '/create',
        name: 'create',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/CreatePost.vue')
      },
      {
        path: '/chat',
        name: 'Chat',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue')
      },
      {
        path: '/profil',
        name: 'profil',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Profil.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: () => {
      if (Cookies.get('token')) {
        return {
          path: '/'
        }
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
