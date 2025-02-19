<template>
  <nav class="bg-red-600 p-6 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/dashboard" class="text-white text-3xl font-bold flex items-center">
        <img src="@/assets/iconlpkni.png" alt="LPKNI" class="w-15 h-12 mr-3 mt-2">
        LPKNI
      </router-link>

      <!-- Navbar Links for desktop -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <router-link to="#about" class="text-white hover:text-gray-300 flex items-center space-x-2">
            <i class="fas fa-info-circle"></i>
            <span>About</span>
          </router-link>
        </li>
        <li >
          <router-link to="#services" class="text-white hover:text-gray-300 flex items-center space-x-2">
            <i class="fas fa-cogs"></i>
            <span>Services</span>
          </router-link>
        </li>
        <li>
          <router-link to="#contact" class="text-white hover:text-gray-300 flex items-center space-x-2">
            <i class="fas fa-phone-alt"></i>
            <span>Contact</span>
          </router-link>
        </li>

        <!-- Pendaftaran Dropdown -->
        <li class="relative group">
          <button class="text-white hover:text-gray-300 flex items-center space-x-2">
            <i class="fas fa-clipboard-check"></i>
            <span>Pendaftaran</span>
            <i class="fas fa-chevron-down ml-1"></i>
          </button>
          <!-- Dropdown Menu -->
          <ul class="absolute left-0 min-w-[150px] mt-2 bg-white text-black shadow-lg rounded-lg hidden group-hover:block z-10">
            <li>
              <router-link to="#lpkni" class="block px-4 py-2 text-sm hover:bg-gray-200">Daftar LPKNI</router-link>
            </li>
            <li>
              <router-link to="#swi" class="block px-4 py-2 text-sm hover:bg-gray-200">Daftar SWI</router-link>
            </li>
          </ul>
        </li>

        <!-- Suara Konsumen (Portal Berita) -->
        <li>
          <router-link to="#suara-konsumen" class="text-white hover:text-gray-300 flex items-center space-x-2">
            <i class="fas fa-newspaper"></i>
            <span>Suara Konsumen</span>
          </router-link>
        </li>

        <!-- Pengaduan (Direct ke Form Pengaduan) -->
        <li>
          <router-link to="/form-pengaduan-lpkni" class="text-white hover:text-gray-300 flex items-center space-x-2">
            <i class="fas fa-exclamation-triangle"></i>
            <span>Pengaduan</span>
          </router-link>
        </li>

        <li>
          <router-link to="/customer-serivices-lpkni" class="text-white hover:text-gray-300 flex items-center space-x-2">
            <i class="fas fa-headset"></i>
            <span>Customer Service</span>
          </router-link>
        </li>
      </ul>

      <!-- Mobile Hamburger Menu -->
      <div class="block md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <div v-show="isMenuOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 md:hidden">
      <div class="flex justify-end p-6">
        <button @click="toggleMenu" class="text-white">
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>
      <ul class="flex flex-col items-center text-white space-y-6">
        <li><router-link to="#about" @click="toggleMenu" class="hover:text-gray-300">About</router-link></li>
        <li><router-link to="#services" @click="toggleMenu" class="hover:text-gray-300">Services</router-link></li>
        <li><router-link to="#contact" @click="toggleMenu" class="hover:text-gray-300">Contact</router-link></li>
        <li><router-link to="#lpkni" @click="toggleMenu" class="hover:text-gray-300">Pendaftaran</router-link></li>
        <li><router-link to="#suara-konsumen" @click="toggleMenu" class="hover:text-gray-300">Suara Konsumen</router-link></li>
        <li><router-link to="/form-pengaduan-lpkni" @click="toggleMenu" class="hover:text-gray-300">Pengaduan</router-link></li>
        <li><router-link to="/customer-serivices-lpkni" @click="toggleMenu" class="hover:text-gray-300">Customer Service</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
/* Fix dropdown hover issue */
.group:hover ul {
  display: block;
}
</style>
