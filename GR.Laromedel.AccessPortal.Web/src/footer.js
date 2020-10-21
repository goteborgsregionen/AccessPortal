import React from 'react';
import Container from './general/container';

export default function Footer() {
  return (
    <div className="h-40 pt-6 bg-green-700">
      <Container>
        <ul className="text-sm font-bold text-white">
          <li className="mb-2"><a href="about">Om webbplatsen</a></li>
          <li className="mb-2"><a href="privacy">Cookies & persondata</a></li>
          <li className="mb-2"><a href="https://goteborgsregionen.se">Göteborgsregionen</a></li>
        </ul>
      </Container>
    </div>
  );
}
