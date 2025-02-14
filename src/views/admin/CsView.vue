<template>
  <NavbarView />
  
  <div class="p-8 mt-[100px]">
    <div class="bg-gray-100 p-6 rounded-lg shadow">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Chat</h2>
      </div>
      <div class="flex border rounded-lg overflow-hidden h-[600px]">
        <!-- Sidebar Chat List -->
        <div class="w-1/3 bg-white border-r overflow-y-auto">
          <div class="p-4 border-b flex items-center gap-2">
            <input type="text" class="w-full p-2 border rounded" placeholder="Search..." />
          </div>
          <ul>
            <li v-for="chat in chatList" :key="chat.id" class="p-4 border-b flex items-center gap-3 cursor-pointer hover:bg-gray-100">
              <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div class="flex-grow">
                <h3 class="font-semibold">{{ chat.name }}</h3>
                <p class="text-sm text-gray-600">{{ chat.lastMessage }}</p>
              </div>
              <button @click="deleteChat(chat.id)" class="text-red-500">✖</button>
            </li>
          </ul>
        </div>
  
        <!-- Chat Content -->
        <div class="w-2/3 bg-green-100 flex flex-col">
          <div class="flex-grow overflow-y-auto p-4">
            <div v-for="message in messages" :key="message.id" class="mb-4">
              <div v-if="message.sender === 'me'" class="flex justify-end">
                <div class="bg-green-600 text-white p-3 rounded-lg max-w-xs">{{ message.text }}</div>
              </div>
              <div v-else class="flex items-center gap-2">
                <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div class="bg-white p-3 rounded-lg max-w-xs">{{ message.text }}</div>
              </div>
            </div>
          </div>
  
          <!-- Message Input -->
          <div class="p-4 bg-white flex items-center gap-2 border-t">
            <input type="text" v-model="newMessage" class="w-full p-2 border rounded" placeholder="Type a message..." />
            <button @click="sendMessage" class="bg-green-600 text-white px-4 py-2 rounded">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import NavbarView from '@/components/NavbarView.vue';

export default {
  components: {
    NavbarView,
  },
  data() {
    return {
      chatList: [
        { id: 1, name: 'Chatgram', lastMessage: 'Chatgram Web was updated.' },
        { id: 2, name: 'Jessica Drew', lastMessage: 'Ok, see you later' },
        { id: 3, name: 'David Moore', lastMessage: 'You: I don’t remember anything 😁' },
        { id: 4, name: 'Greg James', lastMessage: 'I got a job at SpaceX 🎉🚀' },
      ],
      messages: [
        { id: 1, sender: 'other', text: 'Dapur di pak muru kotor nih' },
        { id: 2, sender: 'me', text: 'Halo Permisi' },
        { id: 3, sender: 'me', text: 'Informasinya kami simpan' },
      ],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({ id: Date.now(), sender: 'me', text: this.newMessage });
        this.notifyUser('New message sent!');
        this.newMessage = '';
      }
    },
    deleteChat(chatId) {
      this.chatList = this.chatList.filter(chat => chat.id !== chatId);
      this.notifyUser('Chat deleted!');
    },
    notifyUser(message) {
      if (Notification.permission === 'granted') {
        new Notification(message);
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification(message);
          }
        });
      }
    }
  },
  mounted() {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }
};
</script>
