import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL, // Use the correct environment variable here
});

export default axiosInstance;
