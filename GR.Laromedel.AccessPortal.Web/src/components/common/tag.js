import React from 'react';

export default function Tag({ title, color, onRemove }) {
  return (
    <div className={color + ' tag'}>
      <p>{title}</p>
      <button onClick={onRemove}>
        &times;
      </button>
    </div>
  );
}
