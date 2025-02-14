<template>
  <div class="w-screen h-auto min-h-screen bg-gray-100 pt-20">
    <!-- Navbar -->
    <NavbarView />

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
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-[90%] md:w-[80%] custom-width">
        <!-- Ringkasan Pemasukan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">Ringkasan Pemasukan</h3>
          <p class="text-gray-500 text-sm">Terakhir diperbarui 4 Feb 10:00 AM</p>
          <h2 class="text-2xl font-bold text-black mt-2">Rp12.000.000</h2>
          <p class="text-gray-500 text-sm">Penjualan kotor dalam {{ activeFilter }} terakhir</p>
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

    <!-- Grafik Perbulan dan Pertahun -->
    <div class="flex justify-center mt-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-[90%] md:w-[80%]">
        <!-- Data Perbulan -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">Pendapatan Perbulan</h3>
          <LineChart :chartData="monthlyData" />
        </div>

        <!-- Data Pertahun -->
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">Pendapatan Pertahun</h3>
          <LineChart :chartData="yearlyData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarView from "@/components/NavbarView.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  components: {
    NavbarView,
    LineChart,
  },
  data() {
    return {
      filters: ["Hari ini", "7 hari terakhir", "28 hari terakhir", "Perbulan", "Pertahun"],
      activeFilter: "7 hari terakhir",
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
      yearlyData: {
        labels: ["2020", "2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: "Pendapatan Tahunan",
            data: [200000000, 220000000, 250000000, 280000000, 310000000],
            borderColor: "#3f51b5",
            backgroundColor: "rgba(63, 81, 181, 0.2)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
    };
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },
  },
};
</script>

<style scoped>
/* Responsif untuk layar kecil */
/* Corrected media queries without using Tailwind's specific class names */
@media (max-width: 768px) {
  .custom-width {
    width: 100% !important;
  }

  .text-lg {
    font-size: 1rem;
  }

  .text-2xl {
    font-size: 1.25rem;
  }

  .font-semibold {
    font-weight: 600;
  }

  .bg-white {
    background-color: #fff;
  }
}

@media (max-width: 1024px) {
  /* Adjust width on medium screens */
  .custom-width {
    width: 90%;
  }
}

</style>
