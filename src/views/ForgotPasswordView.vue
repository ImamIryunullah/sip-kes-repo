<template>
  <div :class="{'dark': isDarkMode}" class="w-screen h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 transition-all duration-500">
    <div class="w-full h-full bg-white dark:bg-gray-800 shadow-lg flex flex-col md:flex-row overflow-hidden rounded-lg transition-all duration-500">
      <!-- Left Section (Hidden on mobile) -->
      <div class="w-full md:w-1/2 h-full bg-[#03a980] rounded-r-[40px] flex flex-col justify-center items-center text-white md:block hidden animate-slideIn transition-all duration-500">
        <div class="w-[60%] h-[80%] relative">
          <div class="w-full h-full bg-[url('./assets/frame229.png')] bg-cover bg-no-repeat transition-all duration-500"></div>
        </div>
        <span class="text-center text-lg font-light px-6 mt-6 transition-all duration-500">
          "Your premier digital library for borrowing and reading books"
        </span>
      </div>
  
      <!-- Right Section (Form) -->
      <div class="flex flex-col justify-center items-center w-full md:w-1/2 px-8 py-6 mt-24">
        <img src="@/assets/logoswi.png" alt="SWI Logo" class="w-24 h-auto mb-6 transition-all duration-500" />
        <h2 class="text-4xl font-semibold text-[#03a980] dark:text-white mb-4 transition-all duration-500">Forgot Password</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6 transition-all duration-500">Please enter your email</p>
  
        <div class="w-full mb-4">
          <input type="email" placeholder="Email" class="w-full h-14 px-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980] transition-all duration-300" />
        </div>
  
        <button class="w-full h-14 bg-[#03a980] text-white font-bold rounded-lg hover:bg-[#028a66] transition-all duration-300 transform hover:scale-105">
          RESET PASSWORD
        </button>
  
        <a href="/login">
          <button class="absolute top-4 right-4 w-24 h-10 border border-[#03a980] text-[#03a980] rounded-lg hover:bg-[#03a980] hover:text-white transition-all duration-300 transform hover:scale-105">
            BACK
          </button>
        </a>
      </div>
    </div>

    <!-- Dark Mode Toggle Button -->
    <button 
      @click="toggleDarkMode" 
      class="absolute top-4 left-4 p-3 bg-gray-700 text-white rounded-full dark:bg-gray-300 transition-all duration-300"
    >
      <span v-if="isDarkMode" class="text-black">🌙</span>
      <span v-else class="text-black">🌞</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out;
}

.animate-slideIn {
  animation: slideIn 1s ease-out;
}
</style>
