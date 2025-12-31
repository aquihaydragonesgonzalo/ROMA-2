import React, { useState, useEffect, useMemo } from 'react';
import { Activity, AppTab, Coordinates } from './types';
import { INITIAL_ITINERARY, SHIP_ONBOARD_TIME, SHIP_ARRIVAL_TIME, SHIP_DEPARTURE_TIME, DATE_OF_VISIT } from './constants';
import Timeline from './components/Timeline';
import Budget from './components/Budget';
import Guide from './components/Guide';
import MapComponent from './components/Map';
import { CalendarClock, Map as MapIcon, Wallet, BookOpen, Anchor } from 'lucide-react';

const STORAGE_KEY = 'roma_guide_2026_v3_pdf';

const App: React.FC = () => {
  const [itinerary, setItinerary] = useState<Activity[]>(INITIAL_ITINERARY);
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.TIMELINE);
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [mapFocus, setMapFocus] = useState<Coordinates | null>(null);
  const [countdown, setCountdown] = useState<string>('--:--:--');
  const [hasArrived, setHasArrived] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const merged = INITIAL_ITINERARY.map(init => {
          const s = parsed.find((p: any) => p.id === init.id);
          return s ? { ...init, completed: s.completed } : init;
        });
        setItinerary(merged);
      } catch (e) { console.error(e); }
    }
  }, []);

  const handleToggleComplete = (id: string) => {
    const next = itinerary.map(a => a.id === id ? { ...a, completed: !a.completed } : a);
    setItinerary(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      const wId = navigator.geolocation.watchPosition(
        (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        null, { enableHighAccuracy: true }
      );
      return () => navigator.geolocation.clearWatch(wId);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const [arrH, arrM] = SHIP_ARRIVAL_TIME.split(':').map(Number);
      const arrival = new Date(); 
      arrival.setHours(arrH, arrM, 0);

      if (now < arrival) {
        setCountdown("🚢 EN NAVEGACIÓN");
        setHasArrived(false);
        return;
      }

      setHasArrived(true);
      const [onH, onM] = SHIP_ONBOARD_TIME.split(':').map(Number);
      const target = new Date(); target.setHours(onH, onM, 0);
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdown("¡A BORDO!");
      } else {
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        setCountdown(`${h}h ${m}m ${s}s`);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full bg-slate-50 text-slate-900 overflow-hidden font-sans">
      <header className="bg-roma-800 text-white p-3 shadow-md z-20 flex justify-between items-center shrink-0 border-b border-gold-500/20">
        <div className="flex items-center">
          <Anchor className="mr-2 text-gold-500" size={20} />
          <div>
            <h1 className="font-bold text-sm leading-none text-gold-500 uppercase tracking-widest">A BORDO: {SHIP_ONBOARD_TIME}</h1>
            <p className="text-[10px] text-roma-200">16 Abril 2026</p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-mono font-bold tabular-nums ${hasArrived ? 'text-white' : 'text-roma-300 italic'}`}>{countdown}</div>
        </div>
      </header>

      <main className="flex-1 overflow-hidden relative">
        {activeTab === AppTab.TIMELINE && (
          <div className="h-full overflow-y-auto no-scrollbar">
            <Timeline 
              itinerary={itinerary} 
              onToggleComplete={handleToggleComplete}
              onLocate={(c) => { setMapFocus(c); setActiveTab(AppTab.MAP); }}
              userLocation={userLocation}
            />
          </div>
        )}
        {activeTab === AppTab.MAP && (
          <MapComponent activities={itinerary} userLocation={userLocation} focusedLocation={mapFocus} />
        )}
        {activeTab === AppTab.BUDGET && <Budget itinerary={itinerary} />}
        {activeTab === AppTab.GUIDE && <Guide />}
      </main>

      <nav className="bg-white border-t border-stone-200 shadow-lg z-30 pb-safe shrink-0">
        <div className="flex justify-around items-center h-16">
          {[
            { id: AppTab.TIMELINE, icon: CalendarClock, label: 'Itinerario' },
            { id: AppTab.MAP, icon: MapIcon, label: 'Mapa' },
            { id: AppTab.BUDGET, icon: Wallet, label: 'Gastos' },
            { id: AppTab.GUIDE, icon: BookOpen, label: 'Guía' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center w-full h-full justify-center transition-all ${activeTab === tab.id ? 'text-roma-700 font-bold scale-110' : 'text-stone-300'}`}
            >
              <tab.icon size={22} />
              <span className="text-[10px] mt-1 font-bold uppercase tracking-tighter">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default App;