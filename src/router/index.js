import ClimateView from '@/views/Climate/ClimateView.vue'
import ExperienceView from '@/views/Experience/ExperienceView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('../views/Home/HomeView.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView
  },
  {
    path: '/climate',
    name: 'climate',
    component: ClimateView
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
