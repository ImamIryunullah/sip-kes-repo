<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from "chart.js";
  
  Chart.register(...registerables);
  
  export default {
    props: {
      chartData: Object,
    },
    mounted() {
      new Chart(this.$refs.chartCanvas, {
        type: "line",
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              position: "top",
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Tanggal",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Jumlah (Rp)",
              },
            },
          },
        },
      });
    },
  };
  </script>
  
  <style scoped>
  div {
    height: 300px;
  }
  </style>
  