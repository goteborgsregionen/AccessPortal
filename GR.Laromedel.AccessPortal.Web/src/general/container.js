import React from 'react';

export default function Container({ children }) {
  return (
    <div className="container mx-auto w-256">
      {children}
    </div>
  );
}