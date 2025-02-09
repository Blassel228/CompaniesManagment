import axios from "axios";
import useAuth from "../Features/Authentication/useAuth";


const baseApi = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});


export const handleTokenRefreshError = async (error: any) => {
  const {refreshAccessToken} = useAuth();
  if (error.response && error.response.status === 401 && error.response.data.detail === "Token expired") {
    const newAccessToken = await refreshAccessToken();
    if (newAccessToken) {
      error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return baseApi(error.config);
    }
  }
  return Promise.reject(error);
};


baseApi.interceptors.response.use(
  (response) => response,
  async (error) => handleTokenRefreshError(error)
);


export default baseApi;