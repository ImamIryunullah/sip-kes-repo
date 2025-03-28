<template>
 <div class="w-64 bg-white shadow-md">
        <div class="p-4 border-b">
          <div class="flex items-center">
            <img src="@/assets/logosidebar.png" alt="SIP-Kes Logo" class="mr-2 rounded">
          </div>
          <div class="text-xs text-gray-500">Sistem Informasi Pelayanan Kesehatan</div>
        </div>
  
        <div class="py-4">
          <div class="px-4 py-2 flex items-center text-blue-900 hover:bg-blue-50 cursor-pointer">
            <i class="fas fa-tachometer-alt w-6"></i>
            <span>Dashboard</span>
          </div>
  
          <div class="px-4 py-2 flex items-center justify-between text-blue-900 hover:bg-blue-50 cursor-pointer">
  <div class="flex items-center">
    <i class="fas fa-clipboard-list w-6"></i>
    <!-- Use router-link to navigate to the pendataan-pasien route -->
    <router-link to="/pendataan-pasien">Pendaftaran</router-link>
  </div>
  <i class="fas fa-chevron-right text-xs"></i>
</div>

  
<div 
      class="px-4 py-2 flex items-center justify-between text-blue-900 bg-blue-100 cursor-pointer rounded"
      @click="toggleDropdown"
    >
      <div class="flex items-center">
        <i class="fas fa-stethoscope w-6"></i>
        <span>Pemeriksaan</span>
      </div>
      <i :class="isOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-right'" class="text-xs"></i>
    </div>
    <!-- Dropdown Menu (Submenu) -->
    <div v-show="isOpen" class="bg-blue-50">
      <div class="px-8 py-2 text-blue-900 hover:bg-blue-100 cursor-pointer">
        <span>Umum</span>
      </div>
      <div class="px-8 py-2 text-blue-900 hover:bg-blue-100 cursor-pointer">
        <span>KIA</span>
      </div>
      <div class="px-8 py-2 text-blue-900 bg-blue-200 cursor-pointer">
        <span>Rawat Inap</span>
      </div>
      <div class="px-8 py-2 text-blue-900 hover:bg-blue-100 cursor-pointer">
        <span>UGD</span>
      </div>
    </div>
          <div class="px-4 py-2 flex items-center text-blue-900 hover:bg-blue-50 cursor-pointer">
            <i class="fas fa-pills w-6"></i>
            <span>Farmasi</span>
          </div>
  
          <div class="px-4 py-2 flex items-center text-blue-900 hover:bg-blue-50 cursor-pointer">
            <i class="fas fa-credit-card w-6"></i>
            <span>Pembayaran</span>
          </div>
  
          <div class="px-4 py-2 flex items-center justify-between text-blue-900 hover:bg-blue-50 cursor-pointer">
            <div class="flex items-center">
              <i class="fas fa-file-alt w-6"></i>
              <span>Persuratan</span>
            </div>
            <i class="fas fa-chevron-right text-xs"></i>
          </div>
  
          <div class="px-4 py-2 flex items-center justify-between text-blue-900 hover:bg-blue-50 cursor-pointer">
            <div class="flex items-center">
              <i class="fas fa-folder-open w-6"></i>
              <span>Rekam Medis</span>
            </div>
            <i class="fas fa-chevron-right text-xs"></i>
          </div>
  
          <div class="px-4 py-2 flex items-center justify-between text-blue-900 hover:bg-blue-50 cursor-pointer">
            <div class="flex items-center">
              <i class="fas fa-chart-bar w-6"></i>
              <span>Laporan</span>
            </div>
            <i class="fas fa-chevron-right text-xs"></i>
          </div>
        </div>
      </div>    
</template>

<script>
export default {
  data(){
    return{
      isOpen: false
    }
  },
  methods:{
  toggleDropdown(){
    this.isOpen = !this.isOpen;
  }
  }
}
</script>

<style>
</style>