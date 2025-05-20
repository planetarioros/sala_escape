import React from 'react';
import { SpaceHeader } from './SpaceHeader';

export const WelcomeScreen = ({ title, onStart }) => {
  return (
    <div className="bg-gray-900 text-red-400 p-8 rounded-lg border-2 border-red-600 max-w-md mx-auto text-center">
      <SpaceHeader title="SISTEMA DE ALERTA GLOBAL" />
      
      <div className="mt-8 space-y-6">
        <div className="bg-red-900/50 border border-red-600 p-4 rounded-lg">
          <h2 className="text-xl font-mono mb-2">¡ALERTA DE ASTEROIDE!</h2>
          <p className="text-sm">
            Nuevo asteroide potencialmente peligroso detectado.
          </p>
          <p className="text-lg font-bold mt-2 text-red-300">
            Probabilidad de impacto: 63% (02/03/2028)
          </p>
        </div>
        
        <h2 className="text-xl font-mono mb-6">{title}</h2>
        <p className="mb-8">Este sistema está protegido por protocolos de emergencia planetaria.</p>
        
        <button
          onClick={onStart}
          className="bg-red-600 hover:bg-red-500 text-white py-3 px-8 rounded-lg animate-pulse"
        >
          INICIAR VALIDACIÓN
        </button>
      </div>
    </div>
  );
};