import React from 'react';
import { SpaceHeader } from './SpaceHeader';

export const EndScreen = ({ message }) => {
  return (
    <div className="bg-gray-900 text-red-400 p-8 rounded-lg border-2 border-red-600 max-w-md mx-auto text-center">
      <SpaceHeader title="VALIDACIÓN COMPLETADA" />
      
      <div className="mt-8">
        <div className="text-6xl mb-6">🌍</div>
        <h2 className="text-xl font-mono mb-6">¡Protocolos activados!</h2>
        <p className="mb-8">{message}</p>
        <p className="text-sm text-red-300">
          Sistema de defensa planetaria en marcha. La Tierra puede estar a salvo.
        </p>
      </div>
    </div>
  );
};