import React from 'react';
import { useHistory } from 'react-router-dom';
import { oidcConfig } from '../config/oidcconfig';

export default function Welcome() {
  const key = sessionStorage.getItem(`oidc.user:${oidcConfig.authority}:${oidcConfig.clientId}`);
  const history = useHistory();

  if (key) history.push('/atkomstportalen');
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Välkommen till Åtkomstportalen</h1>
      <p>
        Åtkomstportalen är skapad av{' '}
        <a className="underline" href="https://goteborgsregionen.se">
          Göteborgsregionen
        </a>{' '}
        för att göra den enkelt för elever och lärare att använda digitala läromedel.
      </p>
      <p>För att kunna använda Åtkomstportalen behöver du logga in med ditt skolkonto.</p>
    </>
  );
}
