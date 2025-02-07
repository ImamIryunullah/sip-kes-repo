<template>
  <div class="admin-signin">
    <h1>Masuk Admin</h1>
    <p>Silakan masukkan kredensial Anda untuk masuk</p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email_admin">Email</label>
        <input type="email" id="email_admin" v-model="email_admin" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <a href="#" class="forgot-password">Lupa password?</a>
      <button type="submit" class="submit-button">MASUK</button>
    </form>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
    <div class="signup-link">
      <p>Belum punya akun? <a href="AdminSignUpView.vue">DAFTAR</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email_admin: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch("http://localhost:8080/login-admin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.email_admin,
            password: this.password,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Login gagal, coba lagi.");
        }

        alert("Login berhasil!");
        localStorage.setItem("admin", JSON.stringify(data.admin));
        this.$router.push("/dashboard");
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
  },
};
</script>
