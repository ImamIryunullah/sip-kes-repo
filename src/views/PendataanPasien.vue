<template>
        <div class="flex h-screen">
    <NavbarUser/>

        <div class="flex-1 overflow-y-auto">
      <div class="p-8">
        <h1 class="text-4xl font-bold text-blue-900 mb-6">Rawat Inap</h1>
        
        <!-- Patient Data Form -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-4">
          <div class="flex justify-between items-center mb-4">
            <button class="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-lg">
              Data Pasien
            </button>
            <div class="flex items-center">
              <div class="relative w-64">
                <input 
                  type="text" 
                  placeholder="Search" 
                  class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <select class="h-full border-0 bg-transparent text-gray-500 focus:outline-none">
                    <option>No RM</option>
                    <option>Nama</option>
                    <option>NIK</option>
                  </select>
                </div>
              </div>
              <button class="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
          
          <!-- Form Grid -->
          <div class="grid grid-cols-3 gap-x-8 gap-y-4">
            <!-- Left Column -->
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Nama</label>
                <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              
                            <div class="mb-4">
                              <label class="block text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</label>
                              <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                            </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Nomor RM</label>
                <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>

              <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Kode Pos</label>
                <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">NIK</label>
                <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Tempat Lahir</label>
                <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
                <input type="date" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
                <div class="relative">
                  <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                    <option selected disabled>Pilih Jenis Kelamin</option>
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Agama</label>
                <div class="relative">
                  <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                    <option selected disabled>Pilih Agama</option>
                    <option>Islam</option>
                    <option>Kristen</option>
                    <option>Katolik</option>
                    <option>Hindu</option>
                    <option>Buddha</option>
                    <option>Konghucu</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Status Perkawinan</label>
                <div class="relative">
                  <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                    <option selected disabled>Pilih Status</option>
                    <option>Belum Kawin</option>
                    <option>Kawin</option>
                    <option>Cerai Hidup</option>
                    <option>Cerai Mati</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
 
              
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">RT:</label>
                  <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">RW:</label>
                  <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Kec:</label>
                  <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Prov:</label>
                  <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Kab:</label>
                <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Alamat Domisili</label>
                <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
              
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">RT:</label>
                  <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">RW:</label>
                  <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Kec:</label>
                  <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Prov:</label>
                  <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
              
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Kab:</label>
                <input type="text" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              </div>
            </div>
          </div>
          
          <!-- Third Row -->
          <div class="grid grid-cols-3 gap-8 mt-2">
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">No.HP</label>
                <div class="flex">
                  <span class="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                    +62
                  </span>
                  <input type="text" class="flex-1 px-3 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
              </div>
            </div>
            
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Pendidikan</label>
                <div class="relative">
                  <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                    <option selected disabled>Pilih Pendidikan</option>
                    <option>SD</option>
                    <option>SMP</option>
                    <option>SMA/SMK</option>
                    <option>D3</option>
                    <option>S1</option>
                    <option>S2</option>
                    <option>S3</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
          
          </div>
          
          <!-- Fourth Row -->
          <div class="grid grid-cols-3 gap-8">
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Kelas Perawatan</label>
                <div class="relative">
                  <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                    <option selected disabled>Pilih Kelas Perawatan</option>
                    <option>Kelas 1</option>
                    <option>Kelas 2</option>
                    <option>Kelas 3</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Pekerjaan</label>
                <div class="relative">
                  <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                    <option selected disabled>Pilih Pekerjaan</option>
                    <option>PNS</option>
                    <option>Swasta</option>
                    <option>Wiraswasta</option>
                    <option>Petani</option>
                    <option>Nelayan</option>
                    <option>Tidak Bekerja</option>
                    <option>Lainnya</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Ruang Inap</label>
                <div class="relative">
                  <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                    <option selected disabled>Pilih Ruang Inap</option>
                    <option>Dahlia</option>
                    <option>Melati</option>
                    <option>Anggrek</option>
                    <option>Mawar</option>
                    <option>Lainnya</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Fifth Row -->
          <div class="grid grid-cols-3 gap-8">
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Bahasa yang dikuasai</label>
                <div class="relative">
                  <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                    <option selected disabled>Pilih Bahasa</option>
                    <option>Indonesia</option>
                    <option>Inggris</option>
                    <option>Lainnya</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Pembayaran</label>
                <div class="relative">
                  <select class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white">
                    <option selected disabled>Pilih Metode Pembayaran</option>
                    <option>Umum</option>
                    <option>BPJS</option>
                    <option>Asuransi</option>
                  </select>
                  <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <i class="fas fa-chevron-down text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Submit Button -->
          <div class="flex justify-center mt-6">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              Daftar
            </button>
          </div>
 
      </div>
    </div>
    </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue'
export default {
    components: {
        NavbarUser
    },
  data() {
    return {
      patientForm: {
        nama: '',
        nomorRM: '',
        nik: '',
        tempatLahir: '',
        tanggalLahir: '',
        jenisKelamin: '',
        agama: '',
        statusPerkawinan: '',
        alamatLengkap: '',
        rt: '',
        rw: '',
        kec: '',
        prov: '',
        kab: '',
        alamatDomisili: '',
        rtDomisili: '',
        rwDomisili: '',
        kecDomisili: '',
        provDomisili: '',
        kabDomisili: '',
        noHP: '',
        pendidikan: '',
        kodePos: '',
        kelasPerawatan: '',
        pekerjaan: '',
        ruangInap: '',
        bahasa: '',
        pembayaran: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.patientForm);
      // Handle form submission here
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>


<style>
</style>