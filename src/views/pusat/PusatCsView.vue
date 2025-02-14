<template>
    <div class="w-screen min-h-screen flex flex-col bg-gray-100">
      <NavbarPusat />
  
      <div class="p-8 mt-[100px]">
        <div class="bg-white p-6 rounded-lg shadow">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Manajemen Chat Pusat</h2>
          </div>
  
          <div class="flex border rounded-lg overflow-hidden h-[600px]">
            <!-- Sidebar Chat List -->
            <div class="w-1/3 bg-gray-50 border-r overflow-y-auto">
              <div class="p-4 border-b flex items-center gap-2">
                <input type="text" v-model="searchQuery" class="w-full p-2 border rounded" placeholder="Cari chat..." />
              </div>
              <ul>
                <li 
                  v-for="chat in filteredChatList" 
                  :key="chat.id" 
                  class="p-4 border-b flex items-center gap-3 cursor-pointer hover:bg-gray-100"
                  @click="selectChat(chat)"
                >
                  <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div class="flex-grow">
                    <h3 class="font-semibold">{{ chat.name }}</h3>
                    <p class="text-sm text-gray-600">{{ chat.lastMessage }}</p>
                  </div>
                  <button @click.stop="deleteChat(chat.id)" class="text-red-500">✖</button>
                </li>
              </ul>
            </div>
  
            <!-- Chat Content -->
            <div class="w-2/3 bg-gray-100 flex flex-col">
              <div v-if="activeChat" class="flex-grow overflow-y-auto p-4">
                <h3 class="text-lg font-bold text-gray-700 mb-4">{{ activeChat.name }}</h3>
                <div v-for="message in activeChat.messages" :key="message.id" class="mb-4">
                  <div v-if="message.sender === 'pusat'" class="flex justify-end">
                    <div class="bg-green-600 text-white p-3 rounded-lg max-w-xs">{{ message.text }}</div>
                  </div>
                  <div v-else class="flex items-center gap-2">
                    <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div class="bg-white p-3 rounded-lg max-w-xs">{{ message.text }}</div>
                  </div>
                </div>
              </div>
  
              <!-- Jika tidak ada chat yang dipilih -->
              <div v-else class="flex-grow flex items-center justify-center text-gray-500">
                Pilih percakapan untuk melihat isi chat.
              </div>
  
              <!-- Message Input -->
              <div v-if="activeChat" class="p-4 bg-white flex items-center gap-2 border-t">
                <input type="text" v-model="newMessage" class="w-full p-2 border rounded" placeholder="Ketik pesan..." @keyup.enter="sendMessage" />
                <button @click="sendMessage" class="bg-green-600 text-white px-4 py-2 rounded">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavbarPusat from '@/components/NavbarPusat.vue';
  
  export default {
    components: {
      NavbarPusat,
    },
    data() {
      return {
        searchQuery: '',
        chatList: [
          { id: 1, name: 'Admin Wilayah 1', lastMessage: 'Update data pengguna?', messages: [{ sender: 'admin', text: 'Halo, pusat!', id: 1 }] },
          { id: 2, name: 'Admin Wilayah 2', lastMessage: 'Kami butuh konfirmasi', messages: [{ sender: 'admin', text: 'Ada yang perlu diverifikasi?', id: 2 }] },
          { id: 3, name: 'User - Fadli', lastMessage: 'Kapan sertifikat saya keluar?', messages: [{ sender: 'user', text: 'Kapan sertifikat saya bisa diambil?', id: 3 }] }
        ],
        activeChat: null,
        newMessage: '',
      };
    },
    computed: {
      filteredChatList() {
        return this.chatList.filter(chat => chat.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
    },
    methods: {
      selectChat(chat) {
        this.activeChat = chat;
      },
      sendMessage() {
        if (this.newMessage.trim() !== '' && this.activeChat) {
          this.activeChat.messages.push({ id: Date.now(), sender: 'pusat', text: this.newMessage });
          this.activeChat.lastMessage = this.newMessage;
          this.newMessage = '';
        }
      },
      deleteChat(chatId) {
        this.chatList = this.chatList.filter(chat => chat.id !== chatId);
        if (this.activeChat && this.activeChat.id === chatId) {
          this.activeChat = null;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling untuk chat */
  </style>
  