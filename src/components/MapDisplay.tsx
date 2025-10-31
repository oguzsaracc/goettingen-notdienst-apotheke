import React from 'react';
// 1. React-Leaflet kütüphanesinden gerekli bileşenleri import ediyoruz
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// 2. Eczane tipi için import ediyoruz
import type { Pharmacy } from '../types';
// 3. Leaflet'in kendi 'koordinat' tipi olan LatLngExpression'ı import ediyoruz
import type { LatLngExpression } from 'leaflet'; 

// 4. Bileşenin 'pharmacies' adında bir prop (özellik) alacağını belirtiyoruz
interface MapDisplayProps {
  pharmacies: Pharmacy[]; // Bu, tüm eczanelerin bir dizisi olacak
}

// 5. Haritanın merkezini belirleyelim (Göttingen şehir merkezi)
const goettingenCenter: LatLngExpression = [51.5333, 9.9333];

const MapDisplay: React.FC<MapDisplayProps> = ({ pharmacies }) => {
  return (
    // 6. MapContainer: Haritanın ana çerçevesi.
    //    Mutlaka bir yüksekliğe (height) sahip olmalı, yoksa görünmez.
    <MapContainer 
      center={goettingenCenter} 
      zoom={13} // Şehir için 13 iyi bir zoom seviyesi
      className="h-full min-h-[400px] w-full rounded-lg shadow-md"
    >
      {/* 7. TileLayer: Haritanın "desenini" sağlayan katman. OpenStreetMap ücretsizdir. */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* 8. Eczaneler dizisi üzerinde dönüp her biri için bir Marker (Pin) oluşturuyoruz */}
      {pharmacies.map(pharmacy => (
        <Marker 
          key={pharmacy.id} 
          position={[pharmacy.coordinates.lat, pharmacy.coordinates.lng]}
        >
          {/* 9. Popup: Pin'e tıklandığında açılan küçük bilgi balonu */}
          <Popup>
            <strong>{pharmacy.name}</strong>
            <br />
            {pharmacy.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapDisplay;