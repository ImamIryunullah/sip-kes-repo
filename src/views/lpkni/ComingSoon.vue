<template>
    <NavbarLandingPage />
    <div class="flex items-center justify-center min-h-screen bg-red-800 text-white">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Fitur Ini Akan Segera Hadir</h1>
        <p class="text-lg md:text-xl">Kami sedang bekerja untuk menghadirkan fitur ini secepat mungkin. Terima kasih atas kesabaran Anda!</p>
      </div>
    </div>
    <FooterLandingPage />
  </template>
  <script>
import FooterLandingPage from '@/components/FooterLandingPage.vue';
import NavbarLandingPage from '@/components/NavbarLandingPage.vue';

  export default {
    components: {
        FooterLandingPage,
        NavbarLandingPage
    },
    name: "ComingSoon"
  };
  </script>
  
  <style scoped>
  </style>
  