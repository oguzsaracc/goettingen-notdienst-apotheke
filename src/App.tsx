import { useState } from 'react'
import React from 'react';
import pharmacyData from './data/pharmacies.json'; // 1. JSON verimizi import ediyoruz
import PharmacyCard from './components/PharmacyCard'; // 2. Yeni eczane kartı bileşenimizi import ediyoruz
import type{ Pharmacy } from './types'; // 3. Tip tanımımızı import ediyoruz

function App() {
  
  // 4. JSON'dan gelen 'onDuty' dizisini bir değişkene atıyoruz
  //    TypeScript'e bu dizinin 'Pharmacy' tipinde olduğunu söylüyoruz
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
          {/* Verinin ne zaman güncellendiğini gösterelim */}
          <span className="text-sm text-gray-500">
            Last updated: {new Date(pharmacyData.lastUpdated).toLocaleDateString()}
          </span>
        </div>
        
        
        {/* 5. Eczane Listesi */}
        {/* Burada 'pharmacies' dizisi üzerinde .map() ile dönüyoruz.
          Her bir 'pharmacy' objesi için bir <PharmacyCard> bileşeni oluşturuyoruz.
          'key' prop'u React'in listeyi verimli güncellemesi için zorunludur.
          'pharmacy' prop'u ile de veriyi bileşene aktarıyoruz.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {pharmacies.length > 0 ? (
              pharmacies.map(pharmacy => (
                <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
              ))
            ) : (
              <p className="text-gray-600">No pharmacies on duty found.</p>
            )}
          </div>
          
          {/* Harita alanı (şimdilik boş) */}
          <div className="bg-gray-200 rounded-lg shadow-inner min-h-[300px] md:min-h-full flex items-center justify-center">
            <p className="text-gray-500">Map will be here (Step 5)</p>
          </div>
          
        </div>
        
      </main>

      {/* 3. Footer (Alt Bilgi) */}
      <footer className="bg-gray-800 text-gray-300 text-center p-4 mt-8">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} goettingen-notdienst-apotheke. 
            All data provided without guarantee.
          </p>
        </div>
      </footer>
      
    </div>
  );
}

export default App;