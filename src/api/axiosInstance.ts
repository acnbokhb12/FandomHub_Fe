import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';


const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://localhost:7045',  
  timeout: 10000, // Timeout 10s
  headers: {
    'Content-Type': 'application/json',
    // Nếu cần thêm token: 'Authorization': `Bearer ${token}`,
  },
}); 

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Thêm logic trước khi gửi request, ví dụ: thêm token
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data; // Trả về chỉ dữ liệu
  },
  (error) => {
    // Xử lý lỗi chung, ví dụ: 401, 403, 500
    if (error.response?.status === 401) {
      // Xử lý unauthorized, ví dụ: logout user 
    }
    return Promise.reject(error);
  }
);


export default axiosInstance;