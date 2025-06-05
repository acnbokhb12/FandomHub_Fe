import React from 'react';
import { AuthProvider } from 'react-auth-kit';

type Props = {
    children: React.ReactNode;
};

const AuthProviderWrapper = ({ children }: Props) => {

    return (
        <AuthProvider
            authType={'localstorage'}        // hoặc 'cookie'
            authName={'_auth'}               // tên key lưu token
            // cookieDomain={window.location.hostname}
            // cookieSecure={false}             
        >
            {children}
        </AuthProvider>
    )
}
export default AuthProviderWrapper;