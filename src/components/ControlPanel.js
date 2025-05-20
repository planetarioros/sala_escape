import React, { useState } from 'react';
import { SpaceHeader } from './SpaceHeader';

export const ControlPanel = ({ config, setConfig }) => {
  const addQuestion = () => {
    if (config.questions.length < 6) {
      setConfig(prev => ({
        ...prev,
        questions: [
          ...prev.questions,
          { question: "", answer: "", format: "" }
        ]
      }));
    }
  };

  const removeQuestion = (index) => {
    if (config.questions.length > 1) {
      const newQuestions = [...config.questions];
      newQuestions.splice(index, 1);
      setConfig(prev => ({
        ...prev,
        questions: newQuestions
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig(prev => ({ ...prev, [name]: value }));
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...config.questions];
    newQuestions[index][field] = value;
    setConfig(prev => ({ ...prev, questions: newQuestions }));
  };

  return (
    <div className="bg-gray-900 text-red-400 p-6 rounded-lg border-2 border-red-600">
      <SpaceHeader title="PANEL DE CONTROL PRINCIPAL" />
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-mono text-lg mb-4">Configuración General</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-mono mb-1">Título Bienvenida</label>
              <input
                type="text"
                name="welcomeTitle"
                value={config.welcomeTitle}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-red-600 p-2 rounded text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-mono mb-1">Mensaje Final</label>
              <input
                type="text"
                name="endMessage"
                value={config.endMessage}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-red-600 p-2 rounded text-white"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-mono text-lg">Preguntas de Validación</h2>
            {config.questions.length < 6 && (
              <button
                onClick={addQuestion}
                className="bg-red-600 hover:bg-red-500 text-white py-1 px-3 rounded text-sm"
              >
                + Añadir
              </button>
            )}
          </div>
          
          <div className="space-y-4">
            {config.questions.map((q, i) => (
              <div key={i} className="bg-gray-800 p-3 rounded border border-red-600">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-mono">Pregunta {i+1}</span>
                  {config.questions.length > 1 && (
                    <button
                      onClick={() => removeQuestion(i)}
                      className="text-red-300 hover:text-red-200 text-xs"
                    >
                      Eliminar
                    </button>
                  )}
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono mb-1">Texto de la pregunta</label>
                    <input
                      type="text"
                      value={q.question}
                      onChange={(e) => handleQuestionChange(i, 'question', e.target.value)}
                      className="w-full bg-gray-700 border border-red-600 p-2 rounded text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-mono mb-1">Respuesta correcta</label>
                    <input
                      type="text"
                      value={q.answer}
                      onChange={(e) => handleQuestionChange(i, 'answer', e.target.value)}
                      className="w-full bg-gray-700 border border-red-600 p-2 rounded text-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-mono mb-1">Formato requerido</label>
                    <input
                      type="text"
                      value={q.format}
                      onChange={(e) => handleQuestionChange(i, 'format', e.target.value)}
                      className="w-full bg-gray-700 border border-red-600 p-2 rounded text-white"
                      placeholder="Ejemplo: 123456"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};