<template>
  <div v-if="isMounted" class="w-screen min-h-screen flex flex-col bg-red-100">
    <NavbarLandingPage />

    <!-- Form Container -->
    <div class="flex flex-col items-center p-6 flex-grow mt-10">
      <div class="bg-white w-full max-w-screen-md p-6 rounded-lg shadow-lg animate-fadeInUp">
        <h2 class="text-3xl font-semibold text-red-600 text-center mb-6">Form Pengaduan</h2>
        <form @submit.prevent="submitForm" class="space-y-6">
          <!-- Nama Pengadu -->
          <div class="flex items-center space-x-4 mb-4">
            <label for="nama" class="block text-sm font-semibold text-red-700 w-full sm:w-1/3">Nama Pengadu</label>
            <input id="nama" v-model="form.nama" type="text" required class="input-field w-full sm:w-2/3" placeholder="Nama Pengadu" />
          </div>

          <!-- Email -->
          <div class="flex items-center space-x-4 mb-4">
            <label for="email" class="block text-sm font-semibold text-red-700 w-full sm:w-1/3">Email</label>
            <input id="email" v-model="form.email" type="email" required class="input-field w-full sm:w-2/3" placeholder="Email Anda" />
          </div>

          <!-- Wilayah -->
          <div class="flex items-center space-x-4 mb-4">
            <label for="wilayah" class="block text-sm font-semibold text-red-700 w-full sm:w-1/3">Wilayah/Provinsi</label>
            <input id="wilayah" v-model="form.wilayah" type="text" required class="input-field w-full sm:w-2/3" placeholder="Provinsi Anda" />
          </div>

          <!-- Daerah -->
          <div class="flex items-center space-x-4 mb-4">
            <label for="daerah" class="block text-sm font-semibold text-red-700 w-full sm:w-1/3">Daerah</label>
            <input id="daerah" v-model="form.daerah" type="text" required class="input-field w-full sm:w-2/3" placeholder="Kota atau Kabupaten" />
          </div>

          <!-- Kategori Pengaduan -->
          <div class="flex items-center space-x-4 mb-4">
            <label for="kategori" class="block text-sm font-semibold text-red-700 w-full sm:w-1/3">Kategori Pengaduan</label>
            <select id="kategori" v-model="form.kategori" required class="input-field w-full sm:w-2/3">
              <option disabled value="">Pilih Kategori</option>
              <option value="Layanan Pendidikan">Layanan Pendidikan</option>
              <option value="Sertifikasi">Sertifikasi</option>
              <option value="Fasilitas">Fasilitas</option>
              <option value="Masalah Administrasi">Masalah Administrasi</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <!-- Judul Pengaduan -->
          <div class="flex items-center space-x-4 mb-4">
            <label for="judul" class="block text-sm font-semibold text-red-700 w-full sm:w-1/3">Judul Pengaduan</label>
            <input id="judul" v-model="form.judul" type="text" required class="input-field w-full sm:w-2/3" placeholder="Judul Pengaduan" />
          </div>

          <!-- Deskripsi Pengaduan -->
          <div class="flex items-center space-x-4 mb-4">
            <label for="deskripsi" class="block text-sm font-semibold text-red-700 w-full sm:w-1/3">Deskripsi Pengaduan</label>
            <textarea id="deskripsi" v-model="form.deskripsi" required class="input-field w-full sm:w-2/3" placeholder="Jelaskan pengaduan Anda" rows="4"></textarea>
          </div>

          <!-- Lampiran -->
          <div class="flex items-center space-x-4 mb-4">
            <label for="lampiran" class="block text-sm font-semibold text-red-700 w-full sm:w-1/3">Lampiran / Bukti</label>
            <input id="lampiran" type="file" @change="handleFileUpload" class="input-field w-full sm:w-2/3" />
            <p v-if="fileName" class="text-sm text-red-700 mt-2">File yang dipilih: {{ fileName }}</p>
          </div>

          <!-- Harapan Penyelesaian -->
          <div class="flex items-center space-x-4 mb-4">
            <label for="harapan" class="block text-sm font-semibold text-red-700 w-full sm:w-1/3">Harapan Penyelesaian</label>
            <input id="harapan" v-model="form.harapan" type="text" required class="input-field w-full sm:w-2/3" placeholder="Harapan Penyelesaian" />
          </div>

          <!-- Tindak Lanjut -->
          <div class="flex items-center space-x-4 mb-4">
            <input type="checkbox" id="tindakLanjut" v-model="form.tindakLanjut" class="mr-2" />
            <label for="tindakLanjut" class="text-sm font-semibold text-red-700">Apakah Anda ingin dihubungi untuk tindak lanjut?</label>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="w-full bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition-transform transform hover:scale-105">
            Kirim Pengaduan
          </button>
        </form>
      </div>
    </div>

    <FooterLandingPage />
  </div>
</template>

<script>
import NavbarLandingPage from '@/components/NavbarLandingPage.vue';
import FooterLandingPage from '@/components/FooterLandingPage.vue';

export default {
  components: {
    NavbarLandingPage,
    FooterLandingPage
  },
  data() {
    return {
      isMounted: false,
      form: {
        nama: '',
        email: '',
        wilayah: '',
        daerah: '',
        kategori: '',
        judul: '',
        deskripsi: '',
        harapan: '',
        tindakLanjut: false,
      },
      file: null,
      fileName: '',
    };
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    handleFileUpload(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.file = selectedFile;
        this.fileName = selectedFile.name;
      }
    },
    async submitForm() {
      if (!this.validateForm()) {
        alert('Mohon lengkapi semua data dengan benar!');
        return;
      }
      
      const formData = new FormData();
      Object.keys(this.form).forEach(key => {
        formData.append(key, this.form[key]);
      });
      if (this.file) {
        formData.append('lampiran', this.file);
      }
      
      try {
        const response = await fetch('', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          alert('Pengaduan berhasil dikirim!');
          this.resetForm();
        } else {
          alert('Terjadi kesalahan, silakan coba lagi.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Gagal mengirim pengaduan.');
      }
    },
    validateForm() {
      return (
        this.form.nama &&
        this.form.email &&
        this.form.wilayah &&
        this.form.daerah &&
        this.form.kategori &&
        this.form.judul &&
        this.form.deskripsi &&
        this.form.harapan
      );
    },
    resetForm() {
      this.form = {
        nama: '',
        email: '',
        wilayah: '',
        daerah: '',
        kategori: '',
        judul: '',
        deskripsi: '',
        harapan: '',
        tindakLanjut: false,
      };
      this.file = null;
      this.fileName = '';
    }
  }
};
</script>

<style scoped>
.input-field {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.375rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #f87171;
}

button:hover {
  background-color: #dc2626;
}

.animate-fadeInUp {
  animation: fadeInUp 0.5s ease-in-out;
}

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
</style>
