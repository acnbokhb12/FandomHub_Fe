import { useSignIn, useSignOut, useAuthUser } from 'react-auth-kit';
import { authService } from '@/api';
import { SigninPayload, SigninResponse } from '@/api';
import { useState } from 'react';

export const useAuth = () => {
    const signIn = useSignIn();
    const signOut = useSignOut();
    const authUser = useAuthUser();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const sigin = async (data: SigninPayload) => {
        try {
            const res = await authService.signin(data);
            if (res.success) {
                const { token, refreshToken, user } = res.data;
                const success = signIn({
                    token,
                    expiresIn: 7200, // ví dụ 2h
                    tokenType: 'Bearer',
                    authState: { user },
                    refreshToken,
                });
                sessionStorage.setItem('refreshToken', refreshToken);
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

    const logout = () => {
        signOut();
        sessionStorage.removeItem('refreshToken');
    };

    return {sigin, logout, errorMessage};
}

