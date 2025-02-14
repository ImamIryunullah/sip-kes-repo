<template>
  <div class="w-screen h-screen flex flex-col mt-5">
    <!-- Navbar -->
    <NavbarUser />

    <div class="flex flex-col items-center p-10 bg-gray-100 flex-grow mt-10">
      <div class="bg-white w-full max-w-2xl p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Profile</h2>
        
        <!-- Info User -->
        <div class="mt-4 text-center">
          <p class="text-lg font-semibold">{{ user.firstName }} {{ user.lastName }}</p>
          <p class="text-gray-500">{{ user.username }}</p>
          <p class="text-gray-500">{{ user.contactNumber }}</p>
        </div>

        <!-- Tombol Aksi -->
        <div class="mt-6 space-y-4">
          <div class="p-4 bg-white rounded-lg shadow-md flex justify-between items-center cursor-pointer" @click="openEditModal">
            <span>Edit Profile</span>
            <span>&gt;</span>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md flex justify-between items-center cursor-pointer" @click="printIDCard">
            <span>Cetak ID Card</span>
            <span>&gt;</span>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md flex justify-between items-center cursor-pointer">
            <a href="/assets/idcardbelakangprovinsi.png" download>Unduh ID Card Belakang</a>
            <span>&gt;</span>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md flex justify-between items-center cursor-pointer" @click="openChangePasswordModal">
            <span>Ganti Password</span>
            <span>&gt;</span>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md flex justify-between items-center cursor-pointer" @click="logout">
            <span>Logout</span>
            <span>&gt;</span>
          </div>
        </div>
      </div>

      <!-- Modal Edit Profile -->
      <div v-if="isEditModalOpen" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-96">
          <h3 class="text-xl font-semibold text-center mb-4">Edit Profile</h3>
          <div class="grid grid-cols-1 gap-4">
            <div>
              <label class="text-sm text-gray-600">Full Name</label>
              <input type="text" v-model="user.fullName" class="input-field" />
            </div>
            <div>
              <label class="text-sm text-gray-600">Email</label>
              <input type="email" v-model="user.email" class="input-field" disabled />
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <button @click="saveProfile" class="bg-blue-500 text-white px-4 py-2 rounded-lg">Save</button>
            <button @click="closeEditModal" class="bg-gray-400 text-white px-4 py-2 rounded-lg">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarUser from "@/components/NavbarUser.vue";

export default {
  components: {
    NavbarUser,
  },
  data() {
    return {
      user: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
      },
      isEditModalOpen: false,
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    // Fetch user data without token
    async fetchUserData() {
      try {
        const response = await axios.get("http://192.168.1.11:5000/users/${id}");
        this.user = response.data.user || {}; // Handle user data
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Gagal mengambil data pengguna.");
      }
    },
    openEditModal() {
      this.isEditModalOpen = true;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
    },
    // Save profile without token
    async saveProfile() {
      const formData = new FormData();
      formData.append("fullName", this.user.firstName + ' ' + this.user.lastName);

      try {
        await axios.put("http://192.168.1.11:5000/users/update", formData);
        alert("Profil berhasil diperbarui!");
        this.isEditModalOpen = false;
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("Gagal memperbarui profil.");
      }
    },
    logout() {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
      alert("Logout berhasil!");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.input-field {
  @apply w-full p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none;
}
</style>
