import React from 'react';
import { useHistory } from 'react-router-dom';
import { oidcConfig } from '../config/oidcconfig';
import CommonInfoBox from '../components/common/CommonInfoBox';

export default function Welcome() {  
  const key = sessionStorage.getItem(`oidc.user:${oidcConfig.authority}:${oidcConfig.clientId}`);
  const history = useHistory();  
  if (key) history.push('/atkomstportalen');
  return (
    <CommonInfoBox>    
      <h1>Välkommen till Åtkomstportalen</h1>
      <p>
        Åtkomstportalen är skapad av{' '}
        <a href="https://goteborgsregionen.se">
          Göteborgsregionen
        </a>{' '}
        för att göra den enkelt för elever och lärare att använda digitala läromedel.
      </p>
      <p>För att kunna använda Åtkomstportalen behöver du logga in med ditt skolkonto.</p>      
    </CommonInfoBox>
  );  
}
