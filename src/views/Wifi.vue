<script>
export default {
    name: 'MikrotikLogin'
}
</script>

<template>
    <div
        class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 to-indigo-800 p-4 overflow-hidden">

        <svg class="absolute inset-0 w-full h-screen z-0" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            viewBox="0 0 100 100">
            <defs>
                <pattern id="line-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                    <path d="M 0 0 L 20 20 M 0 20 L 20 0" stroke="rgba(255, 255, 255, 0.05)" stroke-width="0.5" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#line-pattern)" />
        </svg>

        <div class="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8">
            <!-- Left Side: Login Card -->
            <div class="w-full md:w-1/2 max-w-md">
                <!-- Logo and Header -->
                <div class="text-center mb-6 sm:mb-8 px-4">
                    <!-- WiFi Icon in Circle -->
                    <div class="flex justify-center mb-3 sm:mb-4">
                        <div
                            class="p-2 w-16 h-16 bg-purple-800 rounded-full flex items-center justify-center aspect-square">
                            <img src="@/assets/wifi2.png" alt="WiFi Icon" class="w-8 h-8 sm:w-10 sm:h-10" />
                        </div>
                    </div>

                    <!-- Brand Logo -->
                    <div class="flex items-center justify-center flex-wrap gap-2 mb-4">
                        <img src="@/assets/PIONG.png" alt="Piong" class="h-10 sm:h-12 object-contain" />
                        <img src="@/assets/SEJAHTERA.png" alt="Sejahtera" class="h-10 sm:h-12 object-contain" />
                    </div>

                    <!-- Internet Package Highlight -->
                    <div
                        class="bg-gradient-to-r from-purple-700 to-blue-900 p-5 sm:p-6 rounded-2xl shadow-xl text-center max-w-xs sm:max-w-md mx-auto">
                        <p class="text-cyan-400 text-2xl sm:text-3xl font-bold tracking-wide">
                            INTERNET ULTRAFAST
                        </p>
                        <p
                            class="text-white mt-2 sm:mt-3 text-base sm:text-lg font-medium flex items-center justify-center gap-2">
                            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8.53 16.11a6 6 0 016.95 0m-9.9-2.74a10 10 0 0112.86 0m-16.8-2.74a14 14 0 0118.74 0M12 20h.01" />
                            </svg>
                            WIFI DENGAN KECEPATAN TINGGI
                        </p>
                    </div>
                </div>
                <!-- Login Form -->
                <div
                    class="bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 border border-white border-opacity-20">
                    <!-- Tab Selector -->
                    <div class="flex justify-center mb-5 sm:mb-6">
                        <button @click="activeTab = 'userpass'"
                            :class="activeTab === 'userpass' ? activeTabClass : inactiveTabClass">
                            Username
                        </button>
                        <button @click="activeTab = 'voucher'"
                            :class="activeTab === 'voucher' ? activeTabClass : inactiveTabClass">
                            Kode Voucher
                        </button>
                    </div>

                    <!-- Username/Password Form -->
                    <form v-if="activeTab === 'userpass'" @submit.prevent="handleLogin">
                        <div class="mb-4 sm:mb-6">
                            <label for="username"
                                class="block text-white mb-1 sm:mb-2 text-sm sm:text-base">Username</label>
                            <input type="text" id="username" v-model="username" class="form-input"
                                placeholder="Enter your username" required />
                        </div>

                        <div class="mb-4 sm:mb-6">
                            <label for="password"
                                class="block text-white mb-1 sm:mb-2 text-sm sm:text-base">Password</label>
                            <input :type="showPassword ? 'text' : 'password'" id="password" v-model="password"
                                class="form-input" placeholder="Enter your password" required />
                            <div class="flex items-center mt-1 sm:mt-2">
                                <input type="checkbox" id="showPassword" v-model="showPassword" class="mr-2" />
                                <label for="showPassword" class="text-white text-xs sm:text-sm">Show password</label>
                            </div>
                        </div>

                        <button type="submit" :disabled="isLoading" class="form-button">
                            <span v-if="!isLoading">Connect</span>
                            <span v-else class="flex items-center justify-center">
                                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4" />
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Connecting...
                            </span>
                        </button>
                    </form>



                    <!-- Voucher Form -->
                    <form v-else @submit.prevent="handleVoucherLogin">
                        <div class="mb-4 sm:mb-6">
                            <label for="voucher" class="block text-white mb-1 sm:mb-2 text-sm sm:text-base">Kode
                                Voucher</label>
                            <input type="text" id="voucher" v-model="voucherCode" class="form-input"
                                placeholder="Masukkan kode voucher" required />
                        </div>
                        <button type="submit" :disabled="isLoadingVoucher" class="form-button">
                            <span v-if="!isLoadingVoucher">Gunakan Voucher</span>
                            <span v-else class="flex items-center justify-center">
                                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4" />
                                    <path class="opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                </svg>
                                Processing...
                            </span>
                        </button>
                    </form>

                    <div v-if="errorMessage" class="mt-3 sm:mt-4 text-red-300 text-center text-xs sm:text-sm">
                        {{ errorMessage }}
                    </div>
                </div>

                <div class="md:hidden mt-4 flex justify-center">
                    <div class="relative w-40 group">
                        <!-- Gambar dengan efek neon dan hover animasi -->
                        <img src="@/assets/icon2.png" alt="Character" class="w-full h-auto object-contain rounded-lg transition duration-500 ease-in-out transform 
             group-hover:scale-110 group-hover:rotate-1 
             drop-shadow-[0_0_10px_#0ff] group-hover:drop-shadow-[0_0_20px_#f0f]" />

                        <!-- Neon frame / glow aura -->
                        <div class="absolute inset-0 rounded-lg border-2 
                border-cyan-400 animate-pulse blur-md opacity-40 z-[-1]"></div>

                        <!-- Optional: Cyberpunk scanline overlay -->
                        <div class="absolute inset-0 z-10 pointer-events-none 
                bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_50%,transparent_50%)] 
                bg-[length:100%_4px] opacity-20"></div>
                    </div>
                </div>


                <!-- Pricing Packages -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6 mb-3 px-4 sm:px-0">
                    <!-- Harian -->
                    <div class="bg-purple-800 rounded-lg overflow-hidden shadow-lg border border-purple-700 w-full">
                        <div class="bg-fuchsia-600 py-2 px-4 text-center text-white font-medium">
                            Harian
                        </div>
                        <div class="p-4 bg-purple-900 text-white text-center">
                            <p class="text-lg font-semibold">Harian</p>
                            <p>Kuota: Unlimited</p>
                            <p>24 Jam</p>
                            <p class="mt-2 text-pink-400">Rp 5.000,-</p>
                            <a href="https://wa.me/0859171293969">
                                <button
                                    class="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors">
                                    Beli Paket
                                </button>
                            </a>
                        </div>
                    </div>

                    <!-- Mingguan -->
                    <div class="bg-purple-800 rounded-lg overflow-hidden shadow-lg border border-purple-700 w-full">
                        <div class="bg-fuchsia-600 py-2 px-4 text-center text-white font-medium">
                            Mingguan
                        </div>
                        <div class="p-4 bg-purple-900 text-white text-center">
                            <p class="text-lg font-semibold">Mingguan</p>
                            <p>Kuota: Unlimited</p>
                            <p>7 Hari</p>
                            <p class="mt-2 text-pink-400">Rp 20.000,-</p>
                            <a href="https://wa.me/0859171293969">
                                <button
                                    class="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors">
                                    Beli Paket
                                </button>
                            </a>
                        </div>
                    </div>

                    <!-- Bulanan -->
                    <div class="bg-purple-800 rounded-lg overflow-hidden shadow-lg border border-purple-700 w-full">
                        <div class="bg-fuchsia-600 py-2 px-4 text-center text-white font-medium">
                            Bulanan
                        </div>
                        <div class="p-4 bg-purple-900 text-white text-center">
                            <p class="text-lg font-semibold">Bulanan</p>
                            <p>Kuota: Unlimited</p>
                            <p>30 Hari</p>
                            <p class="mt-2 text-pink-400">Rp 50.000,-</p>
                            <a href="https://wa.me/0859171293969">
                                <button
                                    class="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors">
                                    Beli Paket
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                <!-- Internet Speed Info -->
                <div
                    class="mt-6 sm:mt-8 bg-purple-900 rounded-lg p-4 sm:p-5 border border-purple-700 relative overflow-hidden">
                    <!-- Enhanced version matching the image -->
                    <div class="relative z-10">
                        <h2 class="text-white text-base sm:text-lg font-medium mb-1">Nikmati Internet Berkecepatan
                            hingga</h2>
                        <div class="flex items-baseline">
                            <div class="text-white text-4xl sm:text-5xl font-bold">1500</div>
                            <span class="text-white text-base sm:text-lg ml-1">mbps</span>
                        </div>

                        <div class="mt-2 sm:mt-3 mb-2">
                            <div class="flex items-center">
                                <div class="bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">
                                    + STREAMING
                                </div>
                            </div>
                        </div>

                        <div class="text-white mt-3 sm:mt-4 text-sm sm:text-base">
                            <div class="flex items-start mb-2 sm:mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 sm:h-5 sm:w-5 text-fuchsia-400 mr-2 mt-0.5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" />
                                </svg>
                                <span>Kualitas jaringan stabil dan cepat</span>
                            </div>
                            <div class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="h-4 w-4 sm:h-5 sm:w-5 text-fuchsia-400 mr-2 mt-0.5" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path
                                        d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" />
                                </svg>
                                <span>Dukungan pelayanan lokal</span>
                            </div>
                        </div>
                    </div>
                    <!-- Background gradient and effects -->
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 opacity-50"></div>
                    <div
                        class="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-fuchsia-500 rounded-full filter blur-3xl opacity-20">
                    </div>
                    <div
                        class="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-indigo-500 rounded-full filter blur-3xl opacity-20">
                    </div>
                </div>

                <!-- Footer -->
                <div class="mt-4 sm:mt-6 text-center text-white text-xs sm:text-sm">
                    <p>© 2025 PIONG SEJAHTERA - INTERNET BERKECEPATAN TINGGI</p>
                </div>
            </div>


            <div class="mt-60 hidden md:flex md:w-auto justify-center items-center">
                <div class="relative group">
                    <!-- Gambar dengan efek neon dan hover animasi -->
                    <img src="@/assets/icon2.png" alt="Character" class="w-full max-w-md lg:max-w-lg xl:w-[35rem] h-auto object-contain ml-12 
             transition duration-500 ease-in-out transform 
             group-hover:scale-105 
             drop-shadow-[0_0_15px_#0ff] group-hover:drop-shadow-[0_0_30px_#f0f]" />

                    <!-- Neon aura -->
                    <div class="absolute inset-0 rounded-xl border-4 border-purple-400 
                blur-md opacity-40 animate-pulse z-[-1]"></div>

                    <!-- Scanline overlay (optional) -->
                    <div class="absolute inset-0 z-10 pointer-events-none 
                bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_50%,transparent_50%)] 
                bg-[length:100%_4px] opacity-20 rounded-xl"></div>
                </div>
            </div>



        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('userpass')
const username = ref('')
const password = ref('')
const voucherCode = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const handleLogin = () => {
    isLoading.value = true
    errorMessage.value = ''
    // TODO: Handle user/pass login
    setTimeout(() => {
        isLoading.value = false
    }, 1500)
}

const handleVoucherLogin = () => {
    isLoading.value = true
    errorMessage.value = ''
    // TODO: Handle voucher login
    setTimeout(() => {
        isLoading.value = false
    }, 1500)
}

const activeTabClass =
    'px-4 py-2 bg-[#EC00F3] text-white rounded-t-md font-bold'

const inactiveTabClass =
    'px-4 py-2 bg-white bg-opacity-10 text-white border border-white border-opacity-30 rounded-t-md hover:bg-opacity-20'
</script>


<style scoped>
@keyframes fade-in {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.form-input {
    @apply w-full px-4 py-2 rounded bg-white bg-opacity-20 border border-white border-opacity-30 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 text-white placeholder-gray-300;
}

.form-button {
    @apply w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-4 rounded-md hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 font-semibold;
}
</style>
