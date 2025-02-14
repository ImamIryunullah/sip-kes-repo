<template>
  <div class="w-screen h-screen flex">
    <!-- Left Section (Background) -->
    <div class="w-1/2 h-full bg-[#03a980] rounded-r-[40px] flex flex-col justify-center items-center text-white">
      <div class="w-[80%] h-[50%] relative">
        <img src="@/assets/frame229.png" alt="Illustration" class="w-full h-full object-cover" />
      </div>
      <span class="text-center text-lg font-light px-6 mt-6">
        "Your premier digital library for borrowing and reading books"
      </span>
    </div>

    <!-- Right Section (Form Sign Up) -->
    <div class="w-1/2 h-full flex flex-col justify-center items-center px-20 bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 class="text-4xl font-semibold text-[#03a980] mb-2 mt-2">Sign Up</h2>
      <p class="text-sm text-gray-500 mb-6">Please provide your information to sign up.</p>

      <!-- Sign Up Form -->
      <form @submit.prevent="submitForm" class="w-full max-w-md grid grid-cols-2 gap-4">
        <select v-model="form.jenisPendaftaran" @change="resetForm" class="input-field col-span-2" required>
          <option disabled value="">Pilih Jenis Pendaftaran</option>
          <option value="Daerah">Daerah</option>
          <option value="Wilayah">Wilayah</option>
        </select>
        <input v-model="form.firstName" type="text" placeholder="First Name" class="input-field" required />
        <input v-model="form.lastName" type="text" placeholder="Last Name" class="input-field" required />
        <input v-model="form.contactNo" type="text" placeholder="Contact No" class="input-field" required />
        <input v-model="form.emailUs" type="email" placeholder="Email" class="input-field" required />
        <input v-model="form.username" type="text" placeholder="Username" class="input-field" required />
        <input v-model="form.password" type="password" placeholder="Password" class="input-field" required />

        <!-- Hanya tampil jika memilih Daerah -->
        <select v-if="form.jenisPendaftaran === 'Daerah'" v-model="selectedDaerah" @change="updateWilayah" class="input-field col-span-2" required>
          <option disabled value="">Pilih Daerah</option>
          <option v-for="daerah in daerahList" :key="daerah" :value="daerah">{{ daerah }}</option>
        </select>

        <!-- Hanya tampil jika memilih Daerah -->
        <select v-if="form.jenisPendaftaran === 'Daerah'" v-model="form.wilayah" class="input-field col-span-2" required>
          <option disabled value="">Pilih Wilayah</option>
          <option v-for="wilayah in wilayahList[selectedDaerah]" :key="wilayah" :value="wilayah">{{ wilayah }}</option>
        </select>
      </form>

      <!-- Submit Button -->
      <button @click="submitForm" class="mt-6 w-full bg-[#03a980] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#028a66] transition" :disabled="isFormInvalid">
        SIGN UP
      </button>

      <!-- Link to Sign In -->
      <p class="mt-4 text-sm text-gray-500">
        Already have an account?
        <router-link to="/login" class="text-[#03a980] font-semibold hover:underline">Sign in now</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import ApiService from '@/service/api.js';

export default {
  data() {
    return {
      selectedDaerah: '',
      daerahList: ["NTB", "Jawa Timur", "Sumatera Barat"],
      wilayahList: {
        "NTB": ["Lombok", "Mataram", "Kota Bima"],
        "Jawa Timur": ["Kota Malang", "Surabaya", "Gresik"],
        "Sumatera Barat": ["Padang", "Bukittinggi", "Payakumbuh"]
      },
      form: {
        jenisPendaftaran: '',
        firstName: '',
        lastName: '',
        contactNo: '',
        emailUs: '',
        username: '',
        password: '',
        daerah: '',
        wilayah: '',
      }
    };
  },
  computed: {
    isFormInvalid() {
      return !this.form.jenisPendaftaran || !this.form.firstName || !this.form.lastName || !this.form.contactNo || !this.form.emailUs || !this.form.username || !this.form.password || (this.form.jenisPendaftaran === 'Daerah' && (!this.selectedDaerah || !this.form.wilayah));
    }
  },
  methods: {
    // Reset form saat mengganti jenis pendaftaran
    resetForm() {
      this.selectedDaerah = '';
      this.form.daerah = '';
      this.form.wilayah = '';
    },

    // Method untuk update daftar wilayah saat daerah dipilih
    updateWilayah() {
      this.form.wilayah = '';
    },

    // Submit form ke backend API
    submitForm() {
      const userData = {
        jenisPendaftaran: this.form.jenisPendaftaran,
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        contactNo: this.form.contactNo,
        emailUs: this.form.emailUs,
        username: this.form.username,
        password: this.form.password,
        daerah: this.form.jenisPendaftaran === 'Daerah' ? this.selectedDaerah : '',
        wilayah: this.form.jenisPendaftaran === 'Daerah' ? this.form.wilayah : '',
      };

      ApiService.registerUser(userData)
        .then(() => {
          alert("User successfully registered!");
          this.$router.push("/login");
        })
        .catch(error => {
          console.error(error);
          alert("Registration failed. Please try again.");
        });
    }
  }
};
</script>

<style scoped>
.input-field {
  @apply p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980];
}
</style>
