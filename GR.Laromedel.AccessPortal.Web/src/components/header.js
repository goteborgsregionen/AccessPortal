import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../assets/icons/search';
import logo from '../assets/images/gr_logo.png';
import logoWhite from '../assets/images/gr_logo_white.png';
import { useAuth } from 'oidc-react';
import { ThemeContext } from '../utilities/themeContext';

function WelcomeMessage({ name }) {
  return (
    <div className="welcome-message">
      <p>
        Hej {name}! Välkommen till Åtkomstportalen! Här har vi samlat alla dina digitala
        lärresurser.
      </p>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="search-input">
      <input
        placeholder="Sök"
      />
      <SearchIcon className="search-icon" />
    </div>
  );
}

export default function Header() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const auth = useAuth();
  
  return (
    <div role='header' className="header">
      <div className={`controls ${!auth ? 'centered' : ''}`}>
        <Link to="/">
          <img className="logo" src={theme === 'base' ? logo : logoWhite} alt={"Göteborgsregionen"} />
        </Link>
        <div>{auth && <SearchInput />}</div>
      </div>
      {auth && auth.userData && <WelcomeMessage name={auth.userData.profile.name} />}
    </div>
  );
}
