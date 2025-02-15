<template>
  <div class="w-screen h-screen flex flex-col mt-12">
    <!-- Navbar -->
    <NavbarUser />
    
    <!-- Main Content Section -->
    <div class="flex flex-col items-center p-10 bg-gray-100 flex-grow">
      <div class="bg-white w-full max-w-7xl p-6 rounded-lg shadow-md">
        <h2 class="text-3xl font-semibold text-[#03a980] text-center mb-8">Riwayat Pengajuan Pendaftaran Anggota</h2>

        <!-- Search Section -->
        <div class="mb-4 w-full flex justify-center">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search by Name, NIK or Jabatan"
            class="w-1/2 sm:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]"
          />
        </div>

        <!-- Filter Section -->
        <div class="mb-4 flex justify-center space-x-4">
          <button
            v-for="status in ['Diproses', 'Disetujui', 'Ditolak']"
            :key="status"
            @click="setStatusFilter(status)"
            :class="[ 'px-4 py-2 rounded-md text-sm font-semibold transition-all duration-300', statusFilter === status ? 'bg-[#03a980] text-white' : 'bg-gray-200 text-gray-700 hover:bg-[#028a66]' ]"
          >
            {{ status }}
          </button>
        </div>

        <!-- Display Filtered Data -->
        <div v-if="filteredRiwayat.length > 0" class="space-y-4">
          <div v-for="(item, index) in paginatedData" :key="index" class="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-300">
            <p><strong>Nama:</strong> {{ item.nama }}</p>
            <p><strong>Provinsi:</strong> {{ item.provinsi }}</p>
            <p><strong>Kota/Kabupaten:</strong> {{ item.kotaKabupaten }}</p>
            <p><strong>Jabatan:</strong> {{ item.jabatan }}</p>
            <p><strong>Status:</strong> <span :class="getStatusClass(item.status)">{{ item.status }}</span></p>

            <!-- Only show the print ID card button if approved -->
            <!-- <div v-if="item.status === 'Disetujui' && item.anggotaType === 'Provinsi'">
              <button @click="generateIdCardLink(item)" class="mt-4 w-full bg-[#03a980] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#028a66] transition">
                Cetak ID Card Provinsi
              </button>
            </div> -->

            <!-- Show approved/rejected message -->
            <p v-if="item.status === 'Disetujui'">Status: <span class="text-green-500">Disetujui oleh pusat.</span></p>
            <p v-if="item.status === 'Ditolak'">Status: <span class="text-red-500">Ditolak oleh pusat.</span></p>
          </div>
        </div>

        <!-- Message if no data available -->
        <div v-else class="text-center text-gray-500">Belum ada pengajuan pendaftaran anggota.</div>

        <!-- Pagination Controls -->
        <div class="flex justify-center mt-6 space-x-4">
          <button 
            @click="changePage(currentPage - 1)" 
            :disabled="currentPage === 1" 
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          <span class="text-lg font-semibold">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button 
            @click="changePage(currentPage + 1)" 
            :disabled="currentPage === totalPages" 
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal for ID Card generation -->
  <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
    <div class="bg-white p-6 rounded-lg w-96 max-w-lg shadow-lg">
      <h3 class="text-xl font-semibold mb-4">Generate ID Card Provinsi</h3>
      <p><strong>Nama:</strong> {{ selectedPendaftaran.nama }}</p>
      <p><strong>Jenis Anggota:</strong> {{ selectedPendaftaran.anggotaType }}</p>

      <!-- Form for ID card details -->
      <div class="space-y-4 mb-4">
        <input v-model="nama" placeholder="Nama" class="input-field w-full" />
        <input v-model="id" placeholder="ID" class="input-field w-full" />
        <input v-model="jabatan" placeholder="Jabatan" class="input-field w-full" />
        <input v-model="alamat" placeholder="Alamat" class="input-field w-full" />
      </div>

      <!-- Button for generating ID Card -->
      <button @click="generatePdf" class="mt-4 w-full bg-[#03a980] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#028a66] transition">
        Generate ID Card
      </button>

      <button @click="closeModal" class="mt-2 w-full bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition">
        Close
      </button>
    </div>
  </div>
</template>

<script>
import NavbarUser from '@/components/NavbarUser.vue';

