import React from 'react';

export const SpaceHeader = ({ title }) => {
  return (
    <div className="bg-black text-red-500 p-4 border-b-2 border-red-600">
      <h1 className="text-2xl font-mono font-bold tracking-wider">
        ☄️ ALERTA ASTEROIDE ☄️
      </h1>
      <p className="text-red-400 font-mono text-sm mt-1">{title}</p>
    </div>
  );
};