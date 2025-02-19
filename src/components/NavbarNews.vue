<template>
  <!-- Social Media Section -->
  <section class="bg-gray-900 py-2">
    <div class="container mx-auto flex justify-between items-center px-4">
      <!-- Hashtags on the Left -->
      <div class="text-white text-sm sm:text-xs">
        <span>#lpknipusat #perlindungankonsumen #konsumen #konsumencerdas</span>
      </div>

      <!-- Social Media Icons on the Right -->
      <div class="flex space-x-6 text-white sm:space-x-4">
        <a href="https://facebook.com/lpkni.pusat/" target="_blank" class="hover:text-gray-400">
          <i class="fab fa-facebook fa-sm sm:fa-xs"></i>
        </a>
        <a href="https://www.instagram.com/lpkni_official/" target="_blank" class="hover:text-gray-400">
          <i class="fab fa-instagram fa-sm sm:fa-xs"></i>
        </a>
        <a href="https://linkedin.com/company/consumers-international" target="_blank" class="hover:text-gray-400">
          <i class="fab fa-linkedin fa-sm sm:fa-xs"></i>
        </a>
        <a href="https://www.youtube.com/user/ConsumersIntl" target="_blank" class="hover:text-gray-400">
          <i class="fab fa-youtube fa-sm sm:fa-xs"></i>
        </a>
      </div>
    </div>
  </section>
 <!-- Header Section -->
<header class="bg-red-600 shadow-md py-5 w-full">
  <div class="container mx-auto flex flex-wrap justify-between items-center px-4">
    <!-- Logo and Navigation -->
    <div class="flex items-center space-x-4 w-full sm:w-auto">
      <router-link to="/" class="text-white text-xl font-bold flex items-center">
        <img src="@/assets/iconlpkni.png" alt="LPKNI" class="w-15 h-12 mr-3 mt-2">
        Suara Konsumen
      </router-link>
    </div>

    <!-- Date Section -->
    <div class="text-white w-full sm:w-auto mt-2 sm:mt-0">
      <span>{{ currentDay }}, {{ currentDate }}</span>
    </div>

    <!-- Search Section -->
    <div class="flex space-x-6 items-center w-full sm:w-auto mt-2 sm:mt-0">
      <div class="relative w-full sm:w-auto">
        <input type="text" class="pl-10 pr-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none w-full" placeholder="Search..." />
        <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
      </div>
    </div>
  </div>
</header>


  <!-- Navigation Menu -->
<!-- Navigation Menu -->
<nav class="block bg-white py-6">
  <ul class="flex justify-center space-x-10 overflow-x-auto px-4 sm:px-0">
    <li><a href="#" class="text-sm sm:text-base py-2 px-4">Terkini</a></li>
    <li><a href="#" class="text-sm sm:text-base py-2 px-4">Ekonomi</a></li>
    <li><a href="#" class="text-sm sm:text-base py-2 px-4">Nasional</a></li>
    <li><a href="#" class="text-sm sm:text-base py-2 px-4">Internasional</a></li>
    <li><a href="#" class="text-sm sm:text-base py-2 px-4">Kriminal</a></li>
    <li><a href="#" class="text-sm sm:text-base py-2 px-4">Hoaks</a></li>

    <!-- Dropdown for Berita Lokal (Mobile View) -->
    <li class="relative sm:hidden">
      <a href="#" class="text-sm sm:text-base block py-2 px-4 hover:bg-gray-100">Aceh</a>
    </li>
    <li class="relative sm:hidden">
      <a href="#" class="text-sm sm:text-base block py-2 px-4 hover:bg-gray-100">Bali</a>
    </li>
    <li class="relative sm:hidden">
      <a href="#" class="text-sm sm:text-base block py-2 px-4 hover:bg-gray-100">Jawa Barat</a>
    </li>
    <li class="relative sm:hidden">
      <a href="#" class="text-sm sm:text-base block py-2 px-4 hover:bg-gray-100">Jawa Timur</a>
    </li>
    <li class="relative sm:hidden">
      <a href="#" class="text-sm sm:text-base block py-2 px-4 hover:bg-gray-100">Sumatra Utara</a>
    </li>
    <li class="relative sm:hidden">
      <a href="#" class="text-sm sm:text-base block py-2 px-4 hover:bg-gray-100">Kalimantan Selatan</a>
    </li>
    <li class="relative sm:hidden">
      <a href="#" class="text-sm sm:text-base block py-2 px-4 hover:bg-gray-100">Sulawesi Selatan</a>
    </li>

    <!-- Dropdown for Berita Lokal (Desktop View) -->
    <!-- Desktop Dropdown Menu -->
    <li class="relative group hidden sm:block">
      <button class="flex items-center space-x-2 py-1 px-4">
        <span class="text-sm sm:text-base">Lokal</span>
        <i class="fas fa-chevron-down"></i>
      </button>
      <!-- Dropdown content that is hidden by default -->
      <div class="absolute left-0 hidden mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg group-hover:block">
        <ul class="py-1">
          <li><a href="#" class="block text-sm sm:text-base px-4 py-2 hover:bg-gray-100">Aceh</a></li>
          <li><a href="#" class="block text-sm sm:text-base px-4 py-2 hover:bg-gray-100">Bali</a></li>
          <li><a href="#" class="block text-sm sm:text-base px-4 py-2 hover:bg-gray-100">Jawa Barat</a></li>
          <li><a href="#" class="block text-sm sm:text-base px-4 py-2 hover:bg-gray-100">Jawa Timur</a></li>
          <li><a href="#" class="block text-sm sm:text-base px-4 py-2 hover:bg-gray-100">Sumatra Utara</a></li>
          <li><a href="#" class="block text-sm sm:text-base px-4 py-2 hover:bg-gray-100">Kalimantan Selatan</a></li>
          <li><a href="#" class="block text-sm sm:text-base px-4 py-2 hover:bg-gray-100">Sulawesi Selatan</a></li>
        </ul>
      </div>
    </li>
  </ul>
</nav>


</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      dropdownOpen: false,
      currentDate: this.formatDate(new Date()),
      currentDay: this.getDayInIndonesian(new Date()),
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    formatDate(date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    getDayInIndonesian(date) {
      const daysInIndonesian = [
        'Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu',
      ];
      return daysInIndonesian[date.getDay()];
    },
  },
};
</script>

<style scoped>
/* Adjust Navbar for smaller devices */
@media (max-width: 768px) {
  nav ul {
    flex-wrap: nowrap; /* Prevent navbar from wrapping */
    overflow-x: auto; /* Allow horizontal scroll on smaller screens */
    justify-content: flex-start; /* Align items to the left */
    padding-left: 4px;
    padding-right: 4px;
  }

  .text-sm {
    font-size: 0.75rem; /* Smaller text on mobile */
  }

  .fa-sm {
    font-size: 1rem; /* Smaller icons on mobile */
  }
}
</style>
