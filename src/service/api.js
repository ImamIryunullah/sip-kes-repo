
import axios from "axios";

const baseURL = "http://192.168.1.35:5000/";

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

  };
  