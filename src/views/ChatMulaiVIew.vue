<template>
  <div class="w-screen h-screen flex flex-col bg-gray-100">
    <!-- Navbar -->
    <NavbarPortalView />

    <!-- Pilihan Kalimat untuk Memulai Percakapan -->
    <div class="flex flex-col justify-center items-center p-8 space-y-6">
      <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        <button 
          v-for="(option, index) in messageOptions" 
          :key="index" 
          @click="startChat(option, index)" 
          :disabled="option.sent"  
          class="px-6 py-2 bg-[#03a980] text-white rounded-lg hover:bg-[#028a66] w-full sm:w-auto">
          {{ option.text }}
        </button>
      </div>
    </div>

    <!-- Chat Container -->
    <div v-if="contactChoice" class="px-2 sm:px-6 py-4 flex flex-col flex-grow p-4 overflow-y-auto max-w-full w-full" ref="chatContainer">
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
import NavbarPortalView from '@/components/NavbarPortalView.vue';


export default {
  components: {
    NavbarPortalView
  },
  data() {
    return {
      newMessage: "",
      messages: [
        { text: "Halo! Ada yang bisa dibantu?", time: this.getCurrentTime(), isUser: false }
      ],
      contactChoice: true,  // langsung memulai chat
      messageOptions: [  // Menampilkan opsi percakapan langsung
        { text: "Saya ingin melaporkan masalah.", sent: false },
        { text: "Saya ingin tahu informasi terbaru.", sent: false },
        { text: "Ada pertanyaan tentang layanan.", sent: false }
      ]
    };
  },
  methods: {
    // Fungsi untuk memulai chat dengan memilih kalimat
    startChat(option, index) {
      if (!option.sent) {
        // Menambahkan pesan yang dipilih ke dalam chat
        this.messages.push({ text: option.text, time: this.getCurrentTime(), isUser: true });

        // Menandai opsi sebagai terkirim
        this.messageOptions[index].sent = true;

        // Menghapus dua opsi yang belum dipilih
        this.messageOptions = [];

        // Simulasi balasan dari admin
        setTimeout(() => {
          this.messages.push({ text: "Terima kasih, kami akan segera memproses permintaan Anda.", time: this.getCurrentTime(), isUser: false });
          this.scrollToBottom();
        }, 1000);

        this.scrollToBottom();
      }
    },
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.messages.push({ text: this.newMessage, time: this.getCurrentTime(), isUser: true });
        setTimeout(() => {
          this.messages.push({ text: "Kami akan segera membalas, harap tunggu sebentar.", time: this.getCurrentTime(), isUser: false });
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
    }
  }
};
</script>
