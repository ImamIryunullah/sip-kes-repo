import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import LoginAdmin from '@/views/loginadmin.vue'
import LoginAdmin from "../views/LoginView.vue"
import AdminForgotPassword from '@/views/AdminForgotPassword.vue'
import AdminOtpView from '@/views/AdminOtpView.vue'
import AdminSignUpView from '@/views/AdminSignUpView.vue'
import AdminResetPassView from '@/views/AdminResetPassView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login/admin',
    name: 'Login Admin',
    component: LoginAdmin
  },
  {
    path: '/lupapassword',
    name: 'Lupa Password',
    component: AdminForgotPassword
  },
  {
    path: '/getOTP',
    name: 'Admin OTP',
    component: AdminOtpView
  },
  {
    path: '/admin/signup',
    name: 'Admin daftar',
    component: AdminSignUpView
  },
  {
    path: '/admin/resetpassword',
    name: 'Admin reset password',
    component: AdminResetPassView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router