import React from 'react';
import { useAuth } from 'oidc-react';

export default () => {
    const auth = useAuth();

    return (
        <>
            {auth.userData &&
                <button
                    onClick={() => auth.signOutRedirect()}
                    className="mb-2 flex-none bg-cover bg-center rounded shadow p-2">
                    Logga ut
                </button>}
        </>
    );
}