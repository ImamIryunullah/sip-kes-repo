<template>
    <NavbarView />
  
    <div class="main-container w-[500px] h-auto bg-[#fff] rounded-[10px] border border-[#e7e7e7] relative overflow-hidden mx-auto mt-[120px] mb-[50px] p-6">
      <div class="flex items-center gap-4">
        <div class="w-[60px] h-[60px] bg-[#d7d7d7] rounded-[10px] flex items-center justify-center">
          <img src="@/assets/icon1.png" alt="News Icon" class="w-[32px] h-[32px]" />
        </div>
        <span class="font-['Montserrat'] text-[20px] font-semibold text-[#151619]">Edit Berita</span>
      </div>
      
      <div class="w-full h-px bg-[#e7e7e7] my-4"></div>
      
      <div class="flex flex-col gap-4">
        <div class="flex w-full p-[12px] gap-[8px] items-center bg-[#fff] rounded-[12px] border border-[#3d3e3e] relative">
          <input class="w-full h-[42px] bg-transparent border-none px-4" v-model="news.title" placeholder="Judul" />
        </div>
        
        <div class="flex w-full h-[152px] p-[12px] gap-[8px] items-start bg-[#fff] rounded-[12px] border border-[#3d3e3e] relative">
          <textarea class="w-full h-full bg-transparent border-none px-4" v-model="news.description" placeholder="Deskripsi"></textarea>
        </div>
  
        <div class="flex w-full p-[12px] gap-[8px] items-center bg-[#fff] rounded-[12px] border border-[#3d3e3e] relative">
          <input type="date" class="w-full h-[42px] bg-transparent border-none px-4 text-gray-700" v-model="news.tanggalPublikasi" />
        </div>
        
        <div class="flex w-full p-[12px] gap-[8px] items-center bg-[#fff] rounded-[12px] border border-[#3d3e3e] relative">
          <input type="file" class="w-full h-[42px] bg-transparent border-none px-4"  placeholder="Gambar.jpg" />
        </div>
      </div>
      
      <div class="flex justify-between items-center mt-6">
        <button @click="cancelEdit" class="w-[259px] h-[54px] bg-[#d7d7d7] rounded-[10px] flex items-center justify-center gap-2">
          <span class="text-[16px] font-bold text-black">CANCEL</span>
        </button>
        <button @click="updateNews" class="w-[259px] h-[54px] bg-[#03a980] rounded-[10px] flex items-center justify-center gap-2 text-white">
          <span class="text-[16px] font-bold">UPDATE</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarView from '@/components/NavbarView.vue';
  import { useRoute } from 'vue-router';
  
  export default {
    components: {
      NavbarView,
    },
    data() {
      return {
        news: {
          title: '',
          description: '',
          tanggalPublikasi: '',
          image: '',
        },
      };
    },
    mounted() {
      const route = useRoute();
      this.news = {
        title: route.query.title || '',
        description: route.query.description || '',
        tanggalPublikasi: route.query.tanggalPublikasi || '',
        image: route.query.image || '',
      };
    },
    methods: {
      cancelEdit() {
        alert('Edit berita dibatalkan');
      },
      updateNews() {
        alert('Berita berhasil diperbarui!');
      },
    },
  };
  </script>