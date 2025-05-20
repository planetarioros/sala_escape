import React, { useState } from 'react';
import { SpaceHeader } from './SpaceHeader';

export const AuthScreen = ({ onAuthSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'carlsagan') {
      onAuthSuccess();
    } else {
      setError('Contraseña incorrecta. Intenta nuevamente.');
    }
  };

  return (
    <div className="bg-gray-900 text-red-400 p-6 rounded-lg border-2 border-red-600 max-w-md mx-auto">
      <SpaceHeader title="ACCESO RESTRINGIDO" />
      
      <div className="mt-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-mono mb-2">Contraseña de Administrador</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className="w-full bg-gray-800 border border-red-600 p-3 rounded text-white"
              placeholder="Ingrese la contraseña"
            />
            {error && <p className="text-red-300 text-sm mt-2">{error}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-500 text-white py-3 px-6 rounded"
          >
            ACCEDER AL PANEL
          </button>
        </form>
      </div>
    </div>
  );
};

// DONE