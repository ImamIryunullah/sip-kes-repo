<template>
  <div class="main-container w-full bg-white relative overflow-hidden mx-auto">
    <!-- Navbar -->
    <nav class="w-full h-[70px] bg-[#03a980] flex items-center px-6 justify-between shadow-md fixed top-0 left-0 right-0 z-50">
      <!-- Logo -->
      <div class="flex items-center gap-6">
        <img src="@/assets/swiputih.png" alt="Logo" class="w-[45px] h-[45px] object-contain" />

        <!-- Navbar Links for Desktop -->
        <div class="hidden md:flex gap-3">
          <router-link 
            v-for="(item, index) in menuItems" 
            :key="index"
            :to="item.path"
            class="relative px-4 py-2 text-sm font-semibold rounded-md transition"
            :class="{ 
              'bg-white text-[#151619] shadow-md': $route.path === item.path, 
              'text-white hover:bg-[#028970] transition': $route.path !== item.path 
            }"
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
        <div v-if="dropdownOpen" class="absolute right-12 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
          <router-link to="/pusat/profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</router-link>
          <button @click="logout" class="block px-4 py-2 text-red-500 hover:bg-gray-100 w-full text-left">Logout</button>
        </div>
      </div>

      <!-- Hamburger Icon for Mobile -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMobileMenu" class="text-white">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu (Sidebar) -->
    <div v-if="mobileMenuOpen" class="md:hidden fixed top-0 right-0 w-[250px] h-full bg-gray-700 bg-opacity-75 z-40 flex flex-col items-start py-6 px-4">
      <router-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        class="text-white text-lg py-4 hover:bg-[#028970] w-full text-right"
        @click="closeMobileMenu"
      >
        {{ item.label }}
      </router-link>
      <!-- <button @click="closeMobileMenu" class="text-white text-lg py-4 mt-4 w-full text-left">
        Close Menu
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Portal Berita", path: "/pusat/portal-berita" },
        { label: "Verifikasi User", path: "/pusat/dataregistrasi" },
        { label: "Kelola Berita", path: "/pusat/kelola-berita" },
        { label: "Laporan Keuangan", path: "/pusat/datakeuangan" },
        { label: "Customer Services", path: "/pusat/customerservices" },
        { label: "Data Pengaduan", path: "/pusat/data-pengaduan" },
        { label: "Cetak ID-CARD", path: "/pusat/generate-id-card" },
        { label: "Data Transaksi", path: "/pusat/data-transaksi" }
      ],
      dropdownOpen: false,
      mobileMenuOpen: false,
      username: "Pusat", // Gantilah dengan data dari backend atau Vuex store
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    },
    logout() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Navbar styling for both desktop and mobile */
nav {
  height: 70px;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
}

/* Hamburger Menu */
.fas.fa-bars {
  cursor: pointer;
}

/* Mobile menu layout */
.md:hidden {
  display: none;
}

@media (max-width: 768px) {
  /* Show hamburger on small screens */
  .md:hidden {
    display: block;
  }

  /* Navbar items will be shown as a vertical sidebar when hamburger is clicked */
  .main-container {
    display: flex;
    flex-direction: column;
  }

  /* Mobile menu style */
  .text-lg {
    font-size: 18px;
  }

  .w-full {
    width: 100%;
  }

  .text-white {
    font-size: 16px;
  }

  /* Adjust spacing in mobile view */
  nav {
    padding: 0 20px;
  }

  .text-white.font-semibold {
    font-size: 14px;
  }

  .w-40 {
    width: 90%;
  }

  /* Mobile Sidebar styling */
  .fixed {
    position: fixed;
    top: 0;
    right: 0;
  }

  /* .w-[250px] {
    width: 250px;
  } */

  .h-full {
    height: 100%;
  }

  .bg-gray-700 {
    background-color: #374151;
  }

  /* Close Menu Button */
  .text-white.text-lg.py-4.mt-4 {
    text-align: center;
    background-color: #028970;
    border-radius: 8px;
  }
}
</style>
