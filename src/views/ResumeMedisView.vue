<template>
    <div class="flex h-screen">
        <NavbarUser />
        <div class="flex-1 overflow-auto">
      <div class="p-8">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-4xl font-bold text-indigo-900">Rawat Inap</h1>
        </div>
        <!-- Progress Steps -->
        <div class="flex justify-center mb-8">
          <div class="flex items-center w-3/4">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <i class="fas fa-clipboard-list"></i>
              </div>
              <div class="text-center mt-2 text-sm">Pendaftaran</div>
            </div>

            <div class="flex-1 h-1 bg-blue-500 mx-2"></div>

            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <i class="fas fa-hand-holding-medical"></i>
              </div>
              <div class="text-center mt-2 text-sm">Layanan</div>
            </div>

            <div class="flex-1 h-1 bg-blue-300 mx-2"></div>

            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center text-white">
                <i class="fas fa-stethoscope"></i>
              </div>
              <div class="text-center mt-2 text-sm">Pemeriksaan</div>
            </div>

            <div class="flex-1 h-1 bg-gray-300 mx-2"></div>

            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                <i class="fas fa-pills"></i>
              </div>
              <div class="text-center mt-2 text-sm">Farmasi</div>
            </div>

            <div class="flex-1 h-1 bg-gray-300 mx-2"></div>

            <div class="flex flex-col items-center">
              <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="text-center mt-2 text-sm">Pembayaran</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex space-x-4 mb-8">
          <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Pendaftaran Baru</button>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-md">Detail</button>
          <button class="bg-blue-700 text-white px-4 py-2 rounded-md">Rekam Medis</button>
          <button class="bg-gray-200 text-blue-800 px-4 py-2 rounded-md">Transaksi Layanan</button>
        </div>
        
        <!-- Resume Medis Card -->
        <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h2 class="text-2xl font-bold text-center mb-4">RESUME MEDIS</h2>
    <p class="text-sm mb-4">NO :</p>
    
    <div class="border border-gray-300 rounded-md overflow-hidden">
      <div class="grid grid-cols-3 border-b bg-gray-100 p-2 font-bold">
        <div class="col-span-1 p-2 mt-40">RINGKASAN PULANG <br /><span class="italic">(DISCHARGE SUMMARY)</span></div>
        <div class="col-span-2">
          <div class="grid grid-cols-2">
            <div class="border p-2">Nama / No. RM</div>
            <div class="border p-2">
                <input type="text p-2">
            </div>
            <div class="border p-2">Tgl. Masuk dan Tgl. Keluar</div>
            <div class="border p-2"></div>
            <div class="border p-2">Tgl. Lahir / Jenis Kelamin</div>
            <div class="border p-2"></div>
            <div class="border p-2">Pembayaran</div>
            <div class="border p-2"></div>
            <div class="border p-2">No. SEP / NIK</div>
            <div class="border p-2"></div>
            <div class="border p-2">Dokter Penanggung Jawab</div>
            <div class="border p-2"></div>
            <div class="border p-2">Ruang Perawatan</div>
            <div class="border p-2"></div>
            <div class="border p-2">Diagnosa Masuk</div>
            <div class="border p-2"></div>
          </div>
        </div>
      </div>
      
      <div class="p-2 border-b">Indikasi Rawat Inap</div>
      <div class="p-2 border-b font-bold bg-gray-100">ANAMNESIS</div>
      <div class="p-2 border-b">Ringkasan Penyakit</div>
      <div class="p-2 border-b">Riwayat Penyakit</div>
      <div class="p-2 border-b font-bold bg-gray-100">PEMERIKSAAN FISIK</div>
      <div class="p-2 border-b">Keadaan Umum</div>
      <div class="p-2 border-b">Tanda Vital</div>
      <div class="p-2 border-b">Pemeriksaan Fisik</div>
      <div class="p-2 border-b font-bold bg-gray-100">PEMERIKSAAN PENUNJANG</div>
      <div class="p-2">1. Laboratorium</div>
    </div>
  </div>
      </div>
    </div>
</div>
</template>
<script>

import NavbarUser from '@/components/NavbarUser.vue';
export default{
    components:{
        NavbarUser
    },
    data(){
        return{

        }
    }
}
</script>