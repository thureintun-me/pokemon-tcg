import axios from "axios";

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_POKEMON_URL,
  timeout: 5000, // Optional: Set timeout for requests
  headers: {
    "Content-Type": "application/json",
    // You can add other common headers here, like Authorization
  },
  timeoutErrorMessage: "The request timed out. Please try again later.",
});

// Interceptors (Optional): Add request/response interceptors if needed
axiosInstance.interceptors.request.use(
  (config) => {
    const apiKey = process.env.EXPO_PUBLIC_POKEMON_KEY;
    if (apiKey) {
      config.headers["x-api-key"] = apiKey; // or use 'Authorization' if needed
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    console.error("API call error: ", error.response);
    return Promise.reject(error);
  },
);

export default axiosInstance;
