// import { SigninResponse, SigninPayload } from '@/api/auth/authTypes';
import { authApi } from '@/api/auth/authApi';
import { SigninPayload, AuthResponse, RegisterPayLoad } from '@/api';

export const authService = {
    signin: async (payload: SigninPayload): Promise<AuthResponse> => {
        try {
            const response = await authApi.sigin(payload); 
            return response;
        } catch (error: any) {
            console.log(error)
            return {
                success: false,
                message: error.response?.data.message || 'An error occurred during sign-in.'
            };
        }
    },

    register: async (payload: RegisterPayLoad): Promise<AuthResponse> => {
        try {
            const response = await authApi.register(payload);
            return response;
        } catch (error: any) {
            return {
                success: false,
                message: error.response?.data?.message || 'An error occurred during registration.'
            };
        }
    },

    refreshToken: async (): Promise<AuthResponse | null> => {
        try {
            const oldRefreshToken = localStorage.getItem('refreshToken');
            if (!oldRefreshToken) return null ;

            const response = await authApi.refreshToken(oldRefreshToken);
 
            if (response.success && response.data?.token && response.data?.refreshToken) {
                localStorage.setItem('refreshToken', response.data.refreshToken);
                return response;
            }

            return null;
        } catch (error) {
            console.error('Error refreshing token:', error);
            return null;
        }
    }
} 