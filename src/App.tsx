import pharmacyData from './data/pharmacies.json';
import PharmacyCard from './components/PharmacyCard';
import MapDisplay from './components/MapDisplay';
import type { Pharmacy } from './types';

function App() {
  
  const pharmacies: Pharmacy[] = pharmacyData.onDuty;
  
  return (
    // Outer background
    <div className="flex flex-col min-h-screen bg-gray-100"> 
      
      {/* Main App Container (Centered with shadow) */}
      <div className="flex flex-col flex-grow mx-auto w-full max-w-7xl bg-white shadow-xl rounded-lg my-8">
        
        {/* 1. Navbar (Header) */}
        <header className="bg-blue-700 text-white shadow-md rounded-t-lg">
          <nav className="container mx-auto px-6 py-4">
            <h1 className="text-3xl font-extrabold">
              Göttingen Notdienst Apotheke
            </h1>
            <p className="text-blue-100 mt-1">Emergency Pharmacy Finder</p>
          </nav>
        </header>

        {/* 2. Main Content Area */}
        <main className="flex-grow p-6">
          
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-2">
            <h2 className="text-2xl font-bold text-gray-800">
              Today's On-Duty Pharmacies
            </h2>
            <span className="text-sm text-gray-500 flex-shrink-0">
              Last updated: {new Date(pharmacyData.lastUpdated).toLocaleDateString()}
            </span>
          </div>
          
          {/* Content Grid (List & Map) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Column: Pharmacy List */}
            <div className="space-y-4">
              {pharmacies.length > 0 ? (
                pharmacies.map(pharmacy => (
                  <PharmacyCard key={pharmacy.id} pharmacy={pharmacy} />
                ))
              ) : (
                <p className="text-gray-600">No pharmacies on duty found.</p>
              )}
            </div>
            
            {/* Right Column: Map */}
            <div className="h-full w-full min-h-[400px]">
              <MapDisplay pharmacies={pharmacies} />
            </div>
            
          </div>
          
        </main>

        {/* 3. Footer */}
        <footer className="bg-gray-800 text-gray-300 text-center p-4 rounded-b-lg mt-auto">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} goettingen-notdienst-apotheke. 
              All data provided without guarantee.
            </p>
          </div>
        </footer>

      </div>
      
    </div>
  );
}

export default App;