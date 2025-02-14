<template>
  <div class="w-screen bg-gray-100">
    <NavbarPortalView />
    
    
    <div class="max-w-6xl mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      
      <div class="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
        <h1 class="text-4xl font-bold text-[#028a66] text-center">{{ news.title }}</h1>
        <img :src="news.image" alt="Gambar Berita" class="w-full h-[450px] object-cover mt-6 rounded-md" />
        <div class="mt-4 text-[#4f4f4f] text-lg leading-relaxed">
          <p>{{ news.description }}</p>
          <div class="mt-4 text-[#028a66] text-sm">Kategori: {{ news.kategori }}</div>
          <div class="text-[#028a66] text-sm">Tanggal Publikasi: {{ news.tanggalPublikasi }}</div>
          <div class="mt-4 text-[#028a66] text-sm">Pengunjung: {{ news.pengunjung }}</div>
        </div>
      </div>

      
      <div>
        <h2 class="text-xl font-bold text-[#028a66] border-b-4 border-[#03a980] pb-2 mb-4">Berita Terkait</h2>
        
        <div v-for="related in relatedNews" :key="related.id" class="mb-4">
          <a :href="`/news/${related.id}`" class="flex items-center">
            <img :src="related.image" alt="Gambar Berita" class="w-20 h-20 object-cover rounded-md mr-3">
            <p class="text-sm font-semibold text-[#333]">{{ related.title }}</p>
          </a>
        </div>
      </div>
    </div>
    <FooterPortal />
  </div>
</template>

<script>
import NavbarPortalView from '@/components/NavbarPortalView.vue';
import FooterPortal from '@/components/FooterPortal.vue';

export default {
  components: {
    NavbarPortalView,
    FooterPortal
  },
  data() {
    return {
      news: {},
      relatedNews: []
    };
  },
  mounted() {
    this.getNewsDetail();
  },
  methods: {
    getNewsDetail() {
      const newsId = this.$route.params.id;
      const allNews = [...Array(20).keys()].map(i => ({
        id: i + 1,
        title: `Judul Berita ${i + 1}`,
        description: `Deskripsi berita nomor ${i + 1}`,
        tanggalPublikasi: `2024-02-${(i % 28) + 1}`,
        kategori: ['Politik', 'Olahraga', 'Teknologi', 'Nasional', 'Internasional'][i % 5],
        image: 'https://via.placeholder.com/300',
        pengunjung: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000 
      }));
      this.news = allNews.find(news => news.id == newsId);
      this.relatedNews = allNews.filter(news => news.kategori === this.news.kategori && news.id !== this.news.id).slice(0, 5);
    }
  }
};
</script>
