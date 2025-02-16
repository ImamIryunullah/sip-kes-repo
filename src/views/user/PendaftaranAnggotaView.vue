<template>
  <div class="w-screen h-screen flex flex-col mt-5">
    <!-- Navbar -->
    <NavbarUser />

    <div class="flex flex-col items-center p-10 bg-gray-100 flex-grow mt-10">
      <div class="bg-white w-full max-w-2xl p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Pendaftaran Anggota</h2>

        <!-- Form Pendaftaran -->
        <form @submit.prevent="submitPendaftaran">
          <div class="grid grid-cols-1 gap-4">
            <input v-model="userData.nama" type="text" placeholder="Nama Lengkap" class="input-field" required />
            <input v-model="userData.nik" type="text" placeholder="NIK" class="input-field" required />
            <input v-model="userData.noTelepon" type="text" placeholder="Nomor Telepon" class="input-field" required />
            <input v-model="userData.email" type="email" placeholder="Email" class="input-field" required />
            
            <!-- Pilih untuk Daftar Provinsi atau Kota/Kabupaten -->
            <select v-model="userData.tipeuser" class="input-field" required>
              <option disabled value="">Pilih Tipe user</option>
              <option value="Provinsi">Provinsi</option>
              <option value="Kota/Kabupaten">Kota/Kabupaten</option>
            </select>

            <!-- Provinsi -->
            <select v-if="userData.tipeuser === 'Provinsi'" v-model="userData.provinsi" class="input-field" required>
              <option disabled value="">Pilih Provinsi</option>
    -->
              <option v-for="provinsi in provinces" :key="provinsi.id_wilayah" :value="provinsi.nama_wilayah">
                {{ provinsi.nama_wilayah || 'No Name Available' }}
              </option>
            </select>
            <select v-if="userData.tipeuser === 'Kota/Kabupaten'" v-model="userData.kotaKabupaten" class="input-field" required>
              <option disabled value="">Pilih Kota/Kabupaten</option>
              <option value="Kota Malang">Kota Malang</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Gresik">Gresik</option>
            </select>
            <select v-model="userData.jabatan" class="input-field" required>
              <option disabled value="">Pilih Jabatan LPKNI</option>
              <option v-for="jabatan in jabatanOptions" :key="jabatan" :value="jabatan">{{ jabatan }}</option>
            </select>

            <input v-model="userData.alamat" type="text" placeholder="Alamat Lengkap" class="input-field" required />
            
            <!-- Upload Foto 3x4 -->
            <label class="text-sm text-gray-600">Upload Foto 3x4:</label>
            <input type="file" @change="handleFoto3x4Upload" class="input-field" required />

            <!-- Upload Foto KTP -->
            <label class="text-sm text-gray-600">Upload Foto KTP:</label>
            <input type="file" @change="handleKtpUpload" class="input-field" required />

            <button type="submit" class="mt-6 w-full bg-[#03a980] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#028a66] transition">
              Ajukan Pendaftaran
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue';
import ApiService from '@/service/api.js'; // Import the API service

export default {
  components: {
    NavbarUser
  },
  data() {
    return {
      userData: {
        nama: "",
        nik: "",
        noTelepon: "",
        email: "",
        tipeuser: "",
        provinsi: "",
        kotaKabupaten: "",
        jabatan: "",
        alamat: "",
        foto3x4: null,
        fotoKtp: null,
      },
      jabatanProvinsi: [
        "Staf Ahli / Komisioner",
        "Sekretariat",
        "Direktorat, pendidikan, latihan, SDM & LPKSM",
        "Direktorat BPSK",
        "Perhimpunan Driver Online Indonesia (PDOI)",
        "Direktorat Pengawasan Makanan dan Obat",
        "Direktorat Pengawasan bank, finance dan koperasi",
        "Direktorat media & komunikasi (suara konsumen)",
        "Direktorat standarisasi warung & sertifikasi",
        "Perhimpunan Bekam Nasional Indonesia (PBNI)"
      ],
      jabatanKotaKabupaten: [
        "Staf Ahli / Komisioner",
        "Sekretariat",
        "Biro Pendidikan, Latihan, SDM & LPKSM",
        "Biro BPSK",
        "Perhimpunan Driver Online Indonesia (PDOI)",
        "Lembaga Bantuan Hukum Nasional Indonesia (LBH-NI)",
        "Biro Pengawasan Makanan dan Obat",
        "Biro Pengawasan Bank Finance & Koperasi",
        "Biro media & komunikasi (suara konsumen)",
        "Biro Standarisasi Warung & Sertifikasi",
        "Perhimpunan Bekam Nasional Indonesia (PBNI)"
      ],
      provinces: [], // To store the list of provinces
      isLoading: false // Adding loading state
    };
  },
  computed: {
    jabatanOptions() {
      if (this.userData.tipeuser === 'Provinsi') {
        return this.jabatanProvinsi;
      } else if (this.userData.tipeuser === 'Kota/Kabupaten') {
        return this.jabatanKotaKabupaten;
      } else {
        return [];
      }
    }
  },
  mounted() {
    this.fetchWilayah(); // Fetch provinces when component is mounted
  },
  methods: {
    handleFoto3x4Upload(event) {
      const file = event.target.files[0];
      if (file) {
        this.userData.foto3x4 = file;
      }
    },
    handleKtpUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.userData.fotoKtp = file;
      }
    },

    async fetchWilayah() {
      try {
        const response = await ApiService.getWilayah(); // Fetching the list of provinces
        console.log(response.data); // Log the data to check if it is structured as expected
        if (Array.isArray(response.data)) {
          this.provinces = response.data; // No need to map if it's already an array
        } else if (response.data && response.data.data) {
          // If response.data contains a 'data' key with the provinces array
          this.provinces = response.data.data;
        } else {
          console.error("Unexpected response structure:", response.data);
          alert("Unexpected response format from the server.");
        }
      } catch (error) {
        console.error("Error fetching wilayah:", error);
        alert("Terjadi kesalahan saat mengambil data wilayah.");
      }
    },


    async submitPendaftaran() {
      this.isLoading = true; // Set loading to true while submitting
      const formData = new FormData();
      formData.append("nama", this.userData.nama);
      formData.append("nik", this.userData.nik);
      formData.append("noTelepon", this.userData.noTelepon);
      formData.append("email", this.userData.email);
      formData.append("tipePendaftaran", this.userData.tipePendaftaran);
      formData.append("provinsi", this.userData.provinsi);
      formData.append("kotaKabupaten", this.userData.kotaKabupaten);
      formData.append("jabatan", this.userData.jabatan);
      formData.append("alamat", this.userData.alamat);
      formData.append("foto3x4", this.userData.foto3x4);
      formData.append("fotoKtp", this.userData.fotoKtp);

      try {
        // Send the form data to the server
        await ApiService.submitPendaftaran(formData);
        this.$router.push({ name: 'success' }); // Redirect to success page
      } catch (error) {
        console.error("Pendaftaran failed:", error);
        alert("Pendaftaran gagal. Silakan coba lagi.");
      } finally {
        this.isLoading = false; // Set loading to false after submission
      }
    }
  }
};
</script>

<style scoped>
.input-field {
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
}

input[type="file"] {
  padding: 6px;
}

button {
  font-size: 16px;
  transition: background-color 0.3s;
}
</style>
