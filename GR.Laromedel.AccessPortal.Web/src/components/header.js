import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../assets/icons/search';
import logo from '../assets/images/gr_logo.png';
import logoWhite from '../assets/images/gr_logo_white.png';
import { useAuth } from 'oidc-react';
import { ThemeContext } from '../utilities/themeContext';

function WelcomeMessage({ name }) {
  return (
    <div className="rounded-2xl -mt-10 ml-48 rounded-tl-none text-lg w-96 p-4 bg-welcome">
      <p>
        Hej {name}! Välkommen till Åtkomstportalen! Här har vi samlat alla dina digitala
        lärresurser.
      </p>
    </div>
  );
}

function SearchInput() {
  return (
    <div className="relative">
      <input className="border border-gray-400 bg-white rounded-full pl-3 pr-8 h-8 w-56 focus:outline-none focus:shadow-outline" />
      <SearchIcon className="absolute right-0 top-0 mt-2 mr-3 h-4 w-4" />
    </div>
  );
}

export default function Header() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const auth = useAuth();

  return (
    <div className="mt-6 mb-10">
      <div className="flex justify-between items-center h-16 mb-4">
        <Link to="/">
          <img className="h-auto w-40 fill-red-300" src={theme === 'base' ? logo : logoWhite} />
        </Link>
        <div>{auth && <SearchInput />}</div>
      </div>
      {auth && auth.userData && <WelcomeMessage name={auth.userData.profile.name} />}
    </div>
  );
}
