<template>
  <div class="flex bg-green-100">
    <!-- Navbar -->
    <NavbarPusat />
    
    <!-- Main Content -->
    <div class="flex-1 min-h-screen bg-green-100 pt-16 px-6 md:px-12 lg:px-20 ml-50">
      <div class="flex flex-col items-center mt-4">
        <div class="bg-white w-full max-w-7xl p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-4">Data Pendaftaran Anggota</h2>

          <div v-if="pendaftaranData.length > 0" class="overflow-x-auto">
            <table class="w-full table-auto border-collapse text-sm">
              <thead class="bg-[#028a66] text-white">
                <tr>
                  <th class="px-4 py-3 text-left">Nama</th>
                  <th class="px-4 py-3 text-left">NIK</th>
                  <th class="px-4 py-3 text-left">Tipe Anggota</th>
                  <th class="px-4 py-3 text-left">Provinsi</th>
                  <th class="px-4 py-3 text-left">Kota/Kabupaten</th>
                  <th class="px-4 py-3 text-left">Instansi</th>
                  <th class="px-4 py-3 text-left">Jabatan</th>
                  <th class="px-4 py-3 text-left">Status</th>
                  <th class="px-4 py-3 text-left">Foto 3x4</th>
                  <th class="px-4 py-3 text-left">Foto KTP</th>
                  <th class="px-4 py-3 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pendaftaran, index) in pendaftaranData" :key="index" class="border-b hover:bg-gray-100">
                  <td class="px-4 py-3">{{ pendaftaran.nama }}</td>
                  <td class="px-4 py-3">{{ pendaftaran.nik }}</td>
                  <td class="px-4 py-3">{{ pendaftaran.anggotaType }}</td>
                  <td class="px-4 py-3">{{ pendaftaran.provinsi }}</td>
                  <td class="px-4 py-3">{{ pendaftaran.kotaKabupaten }}</td>
                  <td class="px-4 py-3">{{ pendaftaran.instansi }}</td>
                  <td class="px-4 py-3">{{ pendaftaran.jabatan }}</td>
                  <td class="px-4 py-3 font-semibold" :class="getStatusColor(pendaftaran.status)">
                    {{ pendaftaran.status }}
                  </td>
                  <td class="px-4 py-3">
                    <img :src="pendaftaran.foto3x4Url" alt="Foto 3x4" class="w-16 h-16 object-cover rounded-full border border-gray-300" />
                  </td>
                  <td class="px-4 py-3">
                    <img :src="pendaftaran.fotoKtpUrl" alt="Foto KTP" class="w-16 h-16 object-cover rounded-full border border-gray-300" />
                  </td>
                  <td class="px-4 py-3 flex space-x-2 justify-center">
                    <button @click="approvePendaftaran(pendaftaran)" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Setujui</button>
                    <button @click="rejectPendaftaran(pendaftaran)" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">Tolak</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-else class="text-center text-gray-500">Tidak ada data pendaftaran anggota.</div>
        </div>
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
      pendaftaranData: [
        {
          nama: "John Doe",
          nik: "1234567890123456",
          provinsi: "Jawa Timur",
          kotaKabupaten: "Kota Malang",
          instansi: "LPKNI Malang",
          anggotaType: "Provinsi",
          jabatan: "Anggota Direktorat",
          status: "Diproses",
          foto3x4Url: "https://via.placeholder.com/150",
          fotoKtpUrl: "https://via.placeholder.com/150"
        },
        {
          nama: "Jane Smith",
          nik: "6543210987654321",
          provinsi: "NTB",
          kotaKabupaten: "Mataram",
          instansi: "LPKNI Lombok",
          anggotaType: "KotaKabupaten",
          jabatan: "Anggota Sekretariat",
          status: "Disetujui",
          foto3x4Url: "https://via.placeholder.com/150",
          fotoKtpUrl: "https://via.placeholder.com/150"
        },
      ]
    };
  },
  methods: {
    approvePendaftaran(pendaftaran) {
      alert(`Pendaftaran ${pendaftaran.nama} telah disetujui.`);
    },
    rejectPendaftaran(pendaftaran) {
      alert(`Pendaftaran ${pendaftaran.nama} telah ditolak.`);
    },
    getStatusColor(status) {
      switch (status) {
        case "Diproses":
          return "text-yellow-500";
        case "Disetujui":
          return "text-green-500";
        case "Ditolak":
          return "text-red-500";
        default:
          return "text-gray-500";
      }
    }
  }
};
</script>

<style scoped>
/* Styling tabel agar responsif */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
}

th {
  background-color: #028a66;
  color: white;
}

td {
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: #f5f5f5;
}

/* Tombol */
button {
  padding: 8px 14px;
  font-size: 14px;
  border-radius: 6px;
}

button:hover {
  cursor: pointer;
}

img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
}

/* Responsif untuk mobile */
@media (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th, td {
    padding: 8px;
    font-size: 12px;
  }

  img {
    width: 48px;
    height: 48px;
  }

  button {
    font-size: 12px;
    padding: 6px 10px;
  }
}
</style>
