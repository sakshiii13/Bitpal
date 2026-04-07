import axios from "axios";
import store from "../redux/store";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";

export const mainContant = {
  appName: "Charity",
  logo: logo,
  appURL: "",
  contactNo: "+91 7069555773",
  email: "hkudarha@gmail.com",
  address: "Navsari bilimora Gujarat, India - 396321",
};

export const backendConfig = {
  // base: "http://192.168.29.89:5173/api",
  // origin: "http://192.168.29.89:5173",


  base: "https://api.charity.starchainlabs.online/api",
  origin: "https://api.charity.starchainlabs.online",
};

export const Axios = axios.create({
  baseURL: backendConfig.base,
});

Axios.interceptors.request.use(
  (config) => {
    const state = store.getState();

    let token =
      state?.auth?.token ||
      localStorage.getItem("adminToken") ||
      localStorage.getItem("userToken") ||
      localStorage.getItem("ngoToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      const currentPath = window.location.pathname;

      const urlParams = new URLSearchParams(window.location.search);

      Swal.fire({
        icon: "error",
        title: "Session Expired",
        text: "User session expired.",
      }).then(() => {
        window.location.href = "/login";
      });
    }

    return Promise.reject(error);
  },
);