export default {
  components: {
    NavbarUser
  },
  data() {
    return {
      searchQuery: '',  // Search query for the input field
      statusFilter: 'Diproses', // Default status filter
      currentPage: 1,  // Current page for pagination
      perPage: 20,  // Number of items per page
      pendaftaranData: [
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
      {
        nama: "Alice Cooper",
        nik: "9876543210987654",
        provinsi: "DKI Jakarta",
        kotaKabupaten: "Jakarta Selatan",
        instansi: "LPKNI Jakarta",
        anggotaType: "Provinsi",
        jabatan: "Anggota Tim",
        status: "Ditolak",
        foto3x4Url: "https://via.placeholder.com/150",
        fotoKtpUrl: "https://via.placeholder.com/150"
      },
      {
        nama: "Bob Marley",
        nik: "1239874560123456",
        provinsi: "Bali",
        kotaKabupaten: "Denpasar",
        instansi: "LPKNI Bali",
        anggotaType: "Provinsi",
        jabatan: "Anggota Sekretariat",
        status: "Diproses",
        foto3x4Url: "https://via.placeholder.com/150",
        fotoKtpUrl: "https://via.placeholder.com/150"
      },
      {
        nama: "Charlie Brown",
        nik: "1112223334445555",
        provinsi: "Jawa Tengah",
        kotaKabupaten: "Semarang",
        instansi: "LPKNI Semarang",
        anggotaType: "KotaKabupaten",
        jabatan: "Anggota Komite",
        status: "Disetujui",
        foto3x4Url: "https://via.placeholder.com/150",
        fotoKtpUrl: "https://via.placeholder.com/150"
      },
      {
        nama: "David Jones",
        nik: "9876543212345678",
        provinsi: "Banten",
        kotaKabupaten: "Tangerang",
        instansi: "LPKNI Tangerang",
        anggotaType: "Provinsi",
        jabatan: "Anggota Tim",
        status: "Ditolak",
        foto3x4Url: "https://via.placeholder.com/150",
        fotoKtpUrl: "https://via.placeholder.com/150"
      },
      {
        nama: "Eve Adams",
        nik: "2345678901234567",
        provinsi: "Sumatera Utara",
        kotaKabupaten: "Medan",
        instansi: "LPKNI Medan",
        anggotaType: "Provinsi",
        jabatan: "Anggota Direktorat",
        status: "Diproses",
        foto3x4Url: "https://via.placeholder.com/150",
        fotoKtpUrl: "https://via.placeholder.com/150"
      },
      {
        nama: "Frank Ocean",
        nik: "5678901234567890",
        provinsi: "Sulawesi Selatan",
        kotaKabupaten: "Makassar",
        instansi: "LPKNI Makassar",
        anggotaType: "KotaKabupaten",
        jabatan: "Anggota Komite",
        status: "Diproses",
        foto3x4Url: "https://via.placeholder.com/150",
        fotoKtpUrl: "https://via.placeholder.com/150"
      },
      {
        nama: "Grace Kim",
        nik: "8765432109876543",
        provinsi: "Yogyakarta",
        kotaKabupaten: "Kota Yogyakarta",
        instansi: "LPKNI Yogyakarta",
        anggotaType: "Provinsi",
        jabatan: "Anggota Sekretariat",
        status: "Disetujui",
        foto3x4Url: "https://via.placeholder.com/150",
        fotoKtpUrl: "https://via.placeholder.com/150"
      },
      {
        nama: "Hannah Lee",
        nik: "4321098765432109",
        provinsi: "Lampung",
        kotaKabupaten: "Bandar Lampung",
        instansi: "LPKNI Lampung",
        anggotaType: "KotaKabupaten",
        jabatan: "Anggota Tim",
        status: "Ditolak",
        foto3x4Url: "https://via.placeholder.com/150",
        fotoKtpUrl: "https://via.placeholder.com/150"
      }
      ]
    };
  },
  computed: {
    filteredRiwayat() {
      return this.pendaftaranData
        .filter(item => item.status === this.statusFilter) // Filter by status
        .filter(item => 
          item.nama.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
          item.nik.includes(this.searchQuery) || 
          item.jabatan.toLowerCase().includes(this.searchQuery.toLowerCase()) // Filter by name, NIK or jabatan
        );
    },
    totalPages() {
      return Math.ceil(this.filteredRiwayat.length / this.perPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.filteredRiwayat.slice(start, end);
    }
  },
  methods: {
    setStatusFilter(status) {
      this.statusFilter = status;
      this.currentPage = 1; // Reset to first page when filter changes
    },
    getStatusClass(status) {
      switch (status) {
        case "Diproses": return "text-yellow-500";
        case "Disetujui": return "text-green-500";
        case "Ditolak": return "text-red-500";
        default: return "text-gray-500";
      }
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    openModal(pendaftaran) {
      this.selectedPendaftaran = pendaftaran;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    generateIdCardLink(pendaftaran) {
      if (pendaftaran.status === "Disetujui") {
        if (pendaftaran.anggotaType === "Provinsi") {
          this.$router.push('/user/generate-id-card');
        } else {
          console.log("User tidak disetujui untuk mencetak ID card.");
        }
      } else {
        alert('Pendaftaran Anda belum disetujui. Anda tidak dapat mencetak ID Card.');
      }
    },
    async generatePdf() {
      // Implement PDF generation logic here
    }
  }
};
</script>

<style scoped>
/* Styling for the search input */
.input-field {
  @apply p-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#03a980];
}

/* Styling for table and columns */
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

/* Responsiveness for smaller screens */
@media (max-width: 768px) {
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

  img {
    width: 50px;
    height: 50px;
  }

  button {
    font-size: 14px;
    padding: 10px 18px;
  }

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
