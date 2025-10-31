import React from 'react';
import type{ Pharmacy } from '../types'; // 1. Adımda oluşturduğumuz tipi import ediyoruz

// Bileşenin 'pharmacy' adında bir prop alacağını belirtiyoruz
// Bu prop'un tipi 'Pharmacy' arayüzüne uygun olmalı
interface Props {
  pharmacy: Pharmacy;
}

// Google Maps linki oluşturmak için adresin URL-uyumlu hale getirilmesi
const getDirectionsUrl = (address: string) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
};

const PharmacyCard: React.FC<Props> = ({ pharmacy }) => {
  return (
    // Tailwind ile kart tasarımı
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-4">
      <div className="p-5">
        
        {/* Eczane Adı */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {pharmacy.name}
        </h3>
        
        {/* Adres Bilgisi */}
        <div className="flex items-center text-gray-700 mb-2">
          {/* Basit bir harita pini ikonu */}
          <svg className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{pharmacy.address}</span>
        </div>
        
        {/* Telefon Bilgisi */}
        <div className="flex items-center text-gray-700 mb-4">
          {/* Basit bir telefon ikonu */}
          <svg className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <a href={`tel:${pharmacy.phone}`} className="hover:text-blue-600 hover:underline">
            {pharmacy.phone}
          </a>
        </div>
        
        {/* Butonlar */}
        <div className="flex space-x-3">
          {/* Yol Tarifi Butonu (MVP Özelliği) */}
          <a
            href={getDirectionsUrl(pharmacy.address)}
            target="_blank" // Yeni sekmede aç
            rel="noopener noreferrer" // Güvenlik için
            className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            Get Directions
          </a>
          
          {/* Web Sitesi (varsa) */}
          {pharmacy.url && (
            <a
              href={pharmacy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PharmacyCard;