<template>
  <div class="main-container w-full bg-white relative overflow-hidden mx-auto">
    <!-- Navbar -->
    <nav class="w-full h-[70px] bg-[#03a980] flex items-center px-8 justify-between shadow-md fixed top-0 left-0 right-0 z-50">

      <!-- Logo -->
      <div class="flex gap-6 items-center">
        <img src="@/assets/swiputih.png" alt="Logo" class="w-[40px] h-[40px] object-contain" />
      </div>

      <!-- Navbar Links for Desktop -->
      <div class="hidden md:flex gap-4">
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.path"
          class="relative px-4 py-5 rounded-t-lg font-medium text-sm transition-all"
          :class="{ 
            'bg-white text-[#151619] shadow-md': $route.path === item.path, 
            'text-white hover:bg-[#028970] transition': $route.path !== item.path 
          }"
        >
          {{ item.label }}
        </router-link>
      </div>

      <!-- Hamburger Icon for Mobile -->
      <div class="md:hidden flex items-center">
        <button @click="toggleMobileMenu" class="text-white">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <!-- Profile Icon & Dropdown -->
      <div class="relative hidden md:flex">
        <button @click="toggleDropdown" class="flex items-center space-x-2">
          <img src="@/assets/profile-icon.png" alt="Profile" class="w-8 h-8 rounded-full border border-white" />
          <span class="text-white font-medium text-sm">{{ username }}</span>
        </button>

        <!-- Dropdown Menu -->
        <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
          <router-link to="/profile" class="block px-5 py-4 text-gray-700 hover:bg-gray-100 text-sm">Profile</router-link>
          <button @click="logout" class="block px-4 py-2 text-red-500 hover:bg-gray-100 w-full text-left text-sm">Logout</button>
        </div>
      </div>
    </nav>

    <!-- Mobile Menu (Sidebar) -->
    <div v-if="mobileMenuOpen" class="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-700 bg-opacity-75 z-40 flex flex-col items-center py-6">
      <router-link
        v-for="(item, index) in menuItems"
        :key="index"
        :to="item.path"
        class="text-white text-lg py-4 hover:bg-[#028970] w-full text-center"
        @click="closeMobileMenu"
      >
        {{ item.label }}
      </router-link>
      <button @click="closeMobileMenu" class="text-white text-lg py-4 mt-4 w-full text-center">
        Close Menu
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { label: "Pendaftaran", path: "/pendaftaran-anggota" },
        { label: "Riwayat", path: "/riwayat-pengajuan" },
        { label: "Hubungi Kami", path: "/chat" },
        { label: "Layanan Pengaduan", path: "/user/form-pengaduan" },
        { label: "Pembayaran", path: "/user/transaksi" },
      ],
      dropdownOpen: false,
      mobileMenuOpen: false,
      username: "User123", // Gantilah dengan data dari backend atau Vuex store
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
/* Styling Navbar agar tetap sama saat pindah halaman */
nav {
  height: 70px;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;
}

/* Hamburger Menu */
.fas.fa-bars {
  cursor: pointer;
}

/* Styling for the mobile menu */
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
}
</style>
