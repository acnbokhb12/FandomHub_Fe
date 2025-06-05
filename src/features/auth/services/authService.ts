import axios from '@/api/axiosInstance';
import { SigninPayload } from '@/features/auth/types';

export const signin = async(payload : SigninPayload) => {
    const res = await axios.post('/auth/signin', payload);  
    return res.data;
}