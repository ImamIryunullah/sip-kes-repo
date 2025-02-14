<template>
  <div class="w-full min-h-screen bg-gray-100 pt-20 mb-8 overflow-x-hidden">
    <!-- Navbar -->
    <NavbarPusat />

    <!-- Filter Waktu (Dropdown) -->
    <div class="flex justify-center mt-6">
      <select
        v-model="activeFilter"
        @change="setActiveFilter(activeFilter)"
        class="px-4 py-2 text-sm font-semibold bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980] w-full sm:w-1/3"
      >
        <option v-for="filter in filters" :key="filter" :value="filter">
          {{ filter }}
        </option>
      </select>
    </div>

    <!-- Ringkasan Keuangan -->
    <div class="flex justify-center mt-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full sm:w-[90%] md:w-[80%] custom-kansaja">
        <!-- Ringkasan Pemasukan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">Ringkasan Pemasukan</h3>
          <p class="text-gray-500 text-sm">Terakhir diperbarui 4 Feb 10:00 AM</p>
          <h2 class="text-2xl font-bold text-black mt-2">Rp12.000.000</h2>
          <p class="text-gray-500 text-sm">Pemasukan dalam {{ activeFilter }} terakhir</p>
          <LineChart :chartData="chartData" />
        </div>

        <!-- Ringkasan Pengeluaran -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">Ringkasan Pengeluaran</h3>
          <p class="text-gray-500 text-sm">Terakhir diperbarui 4 Feb 10:00 AM</p>
          <h2 class="text-2xl font-bold text-black mt-2">Rp9.500.000</h2>
          <p class="text-gray-500 text-sm">Pengeluaran dalam {{ activeFilter }} terakhir</p>
          <LineChart :chartData="chartData" />
        </div>
      </div>
    </div>
    <!-- Grafik Perbulan & Pertahun -->
    <div class="flex justify-center mt-3">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full sm:w-[90%] md:w-[80%]">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">Pendapatan Perbulan</h3>
          <LineChart :chartData="monthlyData" />
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">Pendapatan Pertahun</h3>
          <LineChart :chartData="yearlyData" />
        </div>
      </div>
    </div>
    <!-- Riwayat Transaksi -->
    <div class="flex justify-center mt-">
      <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-[90%] md:w-[80%]">
        <h3 class="text-lg font-semibold mb-4">Riwayat Transaksi</h3>

        <!-- Filter Transaksi -->
        <div class="flex flex-col sm:flex-row justify-between mb-4">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Cari transaksi..."
            class="w-full sm:w-1/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a980] mb-4 sm:mb-0"
          />
          <select v-model="selectedCategory" class="w-full sm:w-1/3 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#03a980]">
            <option value="">Semua Kategori</option>
            <option v-for="category in transactionCategories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>

        <!-- Tabel Riwayat -->
        <table class="w-full table-auto border-collapse border border-gray-300">
          <thead class="bg-[#03a980] text-white">
            <tr>
              <th class="py-2 px-4 border">Tanggal</th>
              <th class="py-2 px-4 border">Deskripsi</th>
              <th class="py-2 px-4 border">Kategori</th>
              <th class="py-2 px-4 border">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in filteredTransactions" :key="transaction.id" class="border">
              <td class="py-2 px-4">{{ transaction.date }}</td>
              <td class="py-2 px-4">{{ transaction.description }}</td>
              <td class="py-2 px-4">{{ transaction.category }}</td>
              <td class="py-2 px-4 font-semibold" :class="getAmountClass(transaction.amount)">
                {{ formatCurrency(transaction.amount) }}
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Jika Tidak Ada Transaksi -->
        <p v-if="filteredTransactions.length === 0" class="text-center text-gray-500 mt-4">
          Tidak ada transaksi yang sesuai dengan filter.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// The same script as provided earlier
</script>

<style scoped>
/* Ensure no horizontal scroll */
body, html {
  overflow-x: hidden;
}

/* Responsive Layout Adjustments */
@media (max-width: 768px) {
  .text-lg {
    font-size: 14px;
  }

  .custom-kansaja {
    width: 100% !important;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .w-full {
    width: 100% !important;
  }

  table {
    font-size: 14px;
  }

  th, td {
    padding: 12px 8px;
  }

  .w-full.sm\:w-1\/3 {
    width: 100% !important;
  }

}
</style>
