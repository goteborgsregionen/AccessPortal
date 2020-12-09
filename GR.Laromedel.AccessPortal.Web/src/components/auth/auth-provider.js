import React from 'react';
import { AuthProvider } from 'oidc-react';
import { oidcConfig } from '../../config/oidcconfig';
import { useHistory } from 'react-router-dom';

export default function AuthContainer({ children }) {
  let history = useHistory();

  return (
    <AuthProvider {...oidcConfig} onSignIn={(user) => history.push('/atkomstportalen')}>
      {children}
    </AuthProvider>
  );
}
