<template>
  <div class="w-screen min-h-screen bg-gray-100">
    <!-- Navbar -->
    <NavbarPusat />

    <!-- Filter Kategori -->
    <div class="flex justify-center space-x-4 mt-6">
      <button
        v-for="category in ['Semua', ...categories]"
        :key="category"
        @click="setActiveCategory(category)"
        :class="['px-4 py-2 rounded-full text-sm font-semibold transition', selectedCategory === category ? 'bg-[#03a980] text-white' : 'bg-gray-200 text-gray-700']">
        {{ category }}
      </button>
    </div>

    <!-- Modal Tambah/Edit Berita -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg shadow-lg w-[500px] relative">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-500">✖</button>
        <h2 class="text-lg font-semibold mb-4">{{ isEdit ? 'Edit Berita' : 'Tambah Berita' }}</h2>
        <div class="flex flex-col gap-4">
          <input class="w-full h-[42px] bg-gray-100 border px-4 rounded" v-model="modalNews.title" placeholder="Judul" required />
          <textarea class="w-full h-[100px] bg-gray-100 border px-4 rounded" v-model="modalNews.description" placeholder="Deskripsi" required></textarea>
          <input type="date" class="w-full h-[42px] bg-gray-100 border px-4 rounded" v-model="modalNews.date" required />
          <select v-model="modalNews.category" class="w-full h-[42px] bg-gray-100 border px-4 rounded" required>
            <option disabled value="">Pilih Kategori</option>
            <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
          </select>
          <input type="file" class="w-full h-[42px] bg-gray-100 border px-4 rounded" @change="handleFileChange" />
        </div>
        <div class="flex justify-between items-center mt-6">
          <button @click="closeModal" class="w-[48%] h-[54px] bg-gray-300 rounded-md text-black font-bold">CANCEL</button>
          <button @click="saveNews" class="w-[48%] h-[54px] bg-[#03a980] rounded-md text-white font-bold">
            {{ isEdit ? 'UPDATE' : 'TAMBAH' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Table Daftar Berita -->
    <div class="p-8 mt-[100px]">
      <div class="bg-gray-100 p-6 rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Daftar Berita</h2>
          <button @click="openAddModal" class="bg-[#03a980] text-white px-4 py-2 rounded-md hover:bg-[#028970]">
            ➕ Tambah Berita
          </button>
        </div>
        <table class="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr class="border-b">
              <th class="py-2 px-4 text-left">ID</th>
              <th class="py-2 px-4 text-left">Judul</th>
              <th class="py-2 px-4 text-left">Deskripsi</th>
              <th class="py-2 px-4 text-left">Tanggal Publikasi</th>
              <th class="py-2 px-4 text-left">Kategori</th>
              <th class="py-2 px-4 text-left">Foto</th>
              <th class="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="news in newsList" :key="news.id" class="border-b">
              <td class="py-2 px-4">{{ news.id }}</td>
              <td class="py-2 px-4">{{ news.title }}</td>
              <td class="py-2 px-4">{{ news.description }}</td>
              <td class="py-2 px-4">{{ Date(news.date) }}</td>
              <td class="py-2 px-4 font-semibold text-[#03a980]">{{ news.category }}</td>
              <td class="py-2 px-4 flex flex-col items-center">
                <img v-if="news.image_url" :src="getImage(news.image_url)" alt="Foto Berita" class="w-16 h-16 rounded-md object-cover mb-2" />
              </td>
              <td class="py-2 px-4 flex gap-2">
                <button @click="openEditModal(news)" class="text-blue-500">✏️</button>
                <button @click="deleteNews(news.id)" class="text-red-500">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarPusat from "@/components/NavbarPusat.vue";
import ApiService from "@/service/api.js";

export default {
  components: {
    NavbarPusat,
  },
  data() {
    return {
      categories: ["Politik", "Olahraga", "Teknologi", "Nasional", "Internasional"],
      newsList: [],
      showModal: false,
      isEdit: false,
      modalNews: {
        id: null,
        title: "",
        description: "",
        date: "",
        category: "",
        image_url: null,
      },
      selectedImage: null,
      selectedCategory: "Semua",
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getImage(img){
      return ApiService.getfullpathImage(img)
    },

    getNews() {
      ApiService.getNews()
        .then((response) => {
          this.newsList = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    
    openAddModal() {
      this.isEdit = false;
      this.modalNews = { id: null, title: "", description: "", date: "", category: "", image_url: null };
      this.showModal = true;
    },
    openEditModal(news) {
      this.isEdit = true;
      this.modalNews = { ...news };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    deleteNews(id) {
        if (!confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
            return;
        }

        ApiService.deleteNews(id)
            .then((response) => {
                console.log("Berita berhasil dihapus:", response.data);
                this.getNews(); // Perbarui daftar berita setelah penghapusan
            })
            .catch((error) => {
                console.error("Gagal menghapus berita:", error.response ? error.response.data : error);
            });
    },
    saveNews() {
      const formData = new FormData();
      formData.append("title", this.modalNews.title);
      formData.append("description", this.modalNews.description);
      formData.append("date", this.modalNews.date);
      formData.append("category", this.modalNews.category);
      
      if (this.selectedImage) {
        formData.append("gambar", this.selectedImage);
      }

      console.log("Payload yang dikirim:", [...formData.entries()]); // Debugging

      const action = this.isEdit
        ? ApiService.updateNews(this.modalNews.id, formData) 
        : ApiService.createNews(formData);

      action
        .then((response) => {
          console.log("Response dari backend:", response.data);
          this.getNews(); 
          this.closeModal();
        })
        .catch((error) => {
          console.error("Gagal menyimpan berita:", error.response ? error.response.data : error);
        });
    },
    handleFileChange(event) {
      this.selectedImage = event.target.files[0];
      console.log("File gambar dipilih:", this.selectedImage);
    },
    setActiveCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>
