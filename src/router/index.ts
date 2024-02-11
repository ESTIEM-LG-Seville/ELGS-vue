// Composables
import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/Home.vue'
import eventsPage from '@/views/Events.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: homePage
  },
  {
    path: '/events',
    name: 'Events',
    component: eventsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
