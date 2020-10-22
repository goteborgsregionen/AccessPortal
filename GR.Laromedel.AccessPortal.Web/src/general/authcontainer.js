import React from 'react';
import { useAuth } from 'oidc-react';

export default function AuthContainer({ children }) {
    const auth = useAuth();

    return (
        <>
            {auth.userData && children}
        </>
    );
}