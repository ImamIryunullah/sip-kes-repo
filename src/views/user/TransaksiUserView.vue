<template>
    <div class="w-screen h-screen flex flex-col mt-12">
      <NavbarUser />
    
      <!-- Main Content Section -->
      <div class="flex flex-col items-center p-10 bg-gray-100 flex-grow">
        <div class="bg-white w-full max-w-xl p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Transaksi Pembayaran</h2>
  
          <!-- Form untuk memasukkan detail transaksi -->
          <form @submit.prevent="processTransaction">
            <div class="space-y-4">
              <div>
                <label for="amount" class="block text-sm font-medium text-gray-700">Jumlah Pembayaran</label>
                <input v-model="amount" id="amount" type="number" placeholder="Masukkan jumlah pembayaran" class="input-field w-full" required />
              </div>
              <div>
                <label for="paymentMethod" class="block text-sm font-medium text-gray-700">Metode Pembayaran</label>
                <select v-model="selectedPaymentMethod" id="paymentMethod" class="input-field w-full" required>
                  <option disabled value="">Pilih Metode Pembayaran</option>
                  <option value="Transfer Bank">Transfer Bank</option>
                  <option value="Kartu Kredit">Kartu Kredit</option>
                  <option value="E-wallet">E-wallet</option>
                </select>
              </div>
            </div>
  
            <!-- Tombol untuk melakukan pembayaran -->
            <button type="submit" class="mt-6 w-full bg-[#03a980] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#028a66] transition">
              Bayar Sekarang
            </button>
          </form>
  
          <!-- Konfirmasi Pembayaran -->
          <div v-if="transactionStatus" class="mt-6 text-center">
            <p v-if="transactionStatus === 'success'" class="text-green-500">Pembayaran berhasil! Terima kasih.</p>
            <p v-if="transactionStatus === 'failed'" class="text-red-500">Pembayaran gagal. Silakan coba lagi.</p>
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
        amount: '', // Jumlah pembayaran
        selectedPaymentMethod: '', // Metode pembayaran yang dipilih
        transactionStatus: null, // Status transaksi (success/failed)
      };
    },
    methods: {
      async processTransaction() {
        // Validasi jika jumlah pembayaran dan metode pembayaran dipilih
        if (!this.amount || !this.selectedPaymentMethod) {
          alert("Silakan lengkapi semua data transaksi.");
          return;
        }
  
        // Proses transaksi (ini bisa Anda ganti dengan API call untuk pembayaran)
        try {
          // Misalnya kita akan melakukan API call ke server
          const response = await this.fakePaymentAPI();
  
          // Update status transaksi berdasarkan response dari server
          if (response.success) {
            this.transactionStatus = 'success';
          } else {
            this.transactionStatus = 'failed';
          }
        } catch (error) {
          console.error("Terjadi kesalahan:", error);
          this.transactionStatus = 'failed';
        }
      },
  
      // Fake payment API simulation
      fakePaymentAPI() {
        return new Promise((resolve) => {
          setTimeout(() => {
            const success = Math.random() > 0.5; // 50% chance success
            resolve({ success });
          }, 2000);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling untuk form input dan tombol */
  .input-field {
    @apply p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#03a980];
  }
  
  /* Styling untuk form dan tombol */
  button {
    @apply p-3 bg-[#03a980] text-white rounded-lg font-semibold hover:bg-[#028a66] transition;
  }
  </style>
  