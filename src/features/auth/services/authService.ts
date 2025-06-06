import axios from '@/api/axiosInstance';
import { SigninResponse, SigninPayload } from '@/features/auth/types';

export const signinService = async(payload : SigninPayload) : Promise<SigninResponse> => {
    try{
        const res = await axios.post('/auth/signin', payload);  
        return {
            success: res.data.success,
            data: {
                token: res.data.data.token,
                user: res.data.data.user
            }
        };
    }catch (error : any) {
        return {
           success: error.response?.data?.success || false,
            message: error.response?.data?.message || 'An error occurred during sign-in.'
        }
    } 
}