<template>
  <footer class="bg-[#028a66] text-white px-6 sm:px-12 lg:px-[72px] py-8 sm:py-12 mt-12 w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Copyright Section -->
      <div class="text-center sm:text-left">
        <p class="text-sm sm:text-base">© 2024 LPKNI.</p>
      </div>

      <!-- Telusuri Section -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold mb-4">Telusuri</h4>
        <ul class="text-sm sm:text-base space-y-2">
          <li>Beranda</li>
          <li>Kesehatan</li>
          <li>Otomotif</li>
          <li>Olahraga</li>
          <li>Nasional</li>
          <li>Internasional</li>
        </ul>
      </div>

      <!-- Bantuan Section -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold mb-4">Bantuan</h4>
        <ul class="text-sm sm:text-base space-y-2">
          <li><a href="/chat" class="hover:underline">Kontak Kami</a></li>
          <li>Laporan Pembajakan</li>
          <li>Kebijakan</li>
          <li><a href="/tentang-kami" class="hover:underline">Tentang Kami</a></li>
        </ul>
      </div>

      <!-- Berlangganan Section -->
      <div>
        <h4 class="text-lg sm:text-xl font-semibold mb-4">Berlangganan Berita Terbaru</h4>
        <input type="email" placeholder="Masukkan email" class="w-full p-2 text-black rounded-md mb-2" />
        <button class="w-full bg-[#03a980] hover:bg-[#028a66] p-2 rounded-md transition">Kirim</button>
      </div>
    </div>
  </footer>
</template>

<script>
</script>

<style scoped>
/* Optional additional styles for hover effects */
a:hover {
  text-decoration: underline;
}
</style>