<template>
    <div class="main-container w-full bg-white relative overflow-hidden mx-auto">
      <!-- Navbar -->
      <nav class="w-full h-[70px] bg-[#03a980] flex items-center px-6 justify-between shadow-md fixed top-0 left-0 right-0 z-50">
        
        <!-- Logo -->
        <div class="flex items-center gap-6">
          <img src="@/assets/swiputih.png" alt="Logo" class="w-[45px] h-[45px] object-contain" />
  
          <!-- Navbar Links -->
          <div class="hidden md:flex gap-3">
            <router-link 
              v-for="(item, index) in menuItems" 
              :key="index"
              :to="item.path"
              class="relative px-4 py-2 text-sm font-semibold rounded-md transition"
              :class="{ 'bg-white text-[#151619] shadow-md': $route.path === item.path, 'text-white hover:bg-[#028970] transition': $route.path !== item.path }"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>
  
        <!-- Profile & Logout -->
        <div class="relative flex items-center space-x-4">
          <button @click="toggleDropdown" class="flex items-center space-x-2">
            <img src="@/assets/profile-icon.png" alt="Profile" class="w-9 h-9 rounded-full border border-white" />
            <span class="text-white font-semibold hidden md:block">Pusat</span>
          </button>
  
          <!-- Dropdown Menu -->
          <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
            <router-link to="/pusat/profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</router-link>
            <button @click="logout" class="block px-4 py-2 text-red-500 hover:bg-gray-100 w-full text-left">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        dropdownOpen: false,
        menuItems: [
          { label: "Portal Berita", path: "/pusat/portal-berita" },
          { label: "Verifikasi User", path: "/pusat/dataregistrasi" },
          { label: "Kelola Berita", path: "/pusat/kelola-berita" },
          { label: "Laporan Keuangan", path: "/pusat/datakeuangan" },
          { label: "Customer Services", path: "/pusat/customerservices" },
          { label: "Data Pengaduan", path: "/pusat/data-pengaduan" },
          { label: "Cetak ID-CARD", path: "/pusat/generate-id-card" },
          { label: "Data Transaksi", path: "/pusat/data-transaksi" }
        ]
      };
    },
    methods: {
      toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
      },
      logout() {
        this.$router.push('/login');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Responsiveness */
  @media (max-width: 768px) {
    .main-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    nav {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: auto;
      padding: 10px;
    }
    .hidden.md\\:flex {
      flex-wrap: wrap;
      justify-content: center;
    }
    .text-sm {
      font-size: 12px;
    }
  }
  </style>
  