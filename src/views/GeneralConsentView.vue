<template>

<div class="flex h-screen">
<NavbarUser />

 <div class="flex-1 overflow-auto">
            <div class="p-8">
                <h1 class="text-4xl font-bold text-navy-900">Rawat Inap</h1>
                
                <!-- General Consent Form -->
                <div class="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h2 class="text-2xl font-bold text-center mb-6 underline">GENERAL CONSENT</h2>
                    
                    <p class="mb-4">Saya yang bertanda tangan di bawah ini :</p>
                    
                    <div class="mb-6">
                        <h3 class="font-bold mb-3">Keluarga Penanggung Jawab</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-sm font-medium mb-1">Nama</label>
                                <input type="text" class="w-full border border-gray-300 rounded p-2">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Hubungan dengan Pasien</label>
                                <input type="text" class="w-full border border-gray-300 rounded p-2">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="flex items-center gap-2">
                                <div class="w-3/5">
                                    <label class="block text-sm font-medium mb-1">Tanggal Lahir</label>
                                    <div class="relative">
                                        <input type="text" class="w-full border border-gray-300 rounded p-2">
                                        <i class="fas fa-calendar absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                    </div>
                                </div>
                                <div class="w-2/5">
                                    <label class="block text-sm font-medium mb-1">Umur</label>
                                    <input type="text" class="w-full border border-gray-300 rounded p-2">
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Jenis Kelamin</label>
                                <div class="flex items-center mt-2">
                                    <div class="mr-4 flex items-center">
                                        <input type="radio" id="laki-laki" name="jenis_kelamin" class="mr-1">
                                        <label for="laki-laki">Laki-laki</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="radio" id="perempuan" name="jenis_kelamin" class="mr-1">
                                        <label for="perempuan">Perempuan</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-sm font-medium mb-1">Alamat</label>
                                <input type="text" class="w-full border border-gray-300 rounded p-2">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Kode Pos</label>
                                <input type="text" class="w-full border border-gray-300 rounded p-2">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                                <label class="block text-sm font-medium mb-1">RT:</label>
                                <input type="text" class="w-full border border-gray-300 rounded p-2">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">RW:</label>
                                <input type="text" class="w-full border border-gray-300 rounded p-2">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Kec:</label>
                                <input type="text" class="w-full border border-gray-300 rounded p-2">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1">Prov:</label>
                                <input type="text" class="w-full border border-gray-300 rounded p-2">
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <p class="mb-4">Selaku wali/pasien Klinik Pratama "Insan Medika", dengan ini menyatakan:</p>
                        
                        <div class="ml-4 mb-4">
                            <p class="mb-2">1. Informasi tentang Hak dan Kewajiban pasien:</p>
                            <div class="ml-6">
                                <p class="mb-2">a. Dengan menandatangani dokumen ini saya mengakui bahwa pada proses pendaftaran untuk mendapatkan PELAYANAN di Klinik Pratama "Insan Medika", saya telah mendapat</p>
                                <p class="mb-2">b. informasi tentang Hak - hak dan kewajiban saya sebagai pasien. Saya telah menerima informasi tentang peraturan yang diberlakukan oleh Klinik Pratama "Insan Medika", dan saya beserta keluarga bersedia untuk mematuhinya.</p>
                            </div>
                        </div>
                        
                        <div class="ml-4">
                            <p class="mb-2">2. Persetujuan perawatan dan pengobatan</p>
                        </div>
                    </div>
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
    }

}
</script>


<style>
</style>