// import { SigninResponse, SigninPayload } from '@/api/auth/authTypes';
import { authApi } from '@/api/auth/authApi';
import { SigninPayload, SigninResponse } from '@/api';

export const authService = {
    signin: async (payload: SigninPayload): Promise<SigninResponse> => {
        try {
            const response = await authApi.sigin(payload); 
            return response;
        } catch (error: any) { 
            return { 
                success: false,
                message: error.response?.data.message || 'An error occurred during sign-in.'
            };
        }
    },
}


// export const signinService = async(payload : SigninPayload) : Promise<SigninResponse> => {
//     try{
//         const res = await axiosInstance.post('/auth/signin', payload);
//         return {
//             success: res.data.success,
//             data: {
//                 token: res.data.data.token,
//                 user: res.data.data.user
//             }
//         };
//     }catch (error : any) {
//         return {
//            success: error.response?.data?.success || false,
//             message: error.response?.data?.message || 'An error occurred during sign-in.'
//         }
//     }
// }