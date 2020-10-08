import React from 'react';

export default function Tag({ title, color, onRemove }) {
  return (
    <div className={color + ' rounded-full px-3 py-1 mr-2 mb-2 flex items-center justify-between'}>
      <p className="mr-2 font-semibold">{title}</p>
      <button onClick={onRemove} className="text-xl font-bold focus:outline-none">&times;</button>
    </div>
  );
}