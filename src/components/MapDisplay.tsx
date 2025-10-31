import React from 'react';
// Import components from react-leaflet for the map
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { Pharmacy } from '../types';
import type { LatLngExpression } from 'leaflet';

// Import the main Leaflet library to create a custom DivIcon
import L from 'leaflet';
// Import ReactDOMServer to render React components into an HTML string
import ReactDOMServer from 'react-dom/server';
// Import the icon we want to use for the pins
import { HiMapPin } from 'react-icons/hi2';

interface MapDisplayProps {
  pharmacies: Pharmacy[];
}

// Set the map's center to Göttingen
const goettingenCenter: LatLngExpression = [51.5333, 9.9333];

// --- Custom Marker Icon Function ---
// This function creates our custom-styled marker icon using L.DivIcon
const createCustomMarkerIcon = () => {
  return L.divIcon({
    // Render our React Icon component to an HTML string
    html: ReactDOMServer.renderToString(
      <HiMapPin className="text-blue-700 w-10 h-10 drop-shadow-md" />
    ),
    // Remove default Leaflet styles (white background/border)
    className: 'bg-transparent border-0',
    iconSize: [40, 40],   // Size of the icon
    iconAnchor: [20, 40], // The "point" of the pin (bottom-center)
  });
};

// Create the icon *once* and reuse it for all markers for performance
const customIcon = createCustomMarkerIcon();
// --- End Custom Icon ---


const MapDisplay: React.FC<MapDisplayProps> = ({ pharmacies }) => {
  return (
    // MapContainer: The main wrapper for the map
    <MapContainer 
      center={goettingenCenter} 
      zoom={9}
      className="h-full min-h-[400px] w-full rounded-lg shadow-md"
    >
      {/* TileLayer: The map tiles (e.g., OpenStreetMap) */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Loop through pharmacies and create a Marker for each */}
      {pharmacies.map(pharmacy => (
        <Marker 
          key={pharmacy.id} 
          position={[pharmacy.coordinates.lat, pharmacy.coordinates.lng]}
          // Use our custom-created icon
          icon={customIcon}
        >
          {/* Popup: The info bubble that opens on click */}
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