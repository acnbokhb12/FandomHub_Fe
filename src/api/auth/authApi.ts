import {axiosInstance, API_ENDPOINTS, SigninPayload, AuthResponse, RegisterPayLoad} from '@/api';

export const authApi = {
  sigin: async (payload: SigninPayload): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>(
      API_ENDPOINTS.AUTH.SIGIN,
      payload
    );  
    return response.data ;   
  },
  register: async (payload: RegisterPayLoad): Promise<AuthResponse> =>{
    const response = await axiosInstance.post<AuthResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      payload
    );  
    return response.data;  
  }
};