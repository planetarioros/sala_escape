import React, { useState } from 'react';
import { ControlPanel } from './components/ControlPanel';
import { WelcomeScreen } from './components/WelcomeScreen';
import { FormScreen } from './components/FormScreen';
import { EndScreen } from './components/EndScreen';
import { AuthScreen } from './components/AuthScreen';

export default function App() {
  const [config, setConfig] = useState({
    welcomeTitle: "Bienvenido al Sistema de Defensa Planetaria",
    endMessage: "La Tierra está a salvo... por ahora.",
    questions: Array(6).fill().map((_, i) => ({
      question: `Código de acceso nivel ${i+1}:`,
      answer: "",
      format: i % 2 === 0 ? "2000GA4" : "123456"
    }))
  });

  const [mode, setMode] = useState('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAuth, setShowAuth] = useState(false);

  const startForm = () => {
    setCurrentQuestion(0);
    setMode('form');
  };

  const completeQuestion = () => {
    if (currentQuestion < config.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setMode('end');
    }
  };

  const backToQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAuthSuccess = () => {
    setShowAuth(false);
    setMode('control');
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      {mode === 'welcome' && (
        <WelcomeScreen 
          title={config.welcomeTitle} 
          onStart={startForm} 
        />
      )}

      {mode === 'form' && (
        <FormScreen
          question={config.questions[currentQuestion].question}
          answer={config.questions[currentQuestion].answer}
          format={config.questions[currentQuestion].format}
          onComplete={completeQuestion}
          onBack={currentQuestion > 0 ? backToQuestion : null}
        />
      )}

      {mode === 'end' && (
        <EndScreen 
          message={config.endMessage} 
        />
      )}

      {mode === 'control' && (
        <div className="max-w-4xl mx-auto">
          <ControlPanel config={config} setConfig={setConfig} />
          <button
            onClick={() => setMode('welcome')}
            className="mt-6 bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded"
          >
            Ver Formulario
          </button>
        </div>
      )}

      {mode !== 'control' && (
        <button
          onClick={() => setShowAuth(true)}
          className="fixed bottom-4 right-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
        >
          Panel de Control
        </button>
      )}

      {showAuth && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
          <AuthScreen onAuthSuccess={handleAuthSuccess} />
        </div>
      )}
    </div>
  );
}

// DONE