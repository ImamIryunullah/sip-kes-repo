import store from '@/store';

import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import OtpView from '@/views/OtpView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ResetPassView from '@/views/ResetPassView.vue'
import PortalBeritaView from '@/views/PortalBeritaView.vue'
import TambahBeritaView from '@/views/admin/TambahBeritaView.vue'
import BeritaView from '@/views/admin/BeritaView.vue'
import CsView from '@/views/admin/CsView.vue'
import ChatMulaiVIew from '@/views/ChatMulaiVIew.vue'
import ProfileView from '@/views/user/ProfileView.vue'
import DetailBerita from '@/views/DetailBerita.vue'
import PendaftaranAnggotaView from '@/views/user/PendaftaranAnggotaView.vue'
import RiwayatPengajuan from '@/views/user/RiwayatPengajuan.vue'
import RegisterPusatView from '@/views/pusat/RegisterPusatView.vue'
import DataGrafikView from '@/views/pusat/DataGrafikView.vue'
import PusatCsView from '@/views/pusat/PusatCsView.vue'
import KelolaBeritaView from '@/views/pusat/KelolaBeritaView.vue'
import ProfilePusatView from '@/views/pusat/ProfilePusatView.vue'
import AboutView from '@/views/AboutView.vue'
import FormPengaduanView from '@/views/user/FormPengaduanView.vue'
import DataPengaduanView from '@/views/pusat/DataPengaduanView.vue'
import PusatcardView from '@/views/pusat/PusatcardView.vue'
import UseridCardView from '@/views/user/UseridCardView.vue'
import UserKotaKabView from '@/views/user/UserKotaKabView.vue'
import TransaksiUserView from '@/views/user/TransaksiUserView.vue';
import PusatDataTransaksiView from '@/views/pusat/PusatDataTransaksiView.vue';
import DataDiriView from '@/views/user/DataDiriView.vue';
import FeedbackPengaduan from '@/views/user/FeedbackPengaduan.vue';
import DataPengaduanAdmin from '@/views/admin/DataPengaduanAdmin.vue';
import DataKeuanganAdmin from '@/views/admin/DataKeuanganAdmin.vue';
import GrafikKeuangan from '@/views/admin/GrafikKeuanganAdmin.vue';
import Dashboard from '@/views/lpkni/Dashboard.vue';
import FormPengaduanLpkni from '@/views/lpkni/FormPengaduanLpkni.vue';
import ComingSoon from '@/views/lpkni/ComingSoon.vue';

const routes = [
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/lupapassword', name: 'ForgotPasswordView', component: ForgotPasswordView },
  { path: '/getotp', name: 'OTPView', component: OtpView },
  { path: '/register', name: 'SignUpView', component: SignUpView },
  { path: '/resetpassword', name: 'ResetPassView', component: ResetPassView },
  { path: '/', name: 'Portal berita', component: PortalBeritaView },
  { path: '/tambahberita', name: 'TambahBeritaView', component: TambahBeritaView },
  { path: '/admin/berita', name: 'Berita', component: BeritaView },
  { path: '/admin/customerservices', name: 'CsView', component: CsView },
  { path: '/chat', name: 'UserChat', component: ChatMulaiVIew },
  { path: '/profile', name: 'ProfileView', component: ProfileView },
  { path: '/admin/grafik-keuangan', name: 'Datauang', component: GrafikKeuangan },
  { path: '/news/:id', name: 'DetailBerita', component: DetailBerita },
  { path: '/pendaftaran-anggota', name: 'PendaftaranAnggota', component: PendaftaranAnggotaView},
  { path: '/riwayat-pengajuan', name: 'RiwayatPengajuan', component: RiwayatPengajuan },
  { path: '/pusat/dataregistrasi', name: 'RegisterPusatView', component: RegisterPusatView },
  { path: '/pusat/datakeuangan', name: 'DataKeuangan', component: DataGrafikView },
  { path: '/pusat/customerservices', name: 'PusatCustomerServices', component: PusatCsView },
  { path: '/pusat/kelola-berita', name: 'PusatKelolaBerita', component: KelolaBeritaView },
  { path: '/pusat/profile', name: 'Profile Pusat', component: ProfilePusatView },
  { path: "/tentang-kami", name: "AboutView", component: AboutView },
  { path: "/pusat/data-pengaduan", name: "DataPengaduanView", component: DataPengaduanView }, 
  { path: "/user/form-pengaduan", name: "FormPengaduanUser", component: FormPengaduanView },
  { path: "/pusat/generate-id-card", name: "IdCardPusat", component: PusatcardView },
  { path: "/user/complete-profile", name: "DataDiriView", component: DataDiriView },
  { path: "/admin/datakeuangan", name: "DataKeuanganAdmin", component: DataKeuanganAdmin },
  { path: "/dashboard", name: "LandingPage", component: Dashboard },
  { path: "/form-pengaduan-lpkni", name: "formPengaduan", component: FormPengaduanLpkni },
  { path: "/customer-serivices-lpkni", name: "CSLPKNI", component: ComingSoon },



  
  {
    path: "/user/generate-id-card",
    name: "UseridCardView",
    component: UseridCardView,
    beforeEnter: (to, from, next) => {
      
      const userStatus = store.state.userStatus;  
  
      
      if (userStatus === 'Disetujui') {
        next();  
      } else {
        next({ name: 'RiwayatPengajuan' });  
      }
    }
  },
  
  { path: "/user/generate-id-card-kota", name: "UseridCardKotaView", component: UserKotaKabView},
  { path: "/user/transaksi", name: "UserTransaksi", component: TransaksiUserView},
  { path: "/pusat/data-transaksi", name: "PusatDataTransaksi", component: PusatDataTransaksiView},
  { path: "/user/feedback", name: "FeedBackPengaduan", component: FeedbackPengaduan},
  { path: "/admin/data-pengaduan", name: "Data Pengaduan", component: DataPengaduanAdmin}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
