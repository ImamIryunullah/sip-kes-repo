<template>
    <div class="main-container">
        <div class="clip-path-group"></div>
        <div class="frame">
            <span class="already-have-account">Already have Account? Sign In now.</span>
            <button class="btn-sign-in-small" @click="redirectToSignIn">
                <span class="sign-in">SIGN IN</span>
            </button>
            <div class="clip-path-group-1"></div>
            <div class="clip-path-group-2"></div>
            <span class="swi">SWI</span>
        </div>
        <div class="clip-path-group-3"></div>
        <span class="swi-4">SWI</span>
        <span class="sign-up">Sign Up</span>
        <span class="provide-info">Please provide your information to sign up.</span>
        
        <form @submit.prevent="registerAdmin" enctype="multipart/form-data">
            <input v-model="admin.username" placeholder="Username" required />
            <input v-model="admin.email_admin" type="email" placeholder="Email" required />
            <input v-model="admin.password" type="password" placeholder="Password" required />
            <input v-model="admin.first_name" placeholder="First Name" required />
            <input v-model="admin.last_name" placeholder="Last Name" required />
            <input v-model="admin.kotakabupaten" placeholder="Kota/Kabupaten" required />
            <input v-model="admin.kotakabupaten" placeholder="Kota/Kabupaten" required />
            <input v-model="admin.nip" placeholder="NIP" required />
            <input type="file" @change="handleFileUpload" required />
            <button type="submit">SIGN UP</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            admin: {
                username: '',
                email_admin: '',
                password: '',
                first_name: '',
                last_name: '',
                kotakabupaten: '',
                nip: '',
            },
            suratIjinAkses: null,
        };
    },
    methods: {
        handleFileUpload(event) {
            this.suratIjinAkses = event.target.files[0];
        },
        async registerAdmin() {
            const formData = new FormData();
            Object.keys(this.admin).forEach(key => {
                formData.append(key, this.admin[key]);
            });
            if (this.suratIjinAkses) {
                formData.append('surat_ijin_akses', this.suratIjinAkses);
            }
            try {
                const response = await axios.post('http:localhost:5000/admin', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                alert(response.data.message);
            } catch (error) {
                alert(error.response?.data?.error || 'Registration failed');
            }
        },
        redirectToSignIn() {
            this.$router.push('/signin');
        }
    }
};
</script>
