// import store from '@/store';

import { createRouter, createWebHistory } from 'vue-router'
import PencarianPasien from '@/views/PencarianPasien.vue'
import PendataanPasien from '@/views/PendataanPasien.vue'
import AsesmenView from '@/views/AsesmenView.vue';
import GeneralConsentView from '@/views/GeneralConsentView.vue';
import ResumeMedisView from '@/views/ResumeMedisView.vue';

const routes = [
  { path: "/", name: "cariPasien", component: PencarianPasien },
  { path: "/pendataan-pasien", name: "pendataanPasien", component: PendataanPasien },
  { path: "/asesmen-pasien", name: "asesmenPasien", component: AsesmenView  },
  { path: "/general-consent-pasien", name: "generalConsent", component: GeneralConsentView  },
  { path: "/resume-medis-pasien", name: "resumeMedis", component: ResumeMedisView  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
