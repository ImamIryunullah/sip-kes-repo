<template>
  <NavbarView />

  <div class="p-8 mt-[90px]">
    <div class="bg-gray-100 p-6 rounded-lg shadow">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Transaksi</h2>
        <select class="border p-2 rounded text-sm">
          <option>Keterangan Pembayaran</option>
          <option>Sudah Dibayar</option>
          <option>Belum Dibayar</option>
        </select>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr class="border-b">
              <th class="py-3 px-4 text-left text-sm font-medium">ID</th>
              <th class="py-3 px-4 text-left text-sm font-medium">Nama</th>
              <th class="py-3 px-4 text-left text-sm font-medium">Waktu Transaksi</th>
              <th class="py-3 px-4 text-left text-sm font-medium">Total</th>
              <th class="py-3 px-4 text-left text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactionList" :key="transaction.id" class="border-b">
              <td class="py-3 px-4 text-sm">{{ transaction.id }}</td>
              <td class="py-3 px-4 text-sm">{{ transaction.Name }}</td>
              <td class="py-3 px-4 text-sm">{{ transaction.transactionDate }}</td>
              <td class="py-3 px-4 text-sm">Rp{{ transaction.taxIncome }}</td>
              <td class="py-3 px-4 text-sm flex gap-2">
                <button @click="deleteTransaction(transaction.id)" class="text-red-500 text-sm">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
        { id: '001', Name: 'ALI1', transactionDate: '13 - 03 - 2024', taxIncome: '30.000' },
        { id: '002', Name: 'ALI2', transactionDate: '14 - 03 - 2024', taxIncome: '50.000' },
        { id: '003', Name: 'ALI3', transactionDate: '15 - 03 - 2024', taxIncome: '25.000' }
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

<style scoped>
/* Responsive Design with Tailwind */
@media screen and (max-width: 768px) {
  /* Make the table scrollable horizontally */
  .overflow-x-auto {
    overflow-x: auto;
  }

  table {
    width: 100%;
    overflow-x: auto;
    display: block;
  }

  /* Adjust font sizes for smaller screens */
  .text-lg {
    font-size: 14px;
  }

  .text-sm {
    font-size: 12px;
  }

  /* Adjust padding and layout for smaller screens */
  .py-3, .px-4 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media screen and (min-width: 769px) {
  /* Desktop specific styling */
  .text-lg {
    font-size: 16px;
  }

  .text-sm {
    font-size: 14px;
  }

  .py-3, .px-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>
