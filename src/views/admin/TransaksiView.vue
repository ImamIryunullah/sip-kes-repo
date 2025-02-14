<template>
    <NavbarView />
  
    <div class="p-8 mt-[100px]">
      <div class="bg-gray-100 p-6 rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Transaksi</h2>
          <select class="border p-2 rounded">
            <option>Keterangan Pembayaran</option>
            <option>Sudah Dibayar</option>
            <option>Belum Dibayar</option>
          </select>
        </div>
        <table class="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr class="border-b">
              <th class="py-2 px-4 text-left">ID</th>
              <th class="py-2 px-4 text-left">Nama Warung</th>
              <th class="py-2 px-4 text-left">Kode Transaksi</th>
              <th class="py-2 px-4 text-left">Waktu Transaksi</th>
              <th class="py-2 px-4 text-left">Pemasukan Pajak</th>
              <th class="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactionList" :key="transaction.id" class="border-b">
              <td class="py-2 px-4">{{ transaction.id }}</td>
              <td class="py-2 px-4">{{ transaction.storeName }}</td>
              <td class="py-2 px-4">{{ transaction.transactionCode }}</td>
              <td class="py-2 px-4">{{ transaction.transactionDate }}</td>
              <td class="py-2 px-4">Rp{{ transaction.taxIncome }}</td>
              <td class="py-2 px-4 flex gap-2">
                <button @click="deleteTransaction(transaction.id)" class="text-red-500">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarView from '@/components/NavbarView.vue';
  
  export default {
    components: {
      NavbarView,
    },
    data() {
      return {
        transactionList: [
          { id: '001', storeName: 'TRX-001', transactionCode: '002 Obat', transactionDate: '13 - 03 - 2024', taxIncome: '30.000' },
          { id: '002', storeName: 'TRX-002', transactionCode: '005 Elektronik', transactionDate: '14 - 03 - 2024', taxIncome: '50.000' },
          { id: '003', storeName: 'TRX-003', transactionCode: '007 Makanan', transactionDate: '15 - 03 - 2024', taxIncome: '25.000' }
        ],
      };
    },
    methods: {
      deleteTransaction(id) {
        this.transactionList = this.transactionList.filter(transaction => transaction.id !== id);
        alert('Transaksi berhasil dihapus!');
      }
    },
  };
  </script>
  