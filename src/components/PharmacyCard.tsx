import React from 'react';
import type { Pharmacy } from '../types';

// Import modern icons
import { HiMapPin, HiPhone, HiArrowTopRightOnSquare, HiGlobeAlt, HiClock } from 'react-icons/hi2';

// Helper function to generate Google Maps link (Corrected Version)
const getDirectionsUrl = (address: string) => {
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
};

interface Props {
  pharmacy: Pharmacy;
}

const PharmacyCard: React.FC<Props> = ({ pharmacy }) => {
  return (
    // Card container with hover transition effects
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 mb-4 
                    transition-all duration-200 hover:shadow-xl hover:scale-[1.01]">
      <div className="p-5">
        
        {/* Pharmacy Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {pharmacy.name}
        </h3>
        
        {/* Address Info */}
        <div className="flex items-center text-gray-700 mb-2">
          <HiMapPin className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" />
          <span>{pharmacy.address}</span>
        </div>
        
        {/* Phone Info */}
        <div className="flex items-center text-gray-700 mb-4">
          <HiPhone className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0" />
          <a href={`tel:${pharmacy.phone}`} className="hover:text-blue-600 hover:underline">
            {pharmacy.phone}
          </a>
        </div>

        {pharmacy.onDutySchedule && (
          <div className="flex items-center text-blue-700 font-medium text-sm p-3 bg-blue-50 border border-blue-200 rounded-lg mb-4">
            <HiClock className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>{pharmacy.onDutySchedule}</span>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          
          {/* Get Directions Button */}
          <a
            href={getDirectionsUrl(pharmacy.address)}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            <HiArrowTopRightOnSquare className="w-4 h-4" /> 
            Get Directions
          </a>
          
          {/* Website Button (conditional) */}
          {pharmacy.url && (
            <a
              href={pharmacy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition-colors"
            >
              <HiGlobeAlt className="w-4 h-4" />
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PharmacyCard;