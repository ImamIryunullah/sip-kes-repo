<template>
  <div class="w-full min-h-screen bg-gray-100 pt-20 mb-8">
    <!-- Navbar -->
    <NavbarPusat />
    <div class="flex flex-col items-center p-6 mt-8">
      <div class="bg-white w-full max-w-5xl p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-[#03a980] text-center mb-6">Data Pendaftaran Anggota</h2>

        <div v-if="pendaftaranData.length > 0" class="overflow-x-auto">
          <table class="min-w-full table-auto border-collapse mx-auto text-sm">
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
                <td class="px-4 py-3">{{ pendaftaran.status }}</td>
                <td class="px-4 py-3">
                  <img :src="pendaftaran.foto3x4Url" alt="Foto 3x4" class="w-16 h-16 object-cover rounded-full" />
                </td>
                <td class="px-4 py-3">
                  <img :src="pendaftaran.fotoKtpUrl" alt="Foto KTP" class="w-16 h-16 object-cover rounded-full" />
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
        }
      ]
    };
  },
  methods: {
    approvePendaftaran(pendaftaran) {
      alert(`Pendaftaran ${pendaftaran.nama} telah disetujui.`);
    },
    rejectPendaftaran(pendaftaran) {
      alert(`Pendaftaran ${pendaftaran.nama} telah ditolak.`);
    }
  }
};
</script>

<style scoped>
/* Styling untuk tabel dan kolom yang lebih kecil */
table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
}

th, td {
  padding: 8px 12px;
}

th {
  background-color: #028a66;
  color: white;
  text-align: left;
}

td {
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: #f5f5f5;
}

button {
  padding: 10px 16px;
  font-size: 14px;
  border-radius: 8px;
}

button:hover {
  cursor: pointer;
}

button + button {
  margin-left: 8px;
}

img {
  border-radius: 50%;
  width: 64px;
  height: 64px;
}

@media (max-width: 768px) {
  /* Stack the table columns for mobile screens */
  table {
    width: 100%;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th, td {
    padding: 6px;
    font-size: 12px;
  }

  /* Make the images smaller for mobile devices */
  img {
    width: 48px;
    height: 48px;
  }

  /* Adjust button sizes */
  button {
    font-size: 12px;
    padding: 8px 14px;
  }

  /* Adjust font size for table headings */
  .text-3xl {
    font-size: 1.25rem;
  }
}

/* Tablet view */
@media (min-width: 768px) and (max-width: 1024px) {
  table {
    width: 100%;
    display: block;
    overflow-x: auto;
  }

  th, td {
    padding: 10px;
    font-size: 14px;
  }

  img {
    width: 60px;
    height: 60px;
  }

  button {
    padding: 10px 16px;
    font-size: 14px;
  }
}
</style>
