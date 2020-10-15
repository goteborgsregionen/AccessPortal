import React from 'react';

export default function Footer() {
  return (
    <div className="h-40 pt-6 bg-green-700">
      <div className="pl-6 w-256 mx-auto">
        <ul className="text-sm font-bold text-white">
          <li className="mb-2"><a href="about.html">Om webbplatsen</a></li>
          <li className="mb-2"><a href="privacy.html">Cookies & persondata</a></li>
          <li className="mb-2"><a href="https://goteborgsregionen.se">Göteborgsregionen</a></li>
        </ul>
      </div>
    </div>
  );
}
