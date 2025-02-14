<template>
  <div class="w-screen h-screen bg-gray-100 pt-20 mb-8">
    <!-- Navbar -->
    <NavbarPusat />

    <!-- Filter Waktu (Dropdown) -->
    <div class="flex justify-center mt-6">
      <select
        v-model="activeFilter"
        @change="setActiveFilter(activeFilter)"
        class="px-4 py-2 text-sm font-semibold bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]"
      >
        <option v-for="filter in filters" :key="filter" :value="filter">
          {{ filter }}
        </option>
      </select>
    </div>

    <!-- Ringkasan Keuangan -->
    <div class="flex justify-center mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[80%] custom-kansaja">
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
    <div class="flex justify-center mt-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] md:w-[80%]">
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
    <div class="flex justify-center mt-10">
      <div class="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[80%]">
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
import NavbarPusat from "@/components/NavbarPusat.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  components: {
    NavbarPusat,
    LineChart,
  },
  data() {
    return {
      filters: ["Hari ini", "7 hari terakhir", "28 hari terakhir", "Perbulan", "Pertahun"],
      activeFilter: "7 hari terakhir",
      searchQuery: "",
      selectedCategory: "",
      transactionCategories: ["Pemasukan", "Pengeluaran"],
      transactions: [
        { id: 1, date: "2024-02-01", description: "Penjualan Produk A", category: "Pemasukan", amount: 5000000 },
        { id: 2, date: "2024-02-03", description: "Pembelian Alat", category: "Pengeluaran", amount: -2000000 },
        { id: 3, date: "2024-02-05", description: "Investasi", category: "Pemasukan", amount: 10000000 },
        { id: 4, date: "2024-02-06", description: "Gaji Karyawan", category: "Pengeluaran", amount: -5000000 },
      ],
      chartData: {
        labels: ["24 Sept", "25 Sept", "26 Sept", "27 Sept", "28 Sept", "29 Sept"],
        datasets: [
          {
            label: "Pendapatan",
            data: [5000000, 8000000, 6000000, 4000000, 12000000, 9000000],
            borderColor: "#03a980",
            backgroundColor: "rgba(3, 169, 128, 0.2)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
      monthlyData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
        datasets: [
          {
            label: "Pendapatan Bulanan",
            data: [15000000, 18000000, 21000000, 25000000, 22000000, 27000000, 30000000, 32000000, 31000000, 28000000, 26000000, 29000000],
            borderColor: "#ff9800",
            backgroundColor: "rgba(255, 152, 0, 0.2)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
    };
  },
  computed: {
    filteredTransactions() {
      return this.transactions.filter(
        (t) =>
          t.description.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
          (this.selectedCategory ? t.category === this.selectedCategory : true)
      );
    },
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
    formatCurrency(amount) {
      return `Rp${Math.abs(amount).toLocaleString()}`;
    },
    getAmountClass(amount) {
      return amount < 0 ? "text-red-500" : "text-green-500";
    },
  },
};
</script>

<style scoped>
/* Responsive */
@media (max-width: 768px) {
  .text-lg {
    font-size: 14px;
  }

  .custom-kansaja {
    width: 100% !important;
  }
  .custom-kansaja {
    width: 100% !important;
  }

  .flex-col {
    flex-direction: column;
  }

  .space-x-4 {
    margin-top: 1rem;
  }

  .text-sm {
    font-size: 12px;
  }

  table {
    width: 100%;
    font-size: 14px;
  }

  th, td {
    padding: 12px 8px;
  }
}
</style>
