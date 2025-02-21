import React from 'react';
import { Link } from 'react-router-dom';
import Container from './common/container';

export default function Footer() {
  return (
    <div role="footer" className="footer">
      <Container>
        <ul className="footer-links">
          <li>
            <Link to="/about">Om webbplatsen</Link>
          </li>
          <li>
            <Link to="/privacy">Cookies & persondata</Link>
          </li>
          <li>
            <a href="https://goteborgsregionen.se">Göteborgsregionen</a>
          </li>
        </ul>
      </Container>
    </div>
  );
}
