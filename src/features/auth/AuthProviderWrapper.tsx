import React from 'react';
import { AuthProvider } from 'react-auth-kit';

type Props = {
    children: React.ReactNode;
};

const AuthProviderWrapper = ({ children }: Props) => {

    return (
        <AuthProvider
            authType={'localstorage'}      
            authName={'_auth'}            
                
        >
            {children}
        </AuthProvider>
    )
}
export default AuthProviderWrapper;