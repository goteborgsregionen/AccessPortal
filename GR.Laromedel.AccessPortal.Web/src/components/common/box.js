import React from 'react';

export default function Box({ children }) {
  return <div className="bg-secondary rounded shadow-2xl p-6 mb-20">{children}</div>;
}
