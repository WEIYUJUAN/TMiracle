import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import store from "../store"
const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/index.vue"),
  },
  {
    path: "/launchpad",
    name: "Launchpad",
    component: () => import("../views/launchpad/index.vue"),
  },
  // {
  //   path: '/launchpad/details',
  //   name: 'Launchpad:Details',
  //   component: () => import('../views/launchpad/details.vue')
  // },
  {
    path: "/comingSoon",
    name: "comingSoon",
    component: () => import("../views/comingSoon/index.vue"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("../views/terms.vue"),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () => import("../views/privacy.vue"),
  },
  {
    path: "/",
    redirect: "/home",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

})
export default router
