<template>
  <header class="flex w-full h-[80px] px-6 sm:px-12 lg:px-[72px] justify-between items-center border-b border-[#028a66] bg-[#03a980]">
    <div class="flex items-center gap-2">
      <!-- Logo Image -->
      <img src="@/assets/swiputih.png" alt="SWI Logo" class="w-10 h-10 object-contain" />
      <span class="text-[20px] sm:text-[24px] font-semibold text-white">NEWS</span>
    </div>
    
    <!-- Navbar for Desktop & Mobile -->
    <div class="hidden md:flex gap-8 text-[16px] sm:text-[18px] font-medium">
      <a href="/" class="text-white font-semibold hover:text-[#028a66] transition">Beranda</a>
      <a href="#" class="text-white hover:text-[#028a66] transition">Terbaru</a>
      <a href="#" class="text-white hover:text-[#028a66] transition">Ekonomi</a>
      <a href="#" class="text-white hover:text-[#028a66] transition">Nasional</a>
      <a href="#" class="text-white hover:text-[#028a66] transition">Internasional</a>
      <a href="/tentang-kami" class="text-white hover:text-[#028a66] transition">Tentang Kami</a>
      <a href="/chat" class="text-white hover:text-[#028a66] transition">Hubungi Kami</a>
    </div>

    <!-- Date Display and Login Icon -->
    <div class="flex items-center gap-4">
      <!-- Current Date Display -->
      <div class="text-white font-medium">
        {{ currentDate }}
      </div>
  
      <!-- Login Icon -->
      <div class="flex items-center gap-2">
        <a href="/login" class="text-white font-semibold hover:text-[#028a66] transition">
          <i class="fa fa-user-circle text-xl"></i> Login
        </a>
      </div>
    </div>

    <!-- Hamburger Icon for Mobile -->
    <div class="md:hidden flex items-center">
      <button @click="toggleMobileMenu" class="text-white text-lg">
        <i class="fas fa-bars text-lg"></i>
      </button>
    </div>
  </header>

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
</template>

<script>
export default {
  data() {
    return {
      currentDate: "", // Store the current date
      mobileMenuOpen: false, // State to control mobile menu
      menuItems: [
        { label: "Beranda", path: "/" },
        { label: "Terbaru", path: "#" },
        { label: "Ekonomi", path: "#" },
        { label: "Nasional", path: "#" },
        { label: "Internasional", path: "#" },
        { label: "Tentang Kami", path: "/tentang-kami" },
        { label: "Hubungi Kami", path: "/chat" }
      ]
    };
  },
  mounted() {
    // Initialize the date when the component is mounted
    this.updateDate();
    // Update the date every second
    setInterval(this.updateDate, 1000);
  },
  methods: {
    updateDate() {
      const today = new Date();
      const day = today.getDate().toString().padStart(2, "0");
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const year = today.getFullYear();

      // Format the date as "DD/MM/YYYY"
      this.currentDate = `${day}/${month}/${year}`;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  }
};
</script>

<style scoped>
/* Optional styling for the icon */
.fas.fa-bars {
  cursor: pointer;
}

/* Mobile Menu Styling */
.md:hidden {
  display: none;
}

@media (max-width: 768px) {
  /* Show hamburger on small screens */
  .md:hidden {
    display: block;
  }

  /* Navbar items will be shown as a vertical sidebar when hamburger is clicked */
  .text-lg {
    font-size: 18px;
  }

  .w-full {
    width: 100%;
  }

  .text-white {
    font-size: 16px;
  }
}


</style>
