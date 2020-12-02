import React from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const history = useHistory();
  return (
    <button
      onClick={() => history.push('/atkomstportalen')}
      className="mb-2 flex-none bg-cover bg-center rounded shadow p-2"
    >
      Logga In
    </button>
  );
};
