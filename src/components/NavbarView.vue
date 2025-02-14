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
            :class="{ 'bg-white text-[#151619] shadow-md': $route.path === item.path, 'text-white hover:bg-[#028970] transition': $route.path !== item.path }"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>

      <!-- Profile & Logout for Desktop -->
      <div class="relative flex items-center space-x-4">
        <button @click="toggleDropdown" class="flex items-center space-x-2">
          <img src="@/assets/profile-icon.png" alt="Profile" class="w-9 h-9 rounded-full border border-white" />
          <span class="text-white font-semibold hidden md:block">Admin</span>
        </button>

        <!-- Dropdown Menu -->
        <div v-if="dropdownOpen" class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
          <router-link to="/admin/profile" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</router-link>
          <button @click="logout" class="block px-4 py-2 text-red-500 hover:bg-gray-100 w-full text-left">Logout</button>
        </div>
      </div>

      <!-- Hamburger Icon for Mobile -->
      <button @click="toggleSidebar" class="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </nav>

    <!-- Sidebar for Mobile -->
    <div v-if="sidebarOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 md:hidden">
      <div class="w-[250px] bg-white fixed top-0 right-0 bottom-0 z-50 shadow-lg">
        <div class="flex justify-between items-center p-4 border-b">
          <img src="@/assets/swiputih.png" alt="Logo" class="w-[45px] h-[45px] object-contain" />
          <button @click="toggleSidebar" class="text-[#03a980]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <!-- Sidebar Links -->
        <div class="flex flex-col p-4">
          <router-link 
            v-for="(item, index) in menuItems" 
            :key="index"
            :to="item.path"
            class="py-3 text-sm font-semibold text-[#03a980] hover:bg-gray-100 rounded-md transition"
          >
            {{ item.label }}
          </router-link>
          <div class="mt-4">
            <button @click="logout" class="text-red-500 w-full text-left py-3">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
      dropdownOpen: false,
      menuItems: [
        { label: "Berita", path: "/admin/berita" },
        { label: "Chat", path: "/admin/customerservices" },
        { label: "Transaksi", path: "/admin/transaksi" },
        { label: "Grafik", path: "/admin/data-uang" },
      ]
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    logout() {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* Sidebar Responsiveness */
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
    right: 0;
  }
  .text-sm {
    font-size: 12px;
  }
}
</style>
