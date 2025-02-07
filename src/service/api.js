
import axios from "axios";

const baseURL = "http://192.168.1.35:5000/api";

const API = axios.create({
  baseURL: baseURL
});

// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
export default {
    postLogin(datass) {
      return axios.post(`${baseURL}/login`, datass)
    },
    // Obat management
    getObat() {
      return API.get(`${baseURL}/obat`);
    },
    getObatId(id) {
      return API.get(`${baseURL}/obat/${id}`);
    },
    createObat(formData) {
      return API.post(`${baseURL}/obat`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    createBatchObat(obatList) {
      return API.post(
        `${baseURL}/obat/batch`,
        obatList,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    updateObat(id, obat) {
      return API.put(`${baseURL}/obat/${id}`, obat);
    },
    updateBatchObat(obatList) {
      return API.put(
        `${baseURL}/obat/batch_update`,
        obatList
      );
    },
    deleteObat(id) {
      return API.delete(`${baseURL}/obat/${id}`);
    },
    deleteBatchObat(ids) {
      return API.post(`${baseURL}/obat/batch_delete`, ids);
    },
  
    // Transaksi management
    createTransaksi(transaksi) {
      return API.post(`${baseURL}/transaksi`, transaksi);
    },
    getAllTransaksi() {
      return API.get(`${baseURL}/transaksi`);
    },
    getTransaksiByID(id) {
      return API.get(`${baseURL}/transaksi/${id}`);
    },
    updateTransaksi(id, transaksi) {
      return API.put(
        `${baseURL}/transaksi/${id}`,
        transaksi
      );
    },
    updateStatusTransaksi(id, transaksi) {
      return API.put(
        `${baseURL}/transaksistatus/${id}`,
        transaksi, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    deleteTransaksi(id) {
      return API.delete(`${baseURL}/transaksi/${id}`);
    },
    createBatchTransaksi(transaksiList) {
      return API.post(
        `${baseURL}/transaksi/batch_create`,
        transaksiList
      );
    },
    updateBatchTransaksi(transaksiList) {
      return API.put(
        `${baseURL}/transaksi/batch_update`,
        transaksiList
      );
    },
    deleteBatchTransaksi(ids) {
      return API.post(
        `${baseURL}/transaksi/batch_delete`,
        ids
      );
    },
  
    // Stok management
    createStok(stok) {
      return API.post(`${baseURL}/stok`, stok);
    },
    getAllStok() {
      return API.get(`${baseURL}/stok`);
    },
    getStokByID(id) {
      return API.get(`${baseURL}/stok/${id}`);
    },
    updateStok(id, stok) {
      return API.put(`${baseURL}/stok/update/${id}`, stok);
    },
    CreateStokTransaksi(id, stok) {
      return API.post(`${baseURL}/stok/${id}/transaksi`, stok);
    },
    deleteStok(id) {
      return API.delete(`${baseURL}/stok/${id}`);
    },
  
    // Tag Obat management
    getAllTagObat() {
      return API.get(`${baseURL}/tag_obat`);
    },
    getTagObatByID(id) {
      return API.get(`${baseURL}/tag_obat/${id}`);
    },
    createTagObat(tagObat) {
      return API.post(`${baseURL}/tag_obat`, tagObat);
    },
    updateTagObat(id, tagObat) {
      return API.put(`${baseURL}/tag_obat/${id}`, tagObat);
    },
    deleteTagObat(id) {
      return API.delete(`${baseURL}/tag_obat/${id}`);
    },
  
    // Tipe Obat management
    getAllTipeObat() {
      return API.get(`${baseURL}/tipe_obat`);
    },
    getTipeObatByID(id) {
      return API.get(`${baseURL}/tipe_obat/${id}`);
    },
    createTipeObat(tipeObat) {
      return API.post(`${baseURL}/tipe_obat`, tipeObat);
    },
    updateTipeObat(id, tipeObat) {
      return API.put(
        `${baseURL}/tipe_obat/${id}`,
        tipeObat
      );
    },
    deleteTipeObat(id) {
      return API.delete(`${baseURL}/tipe_obat/${id}`);
    },
    createBatchTipeObat(tipeObatList) {
      return API.post(
        `${baseURL}/tipe_obat/batch_create`,
        tipeObatList
      );
    },
    updateBatchTipeObat(tipeObatList) {
      return API.put(
        `${baseURL}/tipe_obat/batch_update`,
        tipeObatList
      );
    },
    deleteBatchTipeObat(ids) {
      return API.post(
        `${baseURL}/tipe_obat/batch_delete`,
        ids
      );
    },
    getLaporanTransaksi() {
      return API.get(
        `${baseURL}/laporan/laporan-transaksi`
      );
    },
    getLaporanStok() {
      return API.get(`${baseURL}/laporan/laporan-stok`);
    },
    getLaporanLaba() {
      return API.get(
        `${baseURL}/laporan/laporan-labarugi`
      );
    },
  
  
    getAllPemasok() {
      return API.get(
        `${baseURL}/pemasok`
      );
    },
    CreatePemasok(pemasok) {
      return API.post(
        `${baseURL}/pemasok`, pemasok
      );
    },
    UpdatePemasok(id, pemasok) {
      return API.put(
        `${baseURL}/pemasok/${id}`, pemasok
      );
    },
    deletePemasok(id) {
      return API.delete(
        `${baseURL}/pemasok/${id}`
      );
    },
  
    createPelanggan(data) {
      return API.post(`${baseURL}/pelanggan`, data)
    },
    updatePelanggan(id, data) {
      return API.put(`${baseURL}/pelanggan/${id}`, data)
    },
    deletePelanggan(id) {
      return API.delete(`${baseURL}/pelanggan/${id}`)
    },
    getPelangganId(id) {
      return API.get(`${baseURL}/pelanggan/${id}`)
    },
    getAllPelanggan() {
      return API.get(`${baseURL}/pelanggan`)
    },
    getFullImgPath(img) {
      return `http://192.168.1.39:3000/${img}`;
    },
  };
  