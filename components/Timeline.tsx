
// Add missing React import
import React from 'react';
import { Activity } from '../types';
import { CheckCircle2, Circle, MapPin, AlertTriangle, Clock, ArrowRight, ExternalLink } from 'lucide-react';
import { calculateDuration } from '../services/utils';

interface TimelineProps {
  itinerary: Activity[];
  onToggleComplete: (id: string) => void;
  onLocate: (coords: { lat: number, lng: number }, endCoords?: { lat: number, lng: number }) => void;
  userLocation: { lat: number, lng: number } | null;
}

const Timeline: React.FC<TimelineProps> = ({ itinerary, onToggleComplete, onLocate, userLocation }) => {
  
  const getStatusColor = (act: Activity, isNow: boolean) => {
    if (act.completed) return 'border-emerald-500 bg-emerald-50';
    if (isNow) return 'border-gold-500 bg-roma-50 ring-2 ring-gold-500 ring-opacity-20';
    if (act.type === 'logistics' && act.notes === 'CRITICAL') return 'border-red-500 bg-red-50';
    return 'border-roma-100 bg-white';
  };

  const isActivityNow = (start: string, end: string) => {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    // Para actividades de un solo punto (ej: 07:00 a 07:00)
    if (start === end) {
      return time === start;
    }
    return time >= start && time < end;
  };

  const calculateProgress = (start: string, end: string) => {
    const getMinutes = (timeStr: string) => {
      const [h, m] = timeStr.split(':').map(Number);
      return h * 60 + m;
    };

    const now = new Date();
    const currentMins = now.getHours() * 60 + now.getMinutes();
    const startMins = getMinutes(start);
    const endMins = getMinutes(end);

    if (startMins === endMins) return 100;
    
    const total = endMins - startMins;
    const elapsed = currentMins - startMins;
    const percentage = (elapsed / total) * 100;

    return Math.min(Math.max(percentage, 0), 100);
  };

  return (
    <div className="pb-24 px-4 pt-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-roma-800 mb-6 uppercase tracking-tight text-center">Roma Imperial: Paso a Paso</h2>
      
      <div className="relative border-l-2 border-roma-200 ml-3 space-y-4">
        {itinerary.map((act, index) => {
          const isCritical = act.notes === 'CRITICAL';
          const isNow = isActivityNow(act.startTime, act.endTime);
          const duration = calculateDuration(act.startTime, act.endTime);
          const progress = isNow ? calculateProgress(act.startTime, act.endTime) : 0;
          
          let interval = null;
          if (index < itinerary.length - 1) {
            const nextAct = itinerary[index + 1];
            const intervalDuration = calculateDuration(act.endTime, nextAct.startTime);
            const [h, m] = act.endTime.split(':').map(Number);
            const [nh, nm] = nextAct.startTime.split(':').map(Number);
            const totalMinsEnd = h * 60 + m;
            const totalMinsStartNext = nh * 60 + nm;
            if (totalMinsStartNext > totalMinsEnd) {
              interval = intervalDuration;
            }
          }
          
          return (
            <React.Fragment key={act.id}>
              <div className="mb-4 ml-6 relative">
                <div 
                  className={`absolute -left-[31px] top-0 rounded-full bg-white border-2 cursor-pointer transition-colors z-10 ${
                    act.completed ? 'border-emerald-500 text-emerald-500' : (isNow ? 'border-gold-500 text-gold-600' : 'border-roma-500 text-roma-500')
                  }`}
                  onClick={() => onToggleComplete(act.id)}
                >
                  {act.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                </div>

                <div className={`p-4 rounded-xl border shadow-sm transition-all ${getStatusColor(act, isNow)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-full">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${isNow ? 'bg-gold-500 text-white' : 'bg-roma-100 text-roma-700'}`}>
                          {act.startTime} - {act.endTime}
                          </span>
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                          {duration}
                          </span>
                          {isNow && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-700 animate-pulse border border-amber-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-1"></span>
                              EN CURSO
                            </span>
                          )}
                      </div>
                      
                      {isNow && !act.completed && (
                        <div className="w-full bg-slate-200 rounded-full h-1.5 mb-2 mt-2 overflow-hidden border border-slate-300">
                          <div 
                            className="bg-gradient-to-r from-gold-500 to-amber-500 h-full rounded-full transition-all duration-1000 ease-linear shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}

                      <h3 className={`font-bold text-base leading-tight uppercase tracking-tight ${isNow ? 'text-roma-900' : 'text-gray-800'}`}>{act.title}</h3>
                    </div>
                    {isCritical && <AlertTriangle className="text-red-600 animate-pulse shrink-0 ml-2" size={20} />}
                  </div>

                  <div className="mb-3 text-xs text-gray-600 flex items-center flex-wrap gap-x-3 gap-y-1">
                      <span className="font-bold flex items-center">
                          <MapPin size={12} className="mr-0.5 text-roma-600"/> 
                          {act.locationName}
                      </span>
                      {act.endLocationName && (
                          <div className="flex items-center">
                              <ArrowRight size={12} className="text-slate-400 mx-1" />
                              <span className="font-bold flex items-center text-slate-500">
                                  <MapPin size={12} className="mr-0.5"/>
                                  {act.endLocationName}
                              </span>
                          </div>
                      )}
                  </div>

                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">{act.description}</p>
                  
                  {act.warning && !act.completed && (
                    <div className="bg-amber-50 border border-amber-200 p-2.5 rounded-lg text-[11px] text-amber-800 mb-3 flex items-start">
                      <Clock size={14} className="mr-2 mt-0.5 shrink-0 text-amber-600" />
                      <div>
                        <span className="font-bold block uppercase tracking-tighter mb-0.5">AVISO DE CONTINGENCIA</span>
                        {act.warning}
                      </div>
                    </div>
                  )}

                  <div className="bg-slate-50 p-3 rounded-lg text-xs text-slate-700 italic border-l-4 border-gold-500 mb-4 font-medium">
                    "{act.keyDetails}"
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => onLocate(act.coords, act.endCoords)}
                        className="flex items-center text-[10px] font-bold text-roma-700 bg-roma-50 px-2 py-1.5 rounded-md border border-roma-100 active:bg-roma-100 transition-colors"
                      >
                        <MapPin size={12} className="mr-1" />
                        MAPA
                      </button>
                      {act.mapsLink && (
                        <a 
                          href={act.mapsLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-1.5 rounded-md border border-blue-100 active:bg-blue-100 transition-colors"
                        >
                          <ExternalLink size={12} className="mr-1" />
                          GOOGLE
                        </a>
                      )}
                    </div>
                    
                    <button
                      onClick={() => onToggleComplete(act.id)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                        act.completed 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-roma-800 text-white shadow-md active:scale-95 transition-transform'
                      }`}
                    >
                      {act.completed ? 'LISTO' : 'CHECK'}
                    </button>
                  </div>
                </div>
              </div>

              {interval && (
                <div className="ml-6 py-2 flex items-center text-stone-400">
                  <div className="flex items-center space-x-2 border-l-2 border-stone-200 border-dashed pl-4 py-1 -ml-[18px]">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      Intervalo libre / tránsito: {interval}
                    </span>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;