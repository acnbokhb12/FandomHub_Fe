import {axiosInstance, API_ENDPOINTS, SigninPayload, SigninResponse} from '@/api';

export const authApi = {
  sigin: async (payload: SigninPayload): Promise<SigninResponse> => {
    const response = await axiosInstance.post<SigninResponse>(
      API_ENDPOINTS.AUTH.SIGIN,
      payload
    ); 
    console.log(response.data)
    return response.data;   
  },
};