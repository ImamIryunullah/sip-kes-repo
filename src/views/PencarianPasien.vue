<template>
    <div class="flex h-screen">
      <NavbarUser />
      <!-- Main Content -->
      <div class="flex-1 overflow-y-auto">
        <div class="p-8">
          <h1 class="text-4xl font-bold text-blue-900 mb-8">Rawat Inap</h1>
  
          <!-- Progress Steps -->
          <div class="flex justify-center mb-12">
            <div class="flex items-center w-4/5">
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
  
              <div class="flex-1 h-1 bg-blue-500 mx-2"></div>
  
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-blue-900">
                  <i class="fas fa-stethoscope"></i>
                </div>
                <div class="text-center mt-2 text-sm">Pemeriksaan</div>
              </div>
  
              <div class="flex-1 h-1 bg-blue-500 mx-2"></div>
  
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-blue-900">
                  <i class="fas fa-pills"></i>
                </div>
                <div class="text-center mt-2 text-sm">Farmasi</div>
              </div>
  
              <div class="flex-1 h-1 bg-blue-500 mx-2"></div>
  
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-blue-900">
                  <i class="fas fa-dollar-sign"></i>
                </div>
                <div class="text-center mt-2 text-sm">Pembayaran</div>
              </div>
            </div>
          </div>
  
          <!-- Search Area -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <div class="flex justify-end mb-6">
              <div class="relative w-64 shadow-md rounded-lg">
                <input 
                  type="text" 
                  placeholder="Search" 
                  v-model="searchTerm"
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <select v-model="searchBy" class="h-full border-0 bg-transparent text-gray-500 focus:outline-none">
                    <option value="name">Nama</option>
                    <option value="nik">NIK</option>
                    <option value="adress">Alamat</option>
                  </select>
                </div>
              </div>
              <button class="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                <i class="fas fa-search"></i>
              </button>
            </div>
  
            <!-- Patient Table -->
            <div class="overflow-x-auto rounded-lg">
              <table class="min-w-full bg-white border">
                <thead class="bg-blue-500">
                  <tr>
                    <th class="py-2 px-4 border text-left">NO.</th>
                    <th class="py-2 px-4 border text-left">NOMOR RM</th>
                    <th class="py-2 px-4 border text-left">NAMA</th>
                    <th class="py-2 px-4 border text-left">NIK</th>
                    <th class="py-2 px-4 border text-left">TANGGAL LAHIR</th>
                    <th class="py-2 px-4 border text-left">TANGGAL MASUK</th>
                    <th class="py-2 px-4 border text-left">ALAMAT</th>
                    <th class="py-2 px-4 border text-left">RUANGAN RAWAT</th>
                    <th class="py-2 px-4 border text-left">KETERANGAN</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(patient, index) in patients" :key="patient.id">
                    <td class="py-2 px-4 border">{{ index + 1 }}</td>
                    <td class="py-2 px-4 border">{{ patient.recordNumber }}</td>
                    <td class="py-2 px-4 border">{{ patient.name }}</td>
                    <td class="py-2 px-4 border">{{ patient.nik }}</td>
                    <td class="py-2 px-4 border">{{ patient.birthDate }}</td>
                    <td class="py-2 px-4 border">{{ patient.admissionDate }}</td>
                    <td class="py-2 px-4 border">{{ patient.address }}</td>
                    <td class="py-2 px-4 border">{{ patient.room }}</td>
                    <td class="py-2 px-4 border">{{ patient.notes }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarUser from '@/components/NavbarUser.vue';
  
  export default {
    components: { NavbarUser },
    data() {
      return {
        searchTerm: '',
        searchBy: 'name',
        patients: [
          {
            id: 1,
            recordNumber: '002001',
            name: 'Aditya Andrees',
            nik: '3350988968650001',
            birthDate: '12-09-1999',
            admissionDate: '27-02-2025',
            address: 'SUMBERSARI',
            room: 'Ruangan Muru',
            notes: 'RUJUK INTERNAL IGD'
          },
          {
            id: 2,
            recordNumber: '002031',
            name: 'Aditya Fahrizky',
            nik: '3579860742680003',
            birthDate: '04-10-1997',
            admissionDate: '02-03-2025',
            address: 'PUGER',
            room: 'Ruangan Emon',
            notes: 'RUJUK INTERNAL RJ'
          }
        ]
      };
    },
    methods: {
      // You can add methods for filtering or other functionality here
    }
  }
  </script>
  
  <style scoped>
    /* You can add custom styles here if necessary */
  </style>