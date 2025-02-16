<template>
    <div class="w-screen bg-gray-100 mt-12">
      <NavbarUser />
      <div class="flex flex-col items-center p-4 sm:p-6 md:p-10 bg-gray-100 flex-grow">
        <div class="bg-white w-full max-w-4xl p-4 sm:p-6 rounded-lg shadow-md">
          <h2 class="text-xl sm:text-2xl font-semibold text-[#03a980] text-center mb-4 sm:mb-6">Tanggapan Pengaduan</h2>
  
          <input v-model="searchQuery" type="text" placeholder="Cari berdasarkan nama..." class="mb-4 p-2 border border-gray-300 rounded-md w-full">
  
          <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
            <button @click="prevPage" :disabled="currentPage === 1" class="p-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50">Previous</button>
            <span class="my-2 sm:my-0">Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="p-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50">Next</button>
          </div>
  
          <div v-if="filteredComplaints.length > 0" class="space-y-4">
            <div v-for="(complaint, index) in paginatedComplaints" :key="index" class="p-4 bg-gray-50 rounded-lg shadow-md border border-gray-300">
              <p><strong>ID Pengaduan:</strong> {{ complaint.id }}</p>
              <p><strong>Nama Pengadu:</strong> {{ complaint.namapengadu }}</p>
              <p><strong>Judul:</strong> {{ complaint.judul }}</p>
              <p><strong>Status:</strong> <span :class="getStatusClass(complaint.status)">{{ complaint.status }}</span></p>
              <p v-if="complaint.tanggapan" class="mt-2"><strong>Tanggapan:</strong> {{ complaint.tanggapan }}</p>
              <p v-else class="text-gray-500">Belum ada tanggapan.</p>
            </div>
          </div>
          <div v-else class="text-center text-gray-500">Tidak ada pengaduan yang ditemukan.</div>
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
        complaints: [
          { id: "001", namapengadu: "Tatsss", judul: "Keterlambatan Sertifikat", status: "Diproses", tanggapan: "Pengaduan Anda sedang kami proses. Harap bersabar." },
          { id: "002", namapengadu: "arya", judul: "Fasilitas Tidak Memadai", status: "Disetujui", tanggapan: "Terima kasih atas laporan Anda. Fasilitas akan segera diperbaiki." },
          { id: "002", namapengadu: "arya", judul: "Fasilitas Tidak Memadai", status: "Disetujui", tanggapan: "Terima kasih atas laporan Anda. Fasilitas akan segera diperbaiki." },
          { id: "002", namapengadu: "arya", judul: "Fasilitas Tidak Memadai", status: "Disetujui", tanggapan: "Terima kasih atas laporan Anda. Fasilitas akan segera diperbaiki." },
          { id: "002", namapengadu: "arya", judul: "Fasilitas Tidak Memadai", status: "Disetujui", tanggapan: "Terima kasih atas laporan Anda. Fasilitas akan segera diperbaiki." },
          { id: "002", namapengadu: "arya", judul: "Fasilitas Tidak Memadai", status: "Disetujui", tanggapan: "Terima kasih atas laporan Anda. Fasilitas akan segera diperbaiki." },
          { id: "002", namapengadu: "arya", judul: "Fasilitas Tidak Memadai", status: "Disetujui", tanggapan: "Terima kasih atas laporan Anda. Fasilitas akan segera diperbaiki." },
        ],
        searchQuery: '',
        currentPage: 1,
        itemsPerPage: 30
      };
    },
    computed: {
      filteredComplaints() {
        return this.complaints.filter(complaint =>
          complaint.namapengadu.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      totalPages() {
        return Math.ceil(this.filteredComplaints.length / this.itemsPerPage);
      },
      paginatedComplaints() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        return this.filteredComplaints.slice(start, start + this.itemsPerPage);
      }
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
      nextPage() {
        if (this.currentPage < this.totalPages) this.currentPage++;
      },
      prevPage() {
        if (this.currentPage > 1) this.currentPage--;
      }
    }
  };
  </script>

<style scoped>
@media (max-width: 640px) {
  h2 { font-size: 1.25rem; }
  .p-4 { padding: 1rem; }
}
@media (min-width: 641px) and (max-width: 1024px) {
  h2 { font-size: 1.5rem; }
  .p-4 { padding: 1.5rem; }
}
@media (min-width: 1025px) {
  h2 { font-size: 2rem; }
  .p-4 { padding: 2rem; }
}

/* Tambahan untuk responsivitas */
.space-y-4 > * {
  @apply w-full;
}

@media (max-width: 768px) {
  .p-4 { padding: 1rem; }
}
</style>
