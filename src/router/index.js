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
      if(Cookies.get('token') === undefined){
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
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/chat',
        name: 'Chat',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Chat.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    beforeEnter: () => {
      if(Cookies.get('token')){
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
