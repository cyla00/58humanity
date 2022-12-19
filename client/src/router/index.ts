import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Asso from '../views/Asso.vue'
import Media from '../views/Media.vue'
import Contact from '../views/Contact.vue'
import Donation from '../views/Donation.vue'
import Reglement from '../views/Reglement.vue'
import Actions from '../views/Actions.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/nous',
    name: 'nous',
    component: Asso
  },
  {
    path: '/media',
    name: 'media',
    component: Media
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/actions',
    name: 'actions',
    component: Actions
  },
  {
    path: '/donation',
    name: 'donation',
    component: Donation
  },
  {
    path: '/reglement-interiore',
    name: 'reglement',
    component: Reglement
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
