// Composables
import { createRouter, createWebHistory } from 'vue-router'
// Every component regarding a route should be in @/views/*
import homePage from '@/views/Home.vue'
import eventsPage from '@/views/Events.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homePage
    },
    {
      path: '/events',
      name: 'Events',
      component: eventsPage
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFound.vue"),
    },
  ]
})

export default router
