import { useSignIn, useSignOut, useAuthUser } from 'react-auth-kit';
import { authService } from '@/api';
import { SigninPayload, RegisterPayLoad } from '@/api';
import { useState } from 'react';

export const useAuth = () => {
    const signIn = useSignIn();
    const signOut = useSignOut();
    const authUser = useAuthUser();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const sigin = async (data: SigninPayload) => {
        try {
            const res = await authService.signin(data);
            console.log(res.success)
            if (res.success) {
                const { token, refreshToken, user } = res.data;
                const success = signIn({
                    token,
                    expiresIn: 7200, // ví dụ 2h
                    tokenType: 'Bearer',
                    authState: { user },
                    refreshToken,
                });
                if (success) {
                    localStorage.setItem('refreshToken', refreshToken); 
                }
                return true;
            } else {
                setErrorMessage(res.message || 'Login failed');
                return false;
            }
        } catch (error) {
            setErrorMessage('An unexpected error occurred.');
            return false;
        }
    };

    const register = async (data: RegisterPayLoad) => {
        try {
            const res = await authService.register(data);
            if (res.success) {
                const { token, refreshToken, user } = res.data;
                const success = signIn({
                    token,
                    expiresIn: 7200,
                    tokenType: 'Bearer',
                    authState: { user },
                    refreshToken,
                });
                if (success) {
                    localStorage.setItem('refreshToken', refreshToken); 
                }
                return true;
            } else {
                setErrorMessage(res.message || 'Register failed');
                return false;
            }
        } catch {
            setErrorMessage('An unexpected error occurred.');
            return false;
        }
    };

    const logout = () => {
        signOut();
        sessionStorage.removeItem('refreshToken');
    };

    return { sigin, logout, register, errorMessage };
}

