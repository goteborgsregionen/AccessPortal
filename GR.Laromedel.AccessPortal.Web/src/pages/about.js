import React from 'react';
import CommonInfoBox from '../components/common/CommonInfoBox';

export default function About() {
  return (
    <CommonInfoBox>
      <h1>Om Åtkomstportalen</h1>
      <p>
        Åtkomstportalen är skapad av{' '}
        <a href="https://goteborgsregionen.se">
          Göteborgsregionen
        </a>{' '}
        för att göra den enkelt för elever och lärare att använda digitala läromedel.
      </p>
      <p>
        Just nu är portalen under utveckling och den kommer förbättras och få flera funktioner
        framöver.
      </p>
    </CommonInfoBox>
  );
}
