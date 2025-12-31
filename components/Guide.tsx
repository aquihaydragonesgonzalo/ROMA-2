import React, { useState } from 'react';
import { PRONUNCIATIONS } from '../constants';
import { Volume2, Thermometer, AlertCircle, ShoppingBag, Droplets, Utensils } from 'lucide-react';

const Guide: React.FC = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  const playSimulatedAudio = (word: string) => {
    setPlaying(word);
    setTimeout(() => setPlaying(null), 1000);
  };

  return (
    <div className="pb-24 px-4 pt-6 max-w-lg mx-auto h-full overflow-y-auto">
      <h2 className="text-2xl font-bold text-roma-700 mb-6 uppercase tracking-tight">Guía de Supervivencia</h2>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 gap-4 mb-8">
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <div className="flex items-center mb-2 text-red-700 font-bold">
             <AlertCircle size={18} className="mr-2"/> Fontana di Trevi (NUEVAS REGLAS)
          </div>
          <p className="text-sm text-red-800">
            Aforo limitado a 400 personas. Prohibido sentarse en el mármol, comer o beber. Flujo de visitantes circular y constante.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex items-center mb-2 text-blue-700 font-bold">
             <Droplets size={18} className="mr-2"/> Agua Gratis ("Nasoni")
          </div>
          <p className="text-sm text-blue-800">
            Roma está llena de fuentes potables gratuitas. Lleva tu botella reutilizable y búscala en el mapa.
          </p>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
          <div className="flex items-center mb-2 text-amber-700 font-bold">
             <Utensils size={18} className="mr-2"/> Comer "Al Banco"
          </div>
          <p className="text-sm text-amber-800">
            Si tomas el café o cornetto en la barra cuesta la mitad que sentado en mesa.
          </p>
        </div>
      </div>

      {/* Pronunciation Table */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">Frases Útiles</h3>
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden mb-8">
        {PRONUNCIATIONS.map((item, idx) => (
          <div key={item.word} className={`p-4 flex justify-between items-center ${idx !== PRONUNCIATIONS.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="font-bold text-lg text-roma-800">{item.word}</span>
                <span className="text-xs text-gray-400 font-mono italic">{item.phonetic}</span>
              </div>
              <div className="text-sm font-medium text-gray-700 mt-1">
                "{item.simplified}"
              </div>
              <p className="text-xs text-gray-500 mt-0.5 italic">{item.meaning}</p>
            </div>
            <button 
              onClick={() => playSimulatedAudio(item.word)}
              className={`p-3 rounded-full transition-colors ${playing === item.word ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}
            >
              <Volume2 size={20} className={playing === item.word ? 'animate-pulse' : ''} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;