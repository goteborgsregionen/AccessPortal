import React from 'react';
import { ThemeContext } from '../utilities/themeContext';
import { oidcConfig } from '../config/oidcconfig';
export default function Layout({ children }) {
  const { setTheme } = React.useContext(ThemeContext);
  const key = JSON.parse(
    sessionStorage.getItem(`oidc.user:${oidcConfig.authority}:${oidcConfig.clientId}`),
  );
  const isStudent = key.profile.role === 'Student';

  React.useEffect(() => {
    setTheme(isStudent ? 'student' : 'base');
  }, []);
  return <div className="bg-primary  min-h-screen">{children}</div>;
}
