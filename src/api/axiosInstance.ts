// axiosInstance.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { handleRefreshToken } from '@/api';
import { useAuthHeader } from 'react-auth-kit';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:7045',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tạo một hàm để lấy token từ react-auth-kit
const getAuthToken = () => {
  try {
    const token = localStorage.getItem('_auth');
    if (token) {
      const parsedToken = JSON.parse(token);
      return parsedToken.token ? `Bearer ${parsedToken.token}` : null;
    }
    return null;
  } catch (error) {
    return null;
  }
};

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getAuthToken();
    if (token && config.headers) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error) => {
    if (!error.config) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;

    if (originalRequest.url && (originalRequest.url.includes('/auth/signin') || originalRequest.url.includes('/auth/register'))) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshSuccess = await handleRefreshToken();

      if (refreshSuccess) {
        const newToken = getAuthToken();
        if (originalRequest.headers && newToken) {
          originalRequest.headers.Authorization = newToken;
        }
        return axiosInstance(originalRequest);
      } else {
        window.location.href = '/signin';
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;