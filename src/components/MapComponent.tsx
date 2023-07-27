import 'leaflet/dist/leaflet.css';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

function MapController() {
  const region = useSelector(
    (state: { [key: string]: any }): [number, number] => state.region.coordinates,
  );
  const map = useMap();

  useEffect(() => {
    map.flyTo(region, 5);
  }, [region]);

  return '';
}

export default function MapComponent() {
  return (
    <MapContainer center={[0, 0]} zoom={0} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapController />
    </MapContainer>
  );
}
