import React from 'react';

export default function Welcome() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Logga in för att komma åt denna sidan</h1>
      <p>
        Åtkomstportalen är skapad av{' '}
        <a className="underline" href="https://goteborgsregionen.se">
          Göteborgsregionen
        </a>{' '}
        för att göra den enkelt för elever och lärare att använda digitala läromedel.
      </p>
      <p>
        För att kunna använda Åtkomstportalen behöver du logga in med ditt skolkonto
      </p>
    
    </>
  );
}
