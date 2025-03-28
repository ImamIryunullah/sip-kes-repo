<template>
<div class="flex h-screen">
        <NavbarUser />
        
     <div class="flex-1 overflow-auto p-8">
                <h1 class="text-4xl font-bold text-navy-900">Rawat Inap</h1>
                <!-- Process Flow -->
                <div class="flex justify-between items-center mt-6 mb-8">
                    <div class="flex items-center flex-col">
                        <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <i class="fas fa-clipboard-list"></i>
                        </div>
                        <span class="mt-2 text-xs text-center">Pendaftaran</span>
                    </div>
                    <div class="h-1 bg-blue-300 flex-grow mx-2"></div>
                    <div class="flex items-center flex-col">
                        <div class="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <i class="fas fa-bed"></i>
                        </div>
                        <span class="mt-2 text-xs text-center">Layanan</span>
                    </div>
                    <div class="h-1 bg-blue-300 flex-grow mx-2"></div>
                    <div class="flex items-center flex-col">
                        <div class="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center text-white">
                            <i class="fas fa-stethoscope"></i>
                        </div>
                        <span class="mt-2 text-xs text-center">Pemeriksaan</span>
                    </div>
                    <div class="h-1 bg-blue-300 flex-grow mx-2"></div>
                    <div class="flex items-center flex-col">
                        <div class="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center text-white">
                            <i class="fas fa-pills"></i>
                        </div>
                        <span class="mt-2 text-xs text-center">Farmasi</span>
                    </div>
                    <div class="h-1 bg-blue-300 flex-grow mx-2"></div>
                    <div class="flex items-center flex-col">
                        <div class="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center text-white">
                            <i class="fas fa-money-bill-wave"></i>
                        </div>
                        <span class="mt-2 text-xs text-center">Pembayaran</span>
                    </div>
                </div>
                <!-- Tabs -->
                <div class="flex mb-6">
                    <div class="px-4 py-2 bg-white rounded-t-lg text-gray-600 mr-1">
                        Assessment Awal
                    </div>
                    <div class="px-4 py-2 bg-blue-500 rounded-t-lg text-white mr-1">
                        CPPT
                    </div>
                    <div class="px-4 py-2 bg-blue-500 rounded-t-lg text-white mr-1">
                        Analisa Keperawatan
                    </div>
                    <div class="px-4 py-2 bg-blue-500 rounded-t-lg text-white mr-1">
                        Rencana Asuhan
                    </div>
                </div>
                <!-- Assessment Form -->
                <div class="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 class="text-2xl font-bold text-center mb-6">ASESSMENT AWAL RANAP</h2>
                    
                    <div class="grid grid-cols-2 gap-6">
                        <div class="col-span-1">
                            <div class="mb-4">
                                <label class="block text-sm font-medium mb-1">Keluhan Utama</label>
                                <textarea class="w-full border border-gray-300 rounded p-2" rows="4"></textarea>
                            </div>
                            
                            <div class="mb-4">
                                <label class="block text-sm font-medium mb-1">Riwayat Penyakit</label>
                                <textarea class="w-full border border-gray-300 rounded p-2" rows="4"></textarea>
                            </div>
                            
                            <div class="mb-4">
                                <label class="block text-sm font-medium mb-1">Riwayat Alergi</label>
                                <div class="flex items-center mt-2">
                                    <div class="mr-4 flex items-center">
                                        <input type="radio" id="alergi-tidak" name="alergi" class="mr-1">
                                        <label for="alergi-tidak">Tidak</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="radio" id="alergi-ya" name="alergi" class="mr-1">
                                        <label for="alergi-ya">Ya</label>
                                    </div>
                                </div>
                                <textarea class="w-full border border-gray-300 rounded p-2 mt-2" rows="3"></textarea>
                            </div>
                            
                            <div class="mb-4">
                                <label class="block text-sm font-medium mb-1">Riwayat Pengobatan</label>
                                <textarea class="w-full border border-gray-300 rounded p-2" rows="4"></textarea>
                            </div>
                            
                            <div class="mb-4">
                                <label class="block text-sm font-medium mb-1">Status Psikologi</label>
                                <div class="flex flex-wrap gap-2 mt-2">
                                    <div class="flex items-center">
                                        <input type="checkbox" id="psiko-tenang" class="mr-1">
                                        <label for="psiko-tenang">Tenang</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="psiko-cemas" class="mr-1">
                                        <label for="psiko-cemas">Cemas</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="psiko-takut" class="mr-1">
                                        <label for="psiko-takut">Takut</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input type="checkbox" id="psiko-marah" class="mr-1">
                                        <label for="psiko-marah">Marah</label>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <label class="block text-sm mb-1">Kecenderungan bunuh diri, dijagor ke Lain-lain, tuliskan</label>
                                    <textarea class="w-full border border-gray-300 rounded p-2" rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1">
                            <div class="mb-4 grid grid-cols-3 gap-4">
                                <div>
                                    <label class="block text-sm font-medium mb-1">Denyut Jantung</label>
                                    <div class="flex items-center">
                                        <input type="text" class="w-full border border-gray-300 rounded p-2">
                                        <span class="ml-2">bpm</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium mb-1">Pernafasan</label>
                                    <div class="flex items-center">
                                        <input type="text" class="w-full border border-gray-300 rounded p-2">
                                        <span class="ml-2">x/menit</span>
                                    </div>
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium mb-1">Suhu Tubuh</label>
                                    <div class="flex items-center">
                                        <input type="text" class="w-full border border-gray-300 rounded p-2">
                                        <span class="ml-2">°C</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mb-4">
                                <label class="block text-sm font-medium mb-1">Tekanan Darah</label>
                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-sm mb-1">Sistole</label>
                                        <div class="flex items-center">
                                            <input type="text" class="w-full border border-gray-300 rounded p-2">
                                            <span class="ml-2">mmHg</span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm mb-1">Diastole</label>
                                        <div class="flex items-center">
                                            <input type="text" class="w-full border border-gray-300 rounded p-2">
                                            <span class="ml-2">mmHg</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="mb-4">
                                <label class="block text-sm font-medium mb-1">Skala Nyeri</label>
                                <div class="flex items-center justify-between mt-2">
                                    <span>0</span>
                                    <span>2</span>
                                    <span>4</span>
                                    <span>6</span>
                                    <span>8</span>
                                    <span>10</span>
                                </div>
                                <input type="range" min="0" max="10" step="1" class="w-full mt-1">
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-end mt-6">
                        <button class="bg-blue-500 text-white px-6 py-2 rounded">Simpan</button>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import NavbarUser from "@/components/NavbarUser.vue";
export default {
    components: {
        NavbarUser
    }
};

</script>