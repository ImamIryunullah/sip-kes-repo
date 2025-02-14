<template>
  <div class="w-screen h-screen flex flex-col bg-gray-100 mt-10">
    <!-- Navbar -->
    <NavbarPusat />
    <div class="flex flex-col items-center p-6 mt-8">
      <div class="bg-white w-full max-w-7xl p-8 rounded-lg shadow-md">
        <h2 class="text-3xl font-semibold text-[#03a980] text-center mb-8">Data Pendaftaran Anggota</h2>

        <!-- Tabel untuk menampilkan data pendaftaran anggota -->
        <div v-if="pendaftaranData.length > 0" class="overflow-x-auto">
          <table class="min-w-full table-auto border-collapse mx-auto text-lg">
            <thead class="bg-[#028a66] text-white">
              <tr>
                <th class="px-8 py-6 text-left">Nama</th>
                <th class="px-8 py-6 text-left">NIK</th>
                <th class="px-8 py-6 text-left">Tipe Anggota</th>
                <th class="px-8 py-6 text-left">Provinsi</th>
                <th class="px-8 py-6 text-left">Kota/Kabupaten</th>
                <th class="px-8 py-6 text-left">Instansi</th>
                <th class="px-8 py-6 text-left">Jabatan</th>
                <th class="px-8 py-6 text-left">Status</th>
                <th class="px-8 py-6 text-left">Foto 3x4</th>
                <th class="px-8 py-6 text-left">Foto KTP</th>
                <th class="px-8 py-6 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(pendaftaran, index) in pendaftaranData" :key="index" class="border-b hover:bg-gray-100">
                <td class="px-8 py-6">{{ pendaftaran.nama }}</td>
                <td class="px-8 py-6">{{ pendaftaran.nik }}</td>
                <td class="px-8 py-6">{{ pendaftaran.anggotaType }}</td>
                <td class="px-8 py-6">{{ pendaftaran.provinsi }}</td>
                <td class="px-8 py-6">{{ pendaftaran.kotaKabupaten }}</td>
                <td class="px-8 py-6">{{ pendaftaran.instansi }}</td>
                <td class="px-8 py-6">{{ pendaftaran.jabatan }}</td>
                <td class="px-8 py-6">{{ pendaftaran.status }}</td>
                <td class="px-8 py-6">
                  <img :src="pendaftaran.foto3x4Url" alt="Foto 3x4" class="w-20 h-20 object-cover rounded-full" />
                </td>
                <td class="px-8 py-6">
                  <img :src="pendaftaran.fotoKtpUrl" alt="Foto KTP" class="w-20 h-20 object-cover rounded-full" />
                </td>
                <td class="px-8 py-6 flex space-x-4 justify-center">
                  <button @click="approvePendaftaran(pendaftaran)" class="bg-green-500 text-white px-4 py-3 rounded-md hover:bg-green-600 transition">Setujui</button>
                  <button @click="rejectPendaftaran(pendaftaran)" class="bg-red-500 text-white px-4 py-3 rounded-md hover:bg-red-600 transition">Tolak</button>
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
/* Styling untuk tabel dan kolom yang lebih besar */
table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
}

th, td {
  padding: 16px;
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

button {
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 8px;
}

button:hover {
  cursor: pointer;
}

button + button {
  margin-left: 12px;
}

img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
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
    padding: 10px;
    font-size: 14px;
  }

  /* Make the images smaller for mobile devices */
  img {
    width: 50px;
    height: 50px;
  }

  /* Adjust button sizes */
  button {
    font-size: 14px;
    padding: 10px 18px;
  }

  /* Adjust font size for table headings */
  .text-3xl {
    font-size: 1.5rem;
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
    padding: 12px;
    font-size: 15px;
  }

  img {
    width: 70px;
    height: 70px;
  }

  button {
    padding: 12px 20px;
    font-size: 15px;
  }
}
</style>
