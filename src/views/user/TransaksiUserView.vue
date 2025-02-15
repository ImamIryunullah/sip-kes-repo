<template>
  <div class="w-screen h-screen flex flex-col mt-12">
    
    <NavbarUser />

    <div class="flex flex-col items-center p-10 bg-gray-100 flex-grow">
      <div class="bg-white w-full max-w-xl p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Transaksi Pembayaran</h2> 
        <form @submit.prevent="processTransaction">
          <div class="space-y-4">
            <div>
              <div class="mt-4">
                <label for="" class="block text-sm font-medium text-gray-700">Masukkan Nama Pengirim</label>
                <input type="text" name="namaPengirim" id="" class="input-field w-full mb-4" placeholder="Masukan Nama Pengirim">
                <label for="" class="block text-sm font-medium text-gray-400 mt-2 mb-1">Silahkan pilih metode pembayaran dibawah ini!</label>
              </div> 
              <label for="paymentMethod" class="block text-sm font-medium text-gray-700">Metode Pembayaran</label>
              <select v-model="selectedPaymentMethod" id="paymentMethod" class="input-field w-full" required>
                <option disabled value="">Pilih Metode Pembayaran</option>
                <option value="Transfer Bank">Transfer Bank</option>
                <option value="E-wallet">E-wallet</option>
                <option value="QRIS">QRIS</option>
              </select>
            </div>
            <div v-if="selectedPaymentMethod === 'Transfer Bank'" class="space-y-4">
              <label class="block text-sm font-medium text-gray-700">Bank Tujuan</label>
              <select v-model="selectedBank" id="bankSelection" class="input-field w-full" required>
                <option disabled value="">Pilih Bank</option>
                <option value="BCA">BCA</option>
                <option value="Mandiri">Mandiri</option>
                <option value="BNI">BNI</option>
                <option value="BRI">BRI</option>
                <option value="Citi Bank">Citi Bank</option>
                <option value="Permata Bank">Permata Bank</option>
              </select>
              <div v-if="selectedBank">
                <p class="mt-2 text-sm text-gray-700">Nomor Rekening Bank: <strong>{{ dummyAccountNumber }}</strong></p>
                <p class="mt-2 text-sm text-gray-700">Jumlah Transfer yang Diminta: <strong>Rp {{ transferAmount }}</strong></p>
              </div>
              <div class="mt-4">
                <label for="paymentProof" class="block text-sm font-medium text-gray-700">Upload Bukti Pembayaran</label>
                <input type="file" id="paymentProof" @change="onFileChange" class="input-field w-full" />
              </div>
            </div>
            <div v-if="selectedPaymentMethod === 'E-wallet'" class="space-y-4">
                <label class="block text-sm font-medium text-gray-700">Pilih E-Wallet</label>
                <div class="flex justify-around">
                  <button type="button" class="payment-button">
                    <img src="@/assets/dana.jpg" alt="Dana" class="payment-button w-8 h-8 mr-2" />
                    Dana
                  </button>
                  <button type="button" class="payment-button">
                    <img src="@/assets/ovo.png" alt="OVO" class="payment-button w-8 h-8 mr-2" />
                    OVO
                  </button>
                  <button type="button" class="payment-button">
                    <img src="@/assets/linkaja.jpg" alt="LinkAja" class="payment-button w-8 h-8 mr-2" />
                    LinkAja
                  </button>
                  <button type="button" class="payment-button">
                    <img src="@/assets/shopeepay.png" alt="ShopeePay" class="payment-button w-8 h-8 mr-2" />
                    ShopeePay
                  </button>
                </div>
              </div>
            <div v-if="selectedPaymentMethod === 'QRIS'" class="space-y-4">
              <label class="block text-sm font-medium text-gray-700">Scan QRIS</label>
              <img src="@/assets/qriscontoh.png" alt="QRIS Code" class="w-full h-auto rounded-lg mb-4" />
              <p class="text-sm text-center text-gray-500">Scan the QR code to complete your payment</p>
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
import NavbarUser from '@/components/NavbarUser.vue';
export default {
  components: {
    NavbarUser
  },
  data() {
    return {
      amount: '',
      selectedPaymentMethod: '', 
      selectedBank: '', 
      transactionStatus: null, 
      bankAccount: '', 
      dummyAccountNumber: '123-456-7890', 
      transferAmount: '1000000', 
      selectedFile: null, 
    };
  },
  methods: {
    async processTransaction() {
      if (!this.amount || !this.selectedPaymentMethod) {
        alert("Silakan lengkapi semua data transaksi.");
        return;
      }
      try {
        const response = await this.fakePaymentAPI();

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
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
      }
    },
    fakePaymentAPI() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const success = Math.random() > 0.5; 
          resolve({ success });
        }, 2000);
      });
    }
  }
};
</script>

<style scoped>

.input-field {
  @apply p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#03a980];
}

button {
  @apply p-3 bg-[#03a980] text-white rounded-lg font-semibold hover:bg-[#028a66] transition;
}

.payment-button {
  @apply p-3 bg-gray-100 border border-gray-300 rounded-md text-sm font-semibold hover:bg-gray-200 transition;
  min-width: 80px;
  text-align: center;
}

.payment-button:hover {
  background-color: #028a66;
  color: white;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
