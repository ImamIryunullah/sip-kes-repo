<template>
  <div :class="{'dark': isDarkMode}" class="w-screen h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
    <div class="main-container w-full sm:w-[100%] md:w-[1700px] h-[750px] bg-white dark:bg-gray-800 relative overflow-hidden shadow-lg rounded-lg flex">
      
      <!-- Left Section (Background) -->
      <div class="hidden md:block w-1/2 h-full bg-[#03a980] rounded-r-[40px] flex flex-col justify-center items-center text-white animate-slideIn">
        <div class="w-[80%] h-[50%] relative">
          <img src="@/assets/frame229.png" alt="Illustration" class="w-full h-full object-cover rounded-lg" />
        </div>
        <span class="text-center text-lg font-light px-6 mt-6">
          "Your premier digital library for borrowing and reading books"
        </span>
      </div>

      <!-- Right Section (Form Sign Up) -->
      <div class="w-full sm:w-full md:w-1/2 h-full flex flex-col justify-center items-center px-8 sm:px-12 md:px-20 bg-white border border-gray-300 rounded-lg shadow-lg animate-fadeIn dark:bg-gray-900 dark:border-gray-600">
        <h2 class="text-4xl font-semibold text-[#03a980] dark:text-white mb-2 mt-2">Sign Up</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Please provide your information to sign up.</p>

        <!-- Sign Up Form -->
        <form @submit.prevent="submitForm" class="w-full max-w-md grid grid-cols-1 md:grid-cols-2 gap-4">
          <input v-model="form.firstName" type="text" placeholder="First Name" class="input-field" required />
          <input v-model="form.lastName" type="text" placeholder="Last Name" class="input-field" required />
          <input v-model="form.contactNo" type="text" placeholder="Contact No" class="input-field" required />
          <input v-model="form.emailUs" type="email" placeholder="Email" class="input-field" required />
          <input v-model="form.password" type="password" placeholder="Password" class="input-field" required />
          <input v-model="form.password" type="password" placeholder="Confirm Password" class="input-field" required />
        </form>

        <!-- Submit Button -->
        <button @click="submitForm" class="mt-6 w-full bg-[#03a980] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#028a66] transition dark:bg-[#028a66] dark:hover:bg-[#03a980]" :disabled="isFormInvalid">
          SIGN UP
        </button>

        <!-- Link to Sign In -->
        <p class="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Already have an account?
          <router-link to="/login" class="text-[#03a980] font-semibold hover:underline dark:text-[#03a980]">Sign in now</router-link>
        </p>
      </div>
    </div>

    <!-- Dark Mode Toggle Button -->
    <button 
      @click="toggleDarkMode" 
      class="absolute top-4 right-4 p-2 bg-gray-700 text-white rounded-full dark:bg-gray-300"
    >
      <span v-if="isDarkMode" class="text-black">🌙</span>
      <span v-else class="text-black">🌞</span>
    </button>
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
      },
      isDarkMode: false, // Dark mode state
    };
  },
  computed: {
    isFormInvalid() {
      return !this.form.jenisPendaftaran || !this.form.firstName || !this.form.lastName || !this.form.contactNo || !this.form.emailUs || !this.form.username || !this.form.password || (this.form.jenisPendaftaran === 'Daerah' && (!this.selectedDaerah || !this.form.wilayah));
    }
  },
  methods: {
    resetForm() {
      this.selectedDaerah = '';
      this.form.daerah = '';
      this.form.wilayah = '';
    },
    updateWilayah() {
      this.form.wilayah = '';
    },
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
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }
};
</script>

<style scoped>
.input-field {
  @apply p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980];
}
</style>
