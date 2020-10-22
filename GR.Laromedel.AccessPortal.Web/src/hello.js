import React from 'react';
import { useAuth } from 'oidc-react';

export default () => {
    const auth = useAuth();

    return (
        <>
            {auth.userData && <p>Hej {auth.userData.profile.name}! Välkommen till Åtkomstportalen! Här har vi samlat alla dina digitala lärresurser.</p>}
        </>
    );
}