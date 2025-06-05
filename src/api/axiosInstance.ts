import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:7045'
});
export default instance;

// Add a response interceptor
instance.interceptors.response.use(
    function (response) { 
        return response;
    }, function (error) {
        return Promise.reject(error);
    });