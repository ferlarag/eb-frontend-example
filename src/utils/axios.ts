import axios from "axios";

const axiosBackend = axios.create({
  baseURL: "https://www.wallet-wise.cloud/api",
});

export default axiosBackend;
