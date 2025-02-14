<template>
  <div class="w-screen bg-gray-100 mt-12">
    <NavbarUser />

    <!-- Content Section -->
    <div class="flex flex-col items-center p-10 bg-gray-100 flex-grow">
      <div class="bg-white w-full max-w-3xl p-6 rounded-lg shadow-lg animate-fadeInUp">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Form Pengaduan</h2>

        <!-- Form Pengaduan -->
        <form @submit.prevent="submitForm" class="space-y-4">
          
          <!-- Kategori Pengaduan -->
          <div>
            <label for="nama" class="block text-sm font-semibold text-[#028a66]">Nama Pengadu</label>
            <input id="nama" v-model="form.nama" type="text" required class="input-field w-full mt-2 focus:ring-2 focus:ring-[#03a980]" placeholder="Nama Pengadu" />
          </div>

          <div>
            <label for="kategori" class="block text-sm font-semibold text-[#028a66]">Kategori Pengaduan</label>
            <select id="kategori" v-model="form.kategori" required class="input-field w-full mt-2 focus:ring-2 focus:ring-[#03a980]">
              <option disabled value="">Pilih Kategori Pengaduan</option>
              <option value="Layanan Pendidikan">Layanan Pendidikan</option>
              <option value="Sertifikasi">Sertifikasi</option>
              <option value="Fasilitas">Fasilitas</option>
              <option value="Masalah Administrasi">Masalah Administrasi</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <!-- Judul Pengaduan -->
          <div>
            <label for="judul" class="block text-sm font-semibold text-[#028a66]">Judul Pengaduan</label>
            <input id="judul" v-model="form.judul" type="text" required class="input-field w-full mt-2 focus:ring-2 focus:ring-[#03a980]" placeholder="Judul Pengaduan" />
          </div>

          <!-- Deskripsi Pengaduan -->
          <div>
            <label for="deskripsi" class="block text-sm font-semibold text-[#028a66]">Deskripsi Pengaduan</label>
            <textarea id="deskripsi" v-model="form.deskripsi" required class="input-field w-full mt-2 focus:ring-2 focus:ring-[#03a980]" placeholder="Deskripsi masalah yang dihadapi" rows="4"></textarea>
          </div>

          <!-- Lampiran / Bukti -->
          <div>
            <label for="lampiran" class="block text-sm font-semibold text-[#028a66]">Lampiran / Bukti</label>
            <input id="lampiran" type="file" @change="handleFileUpload" class="input-field w-full mt-2 focus:ring-2 focus:ring-[#03a980]" />
            <p v-if="fileName" class="text-sm text-[#028a66] mt-2">File yang dipilih: {{ fileName }}</p>
          </div>

          <!-- Harapan Penyelesaian -->
          <div>
            <label for="harapan" class="block text-sm font-semibold text-[#028a66]">Harapan Penyelesaian</label>
            <input id="harapan" v-model="form.harapan" type="text" required class="input-field w-full mt-2 focus:ring-2 focus:ring-[#03a980]" placeholder="Harapan penyelesaian pengaduan" />
          </div>

          <!-- Tindak Lanjut -->
          <div>
            <label for="tindakLanjut" class="flex items-center text-sm font-semibold text-[#028a66]">
              <input type="checkbox" v-model="form.tindakLanjut" class="mr-2" />
              Apakah Anda ingin dihubungi untuk tindak lanjut?
            </label>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="w-full bg-[#03a980] text-white p-3 rounded-lg font-semibold hover:bg-[#028a66] transition-all transform hover:scale-105">
            Kirim Pengaduan
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue';
import axios from "axios";

export default {
  components: {
    NavbarUser
  },
  data() {
    return {
      form: {
        nama: '',
        kategori: '',
        judul: '',
        deskripsi: '',
        harapan: '',
        tindakLanjut: false
      },
      fileName: '',
      file: null
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
        this.file = file;
      }
    },
    submitForm() {
      const formData = new FormData();
      formData.append('nama', this.form.nama);
      formData.append('kategori', this.form.kategori);
      formData.append('judul', this.form.judul);
      formData.append('deskripsi', this.form.deskripsi);
      formData.append('harapan', this.form.harapan);
      formData.append('tindakLanjut', this.form.tindakLanjut);

      if (this.file) {
        formData.append('lampiran', this.file);
      }

      // Call the backend API to submit the complaint
      axios.post('http://192.168.1.11:5000/pengaduan', formData)
        .then(response => {
          console.log(response);
          alert("Pengaduan Anda telah dikirimkan.");
          this.$router.push('/'); // Redirect to home page
        })
        .catch(error => {
          console.error("Error:", error.response ? error.response.data : error.message);
          alert("Terjadi kesalahan saat mengirim pengaduan.");
        });
    }
  }
};
</script>

<style scoped>
/* Smooth fade-in animation for form */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out;
}

/* Input field transition */
.input-field {
  @apply p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980];
  transition: all 0.3s ease-in-out;
}

/* Hover animation for button */
button:hover {
  transition: all 0.3s ease-in-out;
}

button:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  /* Make inputs responsive */
  .input-field {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
