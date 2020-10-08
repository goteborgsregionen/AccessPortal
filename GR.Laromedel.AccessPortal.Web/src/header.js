import React from 'react';

export default function Header() {
  return (
    <div className="flex justify-between h-16 items-center mb-4">
      <div className="text-lg">Åtkomstportalen</div>
      <div>
        <input className="bg-gray-300 rounded h-10 mr-4 placeholder-gray-600 w-64 px-2 outline-none focus:shadow-outline" type="text" placeholder="Sök..." aria-label="sök" />
        <button className="h-10 px-4 rounded font-bold bg-green-700 text-white">Logga ut</button>
      </div>
    </div>
  );
}
