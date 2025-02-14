<template>
    <div class="w-screen bg-gray-100 mt-12">
      <NavbarPusat />
      
      <!-- Content Section -->
      <div class="flex flex-col items-center p-10 bg-gray-100 flex-grow">
        <div class="bg-white w-full max-w-4xl p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Layanan Pengaduan - Pusat</h2>
  
          <!-- Pengaduan List -->
          <div v-if="complaints.length > 0" class="space-y-4">
            <div v-for="(complaint, index) in complaints" :key="index" class="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-300">
              <p><strong>ID Pengaduan:</strong> {{ complaint.id }}</p>
              <p><strong>Kategori:</strong> {{ complaint.kategori }}</p>
              <p><strong>Nama Pengguna:</strong> {{ complaint.firstName }} {{ complaint.lastName }}</p>
              <p><strong>Judul:</strong> {{ complaint.judul }}</p>
              <p><strong>Deskripsi:</strong> {{ complaint.deskripsi }}</p>
              <p><strong>Harapan Penyelesaian:</strong> {{ complaint.harapan }}</p>
              <p><strong>Status:</strong> <span :class="getStatusClass(complaint.status)">{{ complaint.status }}</span></p>
              <p v-if="complaint.lampiran" class="text-sm text-blue-500 hover:text-blue-700 cursor-pointer">
                <a :href="complaint.lampiran" target="_blank">Lihat Lampiran</a>
              </p>
  
              <div class="flex space-x-2 mt-4">
                <!-- Update Status Button -->
                <select v-model="complaint.status" @change="updateComplaintStatus(complaint)" class="p-2 bg-[#03a980] text-white rounded-md">
                  <option value="Diproses">Diproses</option>
                  <option value="Disetujui">Disetujui</option>
                  <option value="Ditolak">Ditolak</option>
                </select>
              </div>
  
              <div class="mt-4">
                <textarea v-model="complaint.tanggapan" class="w-full p-3 border border-gray-300 rounded-lg" placeholder="Tanggapan untuk pengaduan ini"></textarea>
                <button @click="sendResponse(complaint)" class="mt-2 w-full bg-[#03a980] text-white p-3 rounded-lg font-semibold hover:bg-[#028a66] transition">
                  Kirim Tanggapan
                </button>
              </div>
            </div>
          </div>
  
          <div v-else class="text-center text-gray-500">Tidak ada pengaduan yang masuk.</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import NavbarPusat from '@/components/NavbarPusat.vue';
  
  export default {
    components: {
      NavbarPusat
    },
    data() {
      return {
        complaints: [
          {
            id: "001",
            kategori: "Layanan Pendidikan",
            firstName: "John",
            lastName: "Doe",
            judul: "Keterlambatan Sertifikat",
            deskripsi: "Sertifikat saya terlambat diterima meskipun sudah menyelesaikan pelatihan.",
            harapan: "Saya berharap sertifikat dapat diterima segera.",
            status: "Diproses",
            lampiran: "https://via.placeholder.com/150",
            tanggapan: ""
          },
          {
            id: "002",
            kategori: "Fasilitas",
            firstName: "Jane",
            lastName: "Smith",
            judul: "Fasilitas Tidak Memadai",
            deskripsi: "Kelas yang saya hadiri memiliki fasilitas yang sangat buruk, AC tidak berfungsi.",
            harapan: "Perbaikan fasilitas di ruang kelas.",
            status: "Diproses",
            lampiran: "",
            tanggapan: ""
          }
        ]
      };
    },
    methods: {
      getStatusClass(status) {
        switch (status) {
          case "Diproses": return "text-yellow-500";
          case "Disetujui": return "text-green-500";
          case "Ditolak": return "text-red-500";
          default: return "text-gray-500";
        }
      },
      updateComplaintStatus(complaint) {
        // Simulate updating the status of the complaint
        console.log("Updated status:", complaint);
      },
      sendResponse(complaint) {
        if (complaint.tanggapan.trim() !== "") {
          // Simulate sending the response
          console.log("Sent response:", complaint.tanggapan);
          alert("Tanggapan telah dikirim!");
          // Reset the tanggapan field
          complaint.tanggapan = "";
        } else {
          alert("Tanggapan tidak boleh kosong!");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling for complaint sections */
  textarea {
    resize: vertical;
  }
  </style>
  