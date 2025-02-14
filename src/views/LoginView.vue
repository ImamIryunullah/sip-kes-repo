<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gray-100">
    <div class="main-container w-[1700px] h-[750px] bg-white relative overflow-hidden shadow-lg rounded-lg flex">
      <!-- Bagian Kiri (Form Login) -->
      <div class="w-1/2 h-full flex flex-col justify-center items-center px-8">
        <img src="@/assets/logoswi.png" alt="SWI Logo" class="absolute top-6 w-24 h-auto" />
        <h2 class="text-2xl font-semibold text-[#03a980] mb-2">Login Sekarang!!</h2>
        <p class="text-sm text-gray-500 mb-4">Silakan masukkan kredensial Anda</p>

        <div class="w-[80%] max-w-md">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="input-field"
            required
          />
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="input-field"
            required
          />

          <!-- Error message -->
          <p v-if="errorMessage" class="text-red-500 text-sm text-center mt-2">{{ errorMessage }}</p>

          <a href="/lupapassword" class="text-[#03a980] text-sm mb-3 block text-center">Lupa password?</a>

          <button
            @click="submitForm"
            class="w-full h-10 bg-[#03a980] text-white font-bold rounded-lg hover:bg-[#028a66] transition"
            :disabled="loading"
          >
            {{ loading ? 'Loading...' : 'MASUK' }}
          </button>

          <p class="mt-4 text-sm text-gray-500">
            Don't have an account?
            <router-link to="/register" class="text-[#03a980] font-semibold hover:underline">Register here</router-link>
          </p>
        </div>
      </div>

      <!-- Bagian Kanan (Gambar) -->
      <div class="w-1/2 h-full bg-[#03a980] rounded-l-[40px] flex flex-col justify-center items-center text-white">
        <div class="w-[80%] h-[90%] flex flex-col items-center">
          <div class="w-full h-full bg-[url('./assets/frame229.png')] bg-cover bg-no-repeat"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
  async submitForm() {
    this.errorMessage = "";
    this.loading = true;

    try {
      // Kirim data ke backend tanpa menyertakan token
      await axios.post("http://192.168.1.11:5000/users/login", {
        email: this.email, 
        password: this.password, 
      });

      // Redirect ke halaman profil setelah login berhasil
      alert("Login berhasil!");
      this.$router.push("/profile");
    } catch (error) {
      // Tangani error jika login gagal
      console.error("Error Login:", error);
      this.errorMessage = error.response?.data?.error || "Login gagal. Silakan periksa kredensial Anda.";
    } finally {
      this.loading = false;
    }
  },
  }
};
</script>

<style scoped>
.input-field {
  @apply w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980] mb-3;
}
</style>
