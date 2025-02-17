<template>
  <div class="bg-green-100 flex">
    <NavbarView />

    <!-- Main Content -->
    <div class="flex-1 min-h- bg-green-100 px-6 md:px-12 lg:px-20 pt-5 mb-12">
      <div class="flex justify-center">
        <select 
          v-model="activeFilter" 
          @change="setActiveFilter(activeFilter)" 
          class="px-4 py-2 text-sm font-semibold bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]"
        >
          <option v-for="filter in filters" :key="filter" :value="filter">{{ filter }}</option>
        </select>
      </div>

      <div class="flex justify-center mt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-[100%] px-4 md:px-0">
          <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 class="text-base md:text-lg font-semibold">Ringkasan Pemasukan</h3>
            <p class="text-gray-500 text-xs md:text-sm">Terakhir diperbarui 4 Feb 10:00 AM</p>
            <h2 class="text-lg md:text-2xl font-bold text-black mt-2">Rp12.000.000</h2>
            <p class="text-gray-500 text-xs md:text-sm">Pemasukan dalam {{ activeFilter }} terakhir</p>
            <div class="mt-4">
              <LineChart :chartData="chartData" />
            </div>
          </div>
          <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 class="text-base md:text-lg font-semibold">Ringkasan Pengeluaran</h3>
            <p class="text-gray-500 text-xs md:text-sm">Terakhir diperbarui 4 Feb 10:00 AM</p>
            <h2 class="text-lg md:text-2xl font-bold text-black mt-2">Rp9.500.000</h2>
            <p class="text-gray-500 text-xs md:text-sm">Pengeluaran dalam {{ activeFilter }} terakhir</p>
            <div class="mt-4">
              <LineChart :chartData="chartData" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-[100%] px-4 md:px-0">
          <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 class="text-base md:text-lg font-semibold">Pendapatan Perbulan</h3>
            <div class="mt-4">
              <LineChart :chartData="monthlyData" />
            </div>
          </div>
          <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 class="text-base md:text-lg font-semibold">Pendapatan Pertahun</h3>
            <div class="mt-4">
              <LineChart :chartData="yearlyData" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.vue';
import NavbarView from '@/components/NavbarView.vue';

export default {
  components: {
    LineChart,
    NavbarView
  },
  data() {
    return {
      filters: ["Hari ini", "7 hari terakhir", "28 hari terakhir", "Perbulan", "Pertahun"],
      activeFilter: "7 hari terakhir",
      chartData: {},
      monthlyData: {},
      yearlyData: {},
    };
  },
  methods: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
      this.fetchData();
    },
    async fetchData() {
      try {
        // Simulasi Fake API
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              daily: { labels: ["1 Feb", "2 Feb", "3 Feb"], data: [1000000, 2000000, 1500000] },
              monthly: { labels: ["Jan", "Feb", "Mar"], data: [12000000, 15000000, 18000000] },
              yearly: { labels: ["2022", "2023", "2024"], data: [100000000, 120000000, 150000000] },
            });
          }, 1000);
        });

        this.chartData = {
          labels: response.daily.labels,
          datasets: [{
            label: "Pendapatan",
            data: response.daily.data,
            borderColor: "#03a980",
            backgroundColor: "rgba(3, 169, 128, 0.2)",
            tension: 0.3,
            fill: true,
          }],
        };

        this.monthlyData = {
          labels: response.monthly.labels,
          datasets: [{
            label: "Pendapatan Bulanan",
            data: response.monthly.data,
            borderColor: "#ff9800",
            backgroundColor: "rgba(255, 152, 0, 0.2)",
            tension: 0.3,
            fill: true,
          }],
        };

        this.yearlyData = {
          labels: response.yearly.labels,
          datasets: [{
            label: "Pendapatan Tahunan",
            data: response.yearly.data,
            borderColor: "#3f51b5",
            backgroundColor: "rgba(63, 81, 181, 0.2)",
            tension: 0.3,
            fill: true,
          }],
        };

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
@media (max-width: 640px) {
  h3 {
    font-size: 14px;
  }
  h2 {
    font-size: 18px;
  }
  p {
    font-size: 12px;
  }
  .p-6 {
    padding: 1rem;
  }
}
@media (min-width: 641px) and (max-width: 1024px) {
  h3 {
    font-size: 16px;
  }
  h2 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
}
</style>
