
import React, { useMemo } from 'react';
import { Activity } from '../types';
import { Wallet, TrendingDown, Info, Euro } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface BudgetProps {
  itinerary: Activity[];
}

const COLORS = ['#991b1b', '#d4af37', '#1e293b', '#475569', '#64748b'];

const Budget: React.FC<BudgetProps> = ({ itinerary }) => {
  // Gastos fijos según PDF que no están en el itinerario como actividades de pago directo
  const extras = [
    { title: 'Desayuno (Máx)', price: 5 },
    { title: 'Gelato (Máx)', price: 5 },
    { title: 'Baños Públicos', price: 2 }
  ];

  const totalActivities = useMemo(() => itinerary.reduce((acc, curr) => acc + curr.priceEUR, 0), [itinerary]);
  const totalExtras = extras.reduce((acc, curr) => acc + curr.price, 0);
  const total = totalActivities + totalExtras;

  const chartData = [
    ...itinerary.filter(a => a.priceEUR > 0).map(a => ({ name: a.title, value: a.priceEUR })),
    ...extras.map(e => ({ name: e.title, value: e.price }))
  ];

  return (
    <div className="pb-24 px-4 pt-6 max-w-lg mx-auto h-full overflow-y-auto no-scrollbar">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-roma-800 flex items-center">
          <Wallet className="mr-2" /> Presupuesto
        </h2>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-br from-roma-800 to-roma-900 rounded-2xl p-6 text-white shadow-xl mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Euro size={80} />
        </div>
        <p className="text-roma-200 text-xs mb-1 uppercase tracking-widest font-bold">Total Estimado</p>
        <div className="text-5xl font-bold flex items-baseline">
          <span className="text-2xl mr-1">€</span>{total}
        </div>
        <p className="text-[10px] text-roma-300 mt-4 flex items-center border-t border-roma-700/50 pt-3">
          <Info size={12} className="mr-1" /> Basado en el perfil "Low Cost" (30€ - 40€).
        </p>
      </div>

      {/* Breakdown List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-8 overflow-hidden">
        <h3 className="px-4 py-3 bg-slate-50 border-b border-slate-100 font-bold text-slate-700 text-sm">Detalle de Gastos</h3>
        <div className="divide-y divide-slate-50">
          {itinerary.filter(a => a.priceEUR > 0).map((act, index) => (
            <div key={act.id} className="flex justify-between items-center p-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <p className="text-sm font-bold text-slate-800">{act.title}</p>
              </div>
              <div className="font-bold text-roma-700">€{act.priceEUR}</div>
            </div>
          ))}
          {extras.map((ext, index) => (
            <div key={ext.title} className="flex justify-between items-center p-4">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-3 bg-slate-300"></div>
                <p className="text-sm font-medium text-slate-600">{ext.title}</p>
              </div>
              <div className="font-bold text-slate-500 italic">€{ext.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-64 w-full mb-8 bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
         <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `€${value}`} />
            </PieChart>
         </ResponsiveContainer>
      </div>

      {/* Saving Tip */}
      <div className="bg-roma-50 border border-roma-100 rounded-xl p-4 flex items-start mb-10">
        <TrendingDown className="text-roma-600 mt-1 mr-3 flex-shrink-0" size={20} />
        <div>
          <h4 className="font-bold text-roma-900 text-sm italic">Consejo Low Cost</h4>
          <p className="text-[11px] text-roma-800 mt-1 leading-relaxed">
            Roma tiene fuentes gratuitas ("Nasoni"). Lleva tu botella reutilizable y ahorra 100% en agua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Budget;
