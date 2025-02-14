<template>
  <div class="w-screen h-screen flex flex-col ">
    <!-- Navbar -->
    <NavbarUser />

    <!-- Content Section -->
    <div class="flex flex-col items-center p-6  flex-grow mt-10">
      <div class="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md animate-fadeInUp">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Your Profile</h2>

        <!-- Profile Information -->
        <div class="space-y-6">
          <!-- Full Name -->
          <div>
            <p class="text-sm text-gray-600">Full Name:</p>
            <p class="text-lg font-semibold">{{ user.fullName }}</p>
          </div>

          <!-- Date of Birth -->
          <div>
            <p class="text-sm text-gray-600">Date of Birth:</p>
            <p class="text-lg font-semibold">{{ user.dateOfBirth }}</p>
          </div>

          <!-- NIK (National ID Number) -->
          <div>
            <p class="text-sm text-gray-600">NIK (National ID Number):</p>
            <p class="text-lg font-semibold">{{ user.nik }}</p>
          </div>

          <!-- Province -->
          <div>
            <p class="text-sm text-gray-600">Province:</p>
            <p class="text-lg font-semibold">{{ user.province }}</p>
          </div>

          <!-- City/District -->
          <div>
            <p class="text-sm text-gray-600">City/District:</p>
            <p class="text-lg font-semibold">{{ user.city }}</p>
          </div>

          <!-- Address -->
          <div>
            <p class="text-sm text-gray-600">Address:</p>
            <p class="text-lg font-semibold">{{ user.address }}</p>
          </div>

          <!-- Phone Number -->
          <div>
            <p class="text-sm text-gray-600">Phone Number:</p>
            <p class="text-lg font-semibold">{{ user.contactNumber }}</p>
          </div>

          <!-- Status -->
          <div>
            <p class="text-sm text-gray-600">Status:</p>
            <p class="text-lg font-semibold">{{ user.status }}</p>
          </div>

          <!-- KTP Photo -->
          <div>
            <p class="text-sm text-gray-600">KTP Photo:</p>
            <p class="text-lg font-semibold">{{ user.ktp ? "Uploaded" : "Not Uploaded" }}</p>
          </div>

          <!-- Edit Profile Button -->
          <div class="mt-6">
            <button @click="openEditModal" class="w-full bg-[#03a980] text-white font-semibold py-3 rounded-lg hover:bg-[#028a66] transition-all duration-300 transform hover:scale-105">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Editing Profile -->
    <div v-if="isModalOpen" class="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div class="bg-white w-full sm:w-[500px] p-8 rounded-lg shadow-md animate-fadeInUp">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Edit Profile</h2>

        <!-- Form to Edit Profile -->
        <div class="space-y-4">
          <div>
            <label class="text-sm text-gray-600">Full Name:</label>
            <input v-model="user.fullName" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]" />
          </div>

          <div>
            <label class="text-sm text-gray-600">Date of Birth:</label>
            <input v-model="user.dateOfBirth" type="date" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]" />
          </div>

          <div>
            <label class="text-sm text-gray-600">NIK:</label>
            <input v-model="user.nik" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]" />
          </div>

          <div>
            <label class="text-sm text-gray-600">Province:</label>
            <input v-model="user.province" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]" />
          </div>

          <div>
            <label class="text-sm text-gray-600">City/District:</label>
            <input v-model="user.city" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]" />
          </div>

          <div>
            <label class="text-sm text-gray-600">Address:</label>
            <input v-model="user.address" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]" />
          </div>

          <div>
            <label class="text-sm text-gray-600">Phone Number:</label>
            <input v-model="user.contactNumber" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]" />
          </div>

          <div>
            <label class="text-sm text-gray-600">Status:</label>
            <input v-model="user.status" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]" />
          </div>

          <div class="flex justify-between items-center mt-6">
            <button @click="closeEditModal" class="w-[48%] bg-gray-300 text-black font-semibold py-3 rounded-lg hover:bg-gray-400 transition-all duration-300">
              Cancel
            </button>
            <button @click="saveProfile" class="w-[48%] bg-[#03a980] text-white font-semibold py-3 rounded-lg hover:bg-[#028a66] transition-all duration-300">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue';

export default {
  components: {
    NavbarUser
  },

  data() {
    return {
      user: {
        fullName: 'John Doe',
        dateOfBirth: '1990-01-01',
        nik: '1234567890123456',
        province: 'Jawa Barat',
        city: 'Bandung',
        address: 'Jl. Merdeka No. 123',
        contactNumber: '081234567890',
        status: 'Single',
        ktp: true
      },
      isModalOpen: false,
    };
  },

  methods: {
    openEditModal() {
      this.isModalOpen = true;
    },

    closeEditModal() {
      this.isModalOpen = false;
    },

    saveProfile() {
      alert("Profile updated successfully!");
      this.closeEditModal();
    }
  }
};
</script>

<style scoped>
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
</style>
