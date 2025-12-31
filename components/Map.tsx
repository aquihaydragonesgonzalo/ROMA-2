import React, { useEffect, useRef } from 'react';
import { Activity } from '../types';
import { ROMA_TRACK, COORDS } from '../constants';
import L from 'leaflet';

interface MapProps {
  activities: Activity[];
  userLocation: { lat: number, lng: number } | null;
  focusedLocation: { lat: number, lng: number } | null;
}

const MapComponent: React.FC<MapProps> = ({ activities, userLocation, focusedLocation }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const layersRef = useRef<L.Layer[]>([]);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    const map = L.map(mapContainerRef.current, { zoomControl: false }).setView([41.8902, 12.4922], 14);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      maxZoom: 19
    }).addTo(map);

    mapInstanceRef.current = map;
    return () => { map.remove(); mapInstanceRef.current = null; };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    layersRef.current.forEach(layer => layer.remove());
    layersRef.current = [];

    // Track GPS real de Roma
    const trackPolyline = L.polyline(ROMA_TRACK, {
      color: '#B91C1C', weight: 5, opacity: 0.7, dashArray: '5, 10'
    }).addTo(map);
    layersRef.current.push(trackPolyline);

    // Icono Waypoints
    const poiIcon = L.divIcon({
      className: 'custom-poi',
      html: '<div style="background-color:#B91C1C;width:10px;height:10px;border-radius:50%;border:2px solid white;box-shadow:0 0 4px rgba(0,0,0,0.3);"></div>',
      iconSize: [10, 10]
    });

    // Añadir todos los POIs de constantes
    Object.entries(COORDS).forEach(([name, coord]) => {
      const marker = L.marker([coord.lat, coord.lng], { icon: poiIcon })
        .addTo(map)
        .bindPopup(`<b>${name.replace(/_/g, ' ')}</b>`);
      layersRef.current.push(marker);
    });

    if (userLocation) {
      const userIcon = L.divIcon({
        className: 'user-pin',
        html: '<div style="background-color:#3b82f6;width:16px;height:16px;border-radius:50%;border:3px solid white;box-shadow:0 0 10px rgba(0,0,0,0.5);"></div>',
        iconSize: [16, 16]
      });
      const marker = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon, zIndexOffset: 1000 })
        .addTo(map)
        .bindPopup("Estás aquí");
      layersRef.current.push(marker);
    }
  }, [activities, userLocation]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (map && focusedLocation) map.flyTo([focusedLocation.lat, focusedLocation.lng], 16);
  }, [focusedLocation]);

  return <div ref={mapContainerRef} className="w-full h-full z-0" />;
};

export default MapComponent;
