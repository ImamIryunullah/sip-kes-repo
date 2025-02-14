<template>
    <div class="w-screen h-screen flex flex-col mt-12">
      <NavbarPusat />
    
      <!-- Main Content Section -->
      <div class="flex flex-col items-center p-10 bg-gray-100 flex-grow">
        <div class="bg-white w-full max-w-6xl p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Daftar Transaksi Pengguna</h2>
  
          <!-- Tabel untuk menampilkan transaksi -->
          <div v-if="transactions.length > 0" class="overflow-x-auto">
            <table class="min-w-full table-auto border-collapse mx-auto text-lg">
              <thead class="bg-[#028a66] text-white">
                <tr>
                  <th class="px-6 py-4 text-left">Nama Pengguna</th>
                  <th class="px-6 py-4 text-left">Jumlah Pembayaran</th>
                  <th class="px-6 py-4 text-left">Metode Pembayaran</th>
                  <th class="px-6 py-4 text-left">Status Transaksi</th>
                  <th class="px-6 py-4 text-left">Tanggal Transaksi</th>
                  <th class="px-6 py-4 text-left">Bukti Transaksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(transaction, index) in transactions" :key="index" class="border-b hover:bg-gray-100">
                  <td class="px-6 py-4">{{ transaction.userName }}</td>
                  <td class="px-6 py-4">{{ transaction.amount }}</td>
                  <td class="px-6 py-4">{{ transaction.paymentMethod }}</td>
                  <td class="px-6 py-4">
                    <span :class="getTransactionStatusClass(transaction.status)">
                      {{ transaction.status }}
                    </span>
                  </td>
                  <td class="px-6 py-4">{{ transaction.date }}</td>
                  <td class="px-6 py-4">
                    <a :href="transaction.proofUrl" target="_blank" class="text-blue-500 hover:underline">
                      Lihat Bukti Transaksi
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <!-- Jika tidak ada transaksi -->
          <div v-else class="text-center text-gray-500">
            Belum ada transaksi yang diproses.
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarPusat from '@/components/NavbarPusat.vue';
  
  export default {
    components: {
      NavbarPusat
    },
    data() {
      return {
        transactions: [
          {
            userName: "John Doe",
            amount: 500000,
            paymentMethod: "Transfer Bank",
            status: "Berhasil",
            date: "2023-08-01",
            proofUrl: "/assets/proof_1.jpg" // URL bukti transaksi
          },
          {
            userName: "Jane Smith",
            amount: 300000,
            paymentMethod: "Kartu Kredit",
            status: "Gagal",
            date: "2023-08-02",
            proofUrl: "/assets/proof_2.jpg" // URL bukti transaksi
          }
        ]
      };
    },
    methods: {
      getTransactionStatusClass(status) {
        switch (status) {
          case 'Berhasil':
            return 'text-green-500';
          case 'Gagal':
            return 'text-red-500';
          case 'Diproses':
            return 'text-yellow-500';
          default:
            return 'text-gray-500';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling untuk tabel dan tampilan umum */
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 16px;
  }
  
  th {
    background-color: #028a66;
    color: white;
  }
  
  td {
    border-bottom: 1px solid #ddd;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
  
  button {
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 8px;
  }
  
  button:hover {
    cursor: pointer;
  }
  
  button + button {
    margin-left: 12px;
  }
  </style>
  