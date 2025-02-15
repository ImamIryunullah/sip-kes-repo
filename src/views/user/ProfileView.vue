<template>
  <div class="w-full min-h-screen bg-gray-100 pt-20 mb-8">
    <!-- Navbar -->
    <NavbarUser />

    <!-- Content Section -->
    <div class="flex flex-col items-center p-6 flex-grow mt-6">
      <div class="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md animate-fadeInUp">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Your Profile</h2>
        <div class="space-y-6">
          <div class="flex justify-center">
            <div class="relative w-24 h-24 mb-4">
              <img :src="user.profilePicture || defaultImage" alt="Profile Picture" class="w-full h-full object-cover rounded-full border-4 border-[#03a980]" />
              <input type="file" @change="onProfilePictureChange" class="absolute inset-0 opacity-0 cursor-pointer" />
            </div>
          </div>
          <div>
            <p class="text-sm text-gray-600">Full Name:</p>
            <p class="text-lg font-semibold">{{ user.fullName }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Date of Birth:</p>
            <p class="text-lg font-semibold">{{ user.dateOfBirth }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">NIK (National ID Number):</p>
            <p class="text-lg font-semibold">{{ user.nik }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Province:</p>
            <p class="text-lg font-semibold">{{ user.province }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">City/District:</p>
            <p class="text-lg font-semibold">{{ user.city }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Address:</p>
            <p class="text-lg font-semibold">{{ user.address }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-600">Phone Number:</p>
            <p class="text-lg font-semibold">{{ user.contactNumber }}</p>
          </div>
          <div class="mt-6">
            <button @click="openEditModal" class="w-full bg-[#03a980] text-white font-semibold py-3 rounded-lg hover:bg-[#028a66] transition-all duration-300 transform hover:scale-90">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Editing Profile -->
    <div v-if="isModalOpen" class="fixed inset-0 flex justify-center items-center bg-gray-1000 bg-opacity-90 z-50">
      <div class="kelass bg-white w-full sm:w-[500px] p-8 rounded-lg shadow-md animate-fadeInUp mt-12 md:mt-24">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Edit Profile</h2>
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
        profilePicture: null, // Added for profile picture
      },
      isModalOpen: false,
      defaultImage: 'https://www.w3schools.com/howto/img_avatar.png', // Placeholder image URL
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
    },

    onProfilePictureChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.user.profilePicture = reader.result; // Set the image source to the uploaded file
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      }
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

@media (max-width: 768px) {
  /* Adjust the modal for smaller screens */
  .kelass {
    width: 90% !important;
  }

  .w-full {
    width: 100%;
  }
}

</style>
