<template>
  <div class="w-screen bg-gray-100">
    <NavbarPortalView />
    
    <!-- Search Bar -->
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <input v-model="searchQuery" type="text" placeholder="Cari berita..." class="w-2/3 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a980]" />
      <select v-model="selectedCategory" class="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a980]">
        <option value="">Semua Kategori</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>
    
    <!-- Container utama dengan layout Tribunnews -->
    <div class="max-w-6xl mx-auto py-6 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Kolom Utama (Berita Terbaru) -->
      <div class="md:col-span-2">
        <h2 class="text-3xl font-bold text-[#028a66] border-b-4 border-[#03a980] pb-2 mb-6">Berita Terbaru</h2>
        
        <div v-for="news in paginatedNews" :key="news.id" class="relative flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
          <img :src="getImagePath(news.image_url)" alt="Gambar Berita" class="w-32 h-32 object-cover rounded-md mr-4">
          <div class="flex flex-col flex-grow">
            <h3 class="text-xl font-semibold text-[#333]">{{ news.title }}</h3>
            <p class="text-sm text-[#4f4f4f]">{{ news.description.substring(0, 100) }}...</p>
            <span class="text-xs text-[#028a66]">{{ news.category }} • {{ formatDate(news.date) }}</span>
            <router-link :to="`/news/${news.id}`" class="text-[#0090ff] hover:text-[#028a66] text-sm font-medium block mt-2">Baca Selengkapnya</router-link>
          </div>
          
          <!-- Button Share -->
          <div class="absolute top-3 right-3">
            <button @click="toggleShareDropdown(news.id)" class="text-gray-600 text-lg hover:text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>

            <div v-if="showShareDropdown === news.id" class="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
              <button @click="shareNews(news, 'whatsapp')" class="w-full text-left px-4 py-2 text-sm hover:bg-gray-200">WhatsApp</button>
              <button @click="shareNews(news, 'facebook')" class="w-full text-left px-4 py-2 text-sm hover:bg-gray-200">Facebook</button>
              <button @click="shareNews(news, 'twitter')" class="w-full text-left px-4 py-2 text-sm hover:bg-gray-200">Twitter</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar (Rekomendasi dan Popular) -->
      <div>
        <h2 class="text-xl font-bold text-[#028a66] border-b-4 border-[#03a980] pb-2 mb-4">Rekomendasi</h2>
        
        <div v-for="news in paginatedNews.slice(0, 5)" :key="news.id" class="mb-4">
          <router-link :to="`/news/${news.id}`" class="flex items-center">
            <img :src="getImagePath(news.image_url)" alt="Gambar Berita" class="w-20 h-20 object-cover rounded-md mr-3">
            <p class="text-sm font-semibold text-[#333]">{{ news.title }}</p>
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- Pagination -->
    <div class="flex justify-center items-center mt-8 space-x-2">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-[#03a980] text-white rounded-md hover:bg-[#028a66] disabled:opacity-50">Previous</button>
      <button v-for="page in totalPages" :key="page" @click="currentPage = page" class="px-4 py-2 border rounded-md" :class="currentPage === page ? 'bg-[#03a980] text-white' : 'bg-white text-black hover:bg-gray-200'">{{ page }}</button>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-[#03a980] text-white rounded-md hover:bg-[#028a66] disabled:opacity-50">Next</button>
    </div>
  </div>
  <FooterPortal />
</template>

<script>
import FooterPortal from "@/components/FooterPortal.vue";
import NavbarPortalView from "@/components/NavbarPortalView.vue";
import ApiService from "@/service/api.js";

export default {
  components: {
    NavbarPortalView,
    FooterPortal
  },
  data() {
    return {
      searchQuery: "",
      selectedCategory: "",
      categories: ["Politik", "Olahraga", "Teknologi", "Nasional", "Internasional"],
      newsList: [],
      showShareDropdown: null,
      currentPage: 1,
      itemsPerPage: 5
    };
  },
  computed: {
    filteredNews() {
      return this.newsList.filter(news =>
        news.title.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
        (this.selectedCategory ? news.category === this.selectedCategory : true)
      );
    },
    paginatedNews() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredNews.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.filteredNews.length / this.itemsPerPage);
    }
  },
  mounted() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      ApiService.getNews()
        .then(response => {
          this.newsList = response.data.data;
        })
        .catch(error => {
          console.error("Gagal mengambil data berita:", error);
        });
    },
    getImagePath(imgPath) {
      return imgPath ? `http://192.168.1.11:5000${imgPath}` : "https://via.placeholder.com/150";
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });
    },
    toggleShareDropdown(newsId) {
      this.showShareDropdown = this.showShareDropdown === newsId ? null : newsId;
    },
    shareNews(news, platform) {
      const url = `${window.location.origin}/news/${news.id}`;
      const shareUrl = platform === "whatsapp" ? `https://api.whatsapp.com/send?text=${encodeURIComponent(news.title + " - " + url)}`
                      : platform === "facebook" ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
                      : `https://twitter.com/intent/tweet?text=${encodeURIComponent(news.title)}&url=${encodeURIComponent(url)}`;
      window.open(shareUrl, "_blank");
    }
  }
};
</script>
