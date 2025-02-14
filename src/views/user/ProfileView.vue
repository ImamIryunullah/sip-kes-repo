<template>
  <div class="w-screen h-screen flex flex-col bg-gray-100">
    <!-- Navbar -->
    <NavbarUser />

    <!-- Content Section -->
    <div class="flex flex-col items-center p-6 bg-gray-100 flex-grow mt-10">
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
      }
    };
  },
  methods: {
    openEditModal() {
      // Open the edit modal for user to update the profile
      alert("Edit Profile functionality to be implemented.");
    }
  }
};
</script>

<style scoped>
/* Fade-in animation for the page */
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
