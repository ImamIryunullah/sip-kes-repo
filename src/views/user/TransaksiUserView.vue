<template>
  <div class="w-screen h-screen flex flex-col mt-[70px]">
    <NavbarUser />
    <div class="flex flex-col items-center p-6 md:p-10 bg-gray-100 flex-grow">
      <div class="bg-white w-full max-w-xl p-6 md:p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Transaksi Pembayaran</h2>   
        
        <form @submit.prevent="processTransaction">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Nama Pengirim</label>
              <input v-model="namaPengirim" type="text" class="input-field w-full mb-4" placeholder="Masukkan Nama Pengirim" required />

              <label class="block text-sm font-medium text-gray-700">Metode Pembayaran</label>
              <select v-model="selectedPaymentMethod" class="input-field w-full" required>
                <option disabled value="">Pilih Metode Pembayaran</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="E-wallet">E-wallet</option>
                <option value="QRIS">QRIS</option>
              </select>
            </div>       

            <!-- Transfer Bank -->
            <div v-if="selectedPaymentMethod === 'Transfer Bank'" class="space-y-4">
              <label class="block text-sm font-medium text-gray-700">Bank Tujuan</label>
              <select v-model="selectedBank" class="input-field w-full" required>
                <option disabled value="">Pilih Bank</option>
                <option value="BCA">BCA</option>
                <option value="Mandiri">Mandiri</option>
                <option value="BNI">BNI</option>
                <option value="BRI">BRI</option>
              </select>
              <div v-if="selectedBank">
                <p class="mt-2 text-sm text-gray-700">Nomor Rekening: <strong>{{ dummyAccountNumber }}</strong></p>
                <p class="mt-2 text-sm text-gray-700">Jumlah Transfer: <strong>Rp {{ transferAmount }}</strong></p>
              </div>
              <div class="mt-4">
                <label class="block text-sm font-medium text-gray-700">Upload Bukti Pembayaran</label>
                <input type="file" @change="onFileChange" class="input-field w-full" required />
              </div>
            </div>   

            <!-- E-Wallet -->
            <div v-if="selectedPaymentMethod === 'E-wallet'" class="space-y-4">
              <label class="block text-sm font-medium text-gray-700">Pilih E-Wallet</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <button type="button" @click="selectEwallet('Dana')" class="payment-button flex flex-col items-center">
                  <img src="@/assets/dana.jpg" alt="Dana" class="w-12 h-12" />
                  <span class="text-xs mt-1">Dana</span>
                </button>
                <button type="button" @click="selectEwallet('OVO')" class="payment-button flex flex-col items-center">
                  <img src="@/assets/ovo.png" alt="OVO" class="w-12 h-12" />
                  <span class="text-xs mt-1">OVO</span>
                </button>
                <button type="button" @click="selectEwallet('ShopeePay')" class="payment-button flex flex-col items-center">
                  <img src="@/assets/shopeepay.png" alt="ShopeePay" class="w-12 h-12" />
                  <span class="text-xs mt-1">ShopeePay</span>
                </button>
              </div>
            </div>         

            <!-- QRIS untuk E-Wallet yang dipilih -->
            <div v-if="selectedEwallet" class="space-y-4">
              <label class="block text-sm font-medium text-gray-700">QRIS {{ selectedEwallet }}</label>
              <img :src="qrisImage" :alt="'QRIS ' + selectedEwallet" class="w-full h-auto rounded-lg mb-4" />
            </div>

            <!-- QRIS Standar -->
            <div v-if="selectedPaymentMethod === 'QRIS' && !selectedEwallet" class="space-y-4">
              <label class="block text-sm font-medium text-gray-700">Scan QRIS</label>
              <img src="@/assets/qriscontoh.png" alt="QRIS Code" class="w-full h-auto rounded-lg mb-4" />
            </div>

          </div>
          <button type="submit" class="mt-6 w-full bg-[#03a980] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#028a66] transition">
            Bayar Sekarang
          </button>
        </form> 

        <div v-if="transactionStatus" class="mt-6 text-center">
          <p v-if="transactionStatus === 'success'" class="text-green-500">Pembayaran berhasil! Terima kasih.</p>
          <p v-if="transactionStatus === 'failed'" class="text-red-500">Pembayaran gagal. Silakan coba lagi.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarUser from "@/components/NavbarUser.vue";
export default {
  components: { NavbarUser },
  data() {
    return {
      namaPengirim: "",
      selectedPaymentMethod: "",
      selectedBank: "",
      selectedEwallet: "",
      transactionStatus: null,
      dummyAccountNumber: "123-456-7890",
      transferAmount: "1.000.000",
      selectedFile: null,
    };
  },
  computed: {
    // Mengatur QRIS sesuai dengan e-wallet yang dipilih
    qrisImage() {
      if (this.selectedEwallet === "Dana") return require("@/assets/qris-dana.jpeg");
      if (this.selectedEwallet === "OVO") return require("@/assets/qris-ovo.png");
      if (this.selectedEwallet === "ShopeePay") return require("@/assets/qris-shopeepay.jpeg");
      return "";
    }
  },
  methods: {
    async processTransaction() {
      if (!this.namaPengirim || !this.selectedPaymentMethod) {
        alert("Silakan lengkapi semua data transaksi.");
        return;
      }
      try {
        const response = await this.fakePaymentAPI();
        this.transactionStatus = response.success ? "success" : "failed";
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
        this.transactionStatus = "failed";
      }
    },
    onFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    selectEwallet(wallet) {
      this.selectedEwallet = wallet;
    },
    fakePaymentAPI() {
      return new Promise((resolve) => {
        setTimeout(() => resolve({ success: Math.random() > 0.5 }), 2000);
      });
    },
  },
};
</script>

<style scoped>
.input-field {
  @apply p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#03a980];
}
.payment-button {
  @apply p-3 bg-gray-100 border border-gray-300 rounded-md text-sm font-semibold hover:bg-gray-200 transition;
}
</style>
