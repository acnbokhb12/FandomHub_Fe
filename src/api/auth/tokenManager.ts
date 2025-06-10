import { useAuthHeader, useSignIn } from 'react-auth-kit';
import { authService } from '@/api';

export const getAuthHeader = () => {
    const getToken = useAuthHeader();
    const token = getToken();
    return token ? `Bearer ${token}` : '';
};


export const handleRefreshToken = async (): Promise<boolean> => {  
  const signIn = useSignIn();

    try {
        const res = await authService.refreshToken();
        if (res?.success) {
            signIn({
                token: res.data.token,
                refreshToken: res.data.refreshToken,
                expiresIn: 3600,
                tokenType: 'Bearer',
                authState: { user: res.data.user }
            });
            return true;
        }
    } catch {
        return false;
    }

    return false;
};
