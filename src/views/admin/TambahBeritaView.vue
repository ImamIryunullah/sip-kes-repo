<template>
  <NavbarView />

  <div
    class="main-container w-full sm:w-[500px] h-auto bg-[#fff] rounded-[10px] border-solid border border-[#e7e7e7] relative overflow-hidden mx-auto mt-[120px] p-6"
  >

    <div class="flex items-center gap-4 mb-6">
      <div class="w-[60px] h-[60px] bg-[#d7d7d7] rounded-[10px] flex items-center justify-center">
        <img src="@/assets/icon1.png" alt="News Icon" class="w-[32px] h-[32px]" />
      </div>
      <span class="font-['Montserrat'] text-[20px] font-semibold text-[#151619]">Tambah Berita</span>
    </div>
  
    <div class="w-full h-px bg-[#e7e7e7] mb-6"></div>
  
    <div class="flex flex-col gap-4">
      <div class="flex w-full p-[12px] gap-[8px] items-center bg-[#fff] rounded-[12px] border border-[#3d3e3e] relative">
        <input class="w-full h-[42px] bg-transparent border-none px-4" placeholder="Judul" />
      </div>
      
      <div class="flex w-full h-[152px] p-[12px] gap-[8px] items-start bg-[#fff] rounded-[12px] border border-[#3d3e3e] relative">
        <textarea class="w-full h-full bg-transparent border-none px-4" placeholder="Deskripsi"></textarea>
      </div>

      <div class="flex w-full p-[12px] gap-[8px] items-center bg-[#fff] rounded-[12px] border border-[#3d3e3e] relative">
        <input type="date" class="w-full h-[42px] bg-transparent border-none px-4 text-gray-700" placeholder="Tanggal Publikasi DD/MM/YY" />
      </div>

      <div class="flex w-full p-[12px] gap-[8px] items-center bg-[#fff] rounded-[12px] border border-[#3d3e3e] relative">
        <input type="file" class="w-full h-[40px] bg-transparent border-none px-4" placeholder="Gambar.jpg" />
      </div>
    </div>
  
    <div class="flex justify-between items-center mt-6 flex-col sm:flex-row gap-4">
      <button class="w-full sm:w-[259px] h-[54px] bg-[#d7d7d7] rounded-[10px] flex items-center justify-center gap-2">
        <span class="text-[16px] font-bold text-black">CANCEL</span>
      </button>
      <button class="w-full sm:w-[259px] h-[54px] bg-[#03a980] rounded-[10px] flex items-center justify-center gap-2 text-white">
        <span class="text-[16px] font-bold">TAMBAH</span>
      </button>
    </div>
  </div>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue';

export default {
  components: {
    NavbarView,
  },
};
</script>

<style scoped>
/* Custom styles for responsiveness */

/* Ensure the main container is fluid for mobile view */
.main-container {
  max-width: 100%;
  padding: 16px;
}

/* Ensure no horizontal scroll */
body, html {
  overflow-x: hidden;
}

@media (max-width: 768px) {
  .text-lg {
    font-size: 16px;
  }


  .gap-4 {
    gap: 12px;
  }

  /* Full width for form inputs */
  .w-full {
    width: 100%;
  }

  /* Ensure buttons are stacked on small screens */
  .flex-col {
    flex-direction: column;
  }

  /* Ensure proper spacing between buttons */
  .gap-4 {
    gap: 16px;
  }
  
  /* Adjust text size for small screens */

}
</style>
