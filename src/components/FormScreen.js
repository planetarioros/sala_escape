import React, { useState } from 'react';
import { SpaceHeader } from './SpaceHeader';

export const FormScreen = ({ question, answer, format, onComplete, onBack }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === answer.toLowerCase()) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onComplete();
      }, 1500);
    } else {
      setError('¡Respuesta incorrecta! Intenta nuevamente.');
    }
  };

  return (
    <div className="bg-gray-900 text-red-400 p-6 rounded-lg border-2 border-red-600 max-w-md mx-auto">
      <SpaceHeader title={`VALIDACIÓN DE SEGURIDAD (${format ? 'Formato: '+format : ''})`} />
      
      <div className="mt-6">
        <p className="font-mono mb-6">{question}</p>
        
        {format && (
          <p className="text-yellow-400 text-sm mb-4 font-mono">
            Formato requerido: {format}
          </p>
        )}
        
        {success ? (
          <div className="bg-red-900/50 border border-red-600 p-4 rounded-lg mb-6 text-center animate-pulse">
            ☑️ Respuesta correcta. Procediendo al siguiente nivel...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setError('');
              }}
              className="w-full bg-gray-800 border border-red-600 p-3 rounded text-white mb-2"
              placeholder="Ingrese respuesta..."
            />
            
            {error && <p className="text-red-300 text-sm mb-4">{error}</p>}
            
            <div className="flex justify-between">
              {onBack && (
                <button
                  type="button"
                  onClick={onBack}
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
                >
                  ← Anterior
                </button>
              )}
              
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-red-600 hover:bg-red-500 text-white py-2 px-6 rounded disabled:opacity-50"
              >
                Siguiente →
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};