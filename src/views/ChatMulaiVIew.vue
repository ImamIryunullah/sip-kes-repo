<template>
  <div class="w-screen h-screen flex flex-col bg-gray-100">
    <!-- Navbar -->
    <NavbarUser />

    <!-- Pilihan Tujuan Kontak -->
    <div v-if="!contactChoice" class="flex flex-col justify-center items-center p-8 space-y-6">
      <h3 class="text-xl font-semibold">Ingin Menghubungi Siapa</h3>
      <div class="space-x-4 md:space-x-6">
        <button 
          @click="selectContact('admin')" 
          class="px-6 py-2 bg-[#03a980] text-white rounded-lg hover:bg-[#028a66]">
          Hubungi Admin
        </button>
        <button 
          @click="selectContact('pusat')" 
          class="px-6 py-2 bg-[#03a980] text-white rounded-lg hover:bg-[#028a66]">
          Hubungi Pusat
        </button>
      </div>
    </div>

    <!-- Informasi Sebelum Memulai Percakapan -->
    <div v-if="contactChoice" class="flex flex-col justify-center items-center p-8 space-y-6">
      <h3 class="text-xl font-semibold">Silakan pilih kalimat untuk memulai percakapan:</h3>
      <div v-if="contactChoice === 'admin'" class="text-center text-gray-500">
        <p>Hubungi Admin untuk masalah akun atau pertanyaan teknis terkait layanan kami. Admin akan merespon secepatnya.</p>
        <img src="https://via.placeholder.com/150" alt="Admin" class="mt-4 rounded-full w-32 h-32 object-cover" />
      </div>
      <div v-if="contactChoice === 'pusat'" class="text-center text-gray-500">
        <p>Hubungi Pusat untuk pertanyaan umum atau informasi terkait layanan kami. Tim Pusat siap membantu Anda.</p>
        <img src="https://via.placeholder.com/150" alt="Pusat" class="mt-4 rounded-full w-32 h-32 object-cover" />
      </div>
      <div class="space-x-4 md:space-x-6">
        <button 
          v-for="(option, index) in messageOptions" 
          :key="index" 
          @click="startChat(option)" 
          class="px-6 py-2 bg-[#03a980] text-white rounded-lg hover:bg-[#028a66]">
          {{ option }}
        </button>
      </div>
    </div>

    <!-- Chat Container -->
    <div v-if="contactChoice" class="flex flex-col flex-grow p-4 overflow-y-auto" ref="chatContainer">
      <div v-for="(message, index) in messages" :key="index" class="mb-4 flex" :class="{'justify-end': message.isUser}">
        <div class="max-w-[75%] md:max-w-[60%] p-3 rounded-lg shadow-md" :class="message.isUser ? 'bg-[#03a980] text-white' : 'bg-white'">
          <p class="text-sm">{{ message.text }}</p>
          <p class="text-xs text-gray-400 mt-1 text-right">{{ message.time }}</p>
        </div>
      </div>
    </div>

    <!-- Input Chat -->
    <div v-if="contactChoice" class="flex items-center bg-white p-3 border-t">
      <input 
        v-model="newMessage" 
        type="text" 
        placeholder="Ketik pesan..." 
        class="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a980]"
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage" class="ml-2 px-4 py-2 bg-[#03a980] text-white rounded-lg hover:bg-[#028a66] transition">
        Kirim
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
      newMessage: "",
      messages: [
        { text: "Halo! Ada yang bisa dibantu?", time: this.getCurrentTime(), isUser: false }
      ],
      contactChoice: null, // Menyimpan pilihan kontak: 'admin' atau 'pusat'
      messageOptions: [] // Menyimpan pilihan kalimat untuk memulai chat
    };
  },
  methods: {
    // Fungsi untuk memilih tujuan kontak
    selectContact(contact) {
      this.contactChoice = contact;
      if (contact === "admin") {
        this.messageOptions = [
          "Saya ingin bertanya tentang akun saya.",
          "Saya mengalami kesulitan teknis.",
          "Ada masalah dengan layanan."
        ];
      } else if (contact === "pusat") {
        this.messageOptions = [
          "Saya ingin melaporkan masalah.",
          "Saya ingin tahu informasi terbaru.",
          "Ada pertanyaan tentang layanan."
        ];
      }
    },
    // Fungsi untuk memulai chat dengan memilih kalimat
    startChat(option) {
      this.messages.push({ text: option, time: this.getCurrentTime(), isUser: true });
      setTimeout(() => {
        this.messages.push({ text: "Terima kasih, kami akan segera memproses permintaan Anda.", time: this.getCurrentTime(), isUser: false });
        this.scrollToBottom();
      }, 1000);
      this.scrollToBottom();
    },
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({ text: this.newMessage, time: this.getCurrentTime(), isUser: true });
        setTimeout(() => {
          this.messages.push({ text: "Admin sedang online, harap tunggu sebentar.", time: this.getCurrentTime(), isUser: false });
          this.scrollToBottom();
        }, 1000);
        this.newMessage = "";
        this.scrollToBottom();
      }
    },
    getCurrentTime() {
      const now = new Date();
      return now.getHours() + ":" + now.getMinutes().toString().padStart(2, "0");
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const chatContainer = this.$refs.chatContainer;
        if (chatContainer) {
          chatContainer.scrollTop = chatContainer.scrollHeight;
        }
      });
    },
    goBack() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
/* Responsif untuk layar kecil */
@media screen and (max-width: 768px) {

  .space-x-4 {
    flex-direction: column;
    gap: 10px;
  }

  .text-xl {
    font-size: 1.25rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .p-4 {
    padding: 0.75rem;
  }

  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
