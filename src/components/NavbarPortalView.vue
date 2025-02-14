<template>
  <header class="flex w-full h-[80px] px-[72px] justify-between items-center border-b border-[#028a66] bg-[#03a980]">
    <div class="flex items-center gap-2">
      <!-- Logo Image -->
      <img src="@/assets/swiputih.png" alt="SWI Logo" class="w-10 h-10 object-contain" />
      <span class="text-[20px] font-semibold text-white">NEWS</span>
    </div>
    
    <nav class="flex gap-8 text-[16px] font-medium">
      <a href="/" class="text-white font-semibold hover:text-[#028a66] transition">Beranda</a>
      <a href="#" class="text-white hover:text-[#028a66] transition">Terbaru</a>
      <a href="#" class="text-white hover:text-[#028a66] transition">Ekonomi</a>
      <a href="#" class="text-white hover:text-[#028a66] transition">Nasional</a>
      <a href="#" class="text-white hover:text-[#028a66] transition">Internasional</a>
      <a href="/tentang-kami" class="text-white hover:text-[#028a66] transition">Tentang Kami</a>
    </nav>

    <!-- Date Display and Login Icon -->
    <div class="flex items-center gap-4">
      <!-- Current Date Display -->
      <div class="text-white font-medium">
        {{ currentDate }}
      </div>
      
      <!-- Login Icon -->
      <div class="flex items-center gap-2">
        <a href="/login" class="text-white font-semibold hover:text-[#028a66] transition">
          <i class="fa fa-user-circle text-2xl"></i> Login
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      currentDate: "",  // Store the current date
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
    }
  }
};
</script>

<style scoped>
/* Optional styling for the icon */
.fas {
  margin-right: 8px;
}
</style>
