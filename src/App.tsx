import { useState } from 'react'
import React from 'react';
import pharmacyData from './data/pharmacies.json';
import PharmacyCard from './components/PharmacyCard';
import MapDisplay from './components/MapDisplay';
import type { Pharmacy } from './types';

function App() {
  
  const pharmacies: Pharmacy[] = pharmacyData.onDuty;
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* 1. Navbar (Header) */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-700">
            Göttingen Notdienst Apotheke
          </h1>
          <p className="text-gray-600">Emergency Pharmacy Finder</p>
        </nav>
      </header>

      {/* 2. Ana İçerik Alanı */}
      <main className="flex-grow container mx-auto p-4">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Today's On-Duty Pharmacies
          </h2>
          <span className="text-sm text-gray-500">
            Last updated: {new Date(pharmacyData.lastUpdated).toLocaleDateString()}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Sol Sütun: Eczane Listesi */}
          <div className="space-y-4">
            {pharmacies.length > 0 ? (
              pharmacies.map(pharmacy => (
                <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
              ))
            ) : (
              <p className="text-gray-600">No pharmacies on duty found.</p>
            )}
          </div>
          
          {/* Sağ Sütun: Harita */}
          <div className="h-full w-full">
            <MapDisplay pharmacies={pharmacies} />
          </div>
          
        </div>
        
      </main>

      {/* 3. Footer (Alt Bilgi) */}
      <footer className="bg-gray-800 text-gray-300 text-center p-4 mt-8">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} goettingen-notdienst-apotheke. 
            All data provided without guarantee.
          </p>
        </div>
      </footer>
      
    </div>
  );
}

export default App;