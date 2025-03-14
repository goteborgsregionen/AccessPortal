import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '../assets/icons/search';
import logo from '../assets/images/gr_logo.png';
import { useAuth } from 'oidc-react';

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
    <>
      {/* <label htmlFor="search">Sök resurs</label>
      <div className="search-input">     
        <input
          id="search"
          placeholder="Sök"
        />
        <SearchIcon className="search-icon" />
      </div> */}
    </>
  );
}

export default function Header() {
  const auth = useAuth();
    
  return (
    <div role='header' className="header">
      <div className={`controls ${!auth ? 'centered' : ''}`}>
        <Link to="/">
          <img className="logo" src={logo} alt={"Göteborgsregionen"} />
        </Link>
        <div className='search-container'>{auth && <SearchInput />}</div>
      </div>
      {auth && auth.userData && <WelcomeMessage name={auth.userData.profile.name} />}
    </div>
  );
}
