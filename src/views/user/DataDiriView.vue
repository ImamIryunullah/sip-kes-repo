<template>
    <div class="w-screen h-screen flex flex-col bg-gray-100">
      
      <div class="flex flex-col items-center p-6 bg-gray-100 flex-grow mt-10">
        <div class="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md animate-fadeInUp">
          <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Lengkapi Data Diri Anda</h2>
  
          <div class="space-y-6">
            <div>
              <label class="text-sm text-gray-600">Full Name</label>
              <input type="text" v-model="user.fullName" placeholder="John Doe" class="input-field w-full" />
              <!-- <p v-if="errors.fullName" class="text-red-500 text-xs mt-1">Full name is required</p> -->
            </div>
            <div>
              <label class="text-sm text-gray-600">Date of Birth</label>
              <input type="date" v-model="user.dateOfBirth" class="input-field w-full" />
              <!-- <p v-if="errors.dateOfBirth" class="text-red-500 text-xs mt-1">Date of Birth is required</p> -->
            </div>
            <div>
              <label class="text-sm text-gray-600">NIK (National ID Number)</label>
              <input type="text" v-model="user.nik" placeholder="Your NIK" class="input-field w-full" />
              <!-- <p v-if="errors.nik" class="text-red-500 text-xs mt-1">NIK is required</p> -->
            </div>
            <div>
              <label class="text-sm text-gray-600">Province</label>
              <input type="text" v-model="user.province" placeholder="Your Province" class="input-field w-full" />
              <!-- <p v-if="errors.province" class="text-red-500 text-xs mt-1">Province is required</p> -->
            </div>
            <div>
              <label class="text-sm text-gray-600">City/District</label>
              <input type="text" v-model="user.city" placeholder="Your City/District" class="input-field w-full" />
              <!-- <p v-if="errors.city" class="text-red-500 text-xs mt-1">City/District is required</p> -->
            </div>

            <div>
              <label class="text-sm text-gray-600">Address</label>
              <textarea v-model="user.address" placeholder="Your address" class="input-field w-full h-28"></textarea>
              <!-- <p v-if="errors.address" class="text-red-500 text-xs mt-1">Address is required</p> -->
            </div>
  
            
            <div>
              <label class="text-sm text-gray-600">Phone Number</label>
              <input type="text" v-model="user.contactNumber" placeholder="Your phone number" class="input-field w-full" />
              <!-- <p v-if="errors.contactNumber" class="text-red-500 text-xs mt-1">Phone number is required</p> -->
            </div>
  
            
            <div>
              <label class="text-sm text-gray-600">Status</label>
              <select v-model="user.status" class="input-field w-full">
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
              </select>
              <!-- <p v-if="errors.status" class="text-red-500 text-xs mt-1">Status is required</p> -->
            </div>
  
            
            <div>
              <label class="text-sm text-gray-600">Upload KTP Photo</label>
              <input type="file" @change="handleFileUpload" class="input-field w-full" />
              <!-- <p v-if="errors.ktp" class="text-red-500 text-xs mt-1">KTP Photo is required</p> -->
            </div>
  
            
            <div class="mt-6">
              <button @click="saveProfile" class="w-full bg-[#03a980] text-white font-semibold py-3 rounded-lg hover:bg-[#028a66] transition-all duration-300 transform hover:scale-105">
                Save Information
              </button>
            </div>
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
        user: {
          fullName: '',
          dateOfBirth: '',
          nik: '',
          province: '',
          city: '',
          address: '',
          contactNumber: '',
          status: 'single',
          ktp: null
        },
        errors: {
          fullName: false,
          dateOfBirth: false,
          nik: false,
          province: false,
          city: false,
          address: false,
          contactNumber: false,
          status: false,
          ktp: false
        }
      };
    },
    methods: {
      saveProfile() {
        // Reset errors
        this.errors.fullName = !this.user.fullName;
        this.errors.dateOfBirth = !this.user.dateOfBirth;
        this.errors.nik = !this.user.nik;
        this.errors.province = !this.user.province;
        this.errors.city = !this.user.city;
        this.errors.address = !this.user.address;
        this.errors.contactNumber = !this.user.contactNumber;
        this.errors.status = !this.user.status;
        this.errors.ktp = !this.user.ktp;
  
        // If there are any errors, stop the function
        if (Object.values(this.errors).includes(true)) return;
  
        const formData = new FormData();
        formData.append("fullName", this.user.fullName);
        formData.append("dateOfBirth", this.user.dateOfBirth);
        formData.append("nik", this.user.nik);
        formData.append("province", this.user.province);
        formData.append("city", this.user.city);
        formData.append("address", this.user.address);
        formData.append("contactNumber", this.user.contactNumber);
        formData.append("status", this.user.status);
        formData.append("ktp", this.user.ktp);
  
        try {
          axios.put("http://192.168.1.11:5000/users/update", formData);
          alert("Data berhasil disimpan!");
          // Optionally redirect or reset form after saving
        } catch (error) {
          console.error("Error updating profile:", error);
          alert("Gagal menyimpan data.");
        }
      },
  
      handleFileUpload(event) {
        this.user.ktp = event.target.files[0];
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

/* Input field styling */
.input-field {
  @apply p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none;
  transition: all 0.3s ease-in-out;
}

/* Hover animation for button */
button:hover {
  transition: all 0.3s ease-in-out;
}

button:active {
  transform: scale(0.98);
}

/* Make inputs responsive */
@media (max-width: 768px) {
  .input-field {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
  