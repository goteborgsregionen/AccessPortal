import React from 'react';
import { ThemeContext } from '../utilities/themeContext';
import { oidcConfig } from '../config/oidcconfig';
import '../index.scss';
import '../tailwind.css';

export default function Layout({ children }) {
  const { setTheme } = React.useContext(ThemeContext);  

  React.useEffect(() => {
    setTheme("base");
  }, []);
  return <div className="bg-primary min-h-screen">{children}</div>;
}
