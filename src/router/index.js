// import store from '@/store';

import { createRouter, createWebHistory } from 'vue-router'

import Wifi from '@/views/Wifi.vue'

const routes = [
  { path: "/", name: "halamanWifi", component:Wifi},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
