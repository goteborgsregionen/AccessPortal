import React from 'react';
import Login from '../login';
import { useAuth } from 'oidc-react';

const CommonInfoBox = ({ children }) => {
  const auth = useAuth();

  return auth ? (
    <div className="common-box">{children}</div>
  ) : (
    <div className="login-box">
      {children}
      <Login />
    </div>
  );
};

export default CommonInfoBox;
