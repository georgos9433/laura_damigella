import React from 'react';
import type { BacheloretteOption } from '../types';

const ScrollIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const CoinPouchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h1a2 2 0 002-2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2a2 2 0 002 2h2m-4-12h8m-4 8v4" />
    </svg>
);

const SunMoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const CrownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-600 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path d="M18 7a1 1 0 00-1-1h-2a1 1 0 000 2h2a1 1 0 001-1zM4 6a1 1 0 011-1h2a1 1 0 110 2H5a1 1 0 01-1-1zM2 12a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zM16 11a1 1 0 100 2h1a1 1 0 100-2h-1zM6 16a1 1 0 100 2h8a1 1 0 100-2H6zM3 16a1 1 0 100 2h1a1 1 0 100-2H3zM16 15a1 1 0 110 2h1a1 1 0 110-2h-1z" />
      <path fillRule="evenodd" d="M6 3a1 1 0 011-1h6a1 1 0 011 1v2.586l1.293 1.293a1 1 0 01.293.707V12a1 1 0 01-1 1H5a1 1 0 01-1-1V7.586a1 1 0 01.293-.707L5 5.586V3a1 1 0 011-1zm1 1v1h4V4H7z" clipRule="evenodd" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-amber-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

// FIX: Define the props type for the OptionCard component.
interface OptionCardProps {
  option: BacheloretteOption;
}

const OptionCard: React.FC<OptionCardProps> = ({ option }) => {
  return (
    <div className="bg-amber-50 rounded-lg border-2 border-amber-300 shadow-lg overflow-hidden flex flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <img src={option.imageSrc} alt={option.title} className="w-full h-48 object-cover" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-red-800">{option.title}</h3>
        <p className="text-md font-semibold text-stone-500 mb-4 italic">{option.location}</p>
        
        {option.isBestValue && (
          <div className="mb-4">
            <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Consigliato per i servizi
            </span>
          </div>
        )}

        <div className="space-y-3 mb-4 text-stone-700">
          <div className="flex items-start">
            <ScrollIcon />
            <ul className="text-sm">
              {option.details.map((detail, index) => <li key={index}>- {detail}</li>)}
            </ul>
          </div>
          <div className="flex items-start">
            <CoinPouchIcon />
            <ul className="text-sm">
                {option.costs.map((cost, index) => <li key={index}>- <strong>{cost.label}:</strong> {cost.value}</li>)}
            </ul>
          </div>
           <div className="flex items-start">
            <SunMoonIcon />
            <span className="text-sm">{option.availability}</span>
          </div>
           {option.distanceFromRome && (
            <div className="flex items-start">
                <MapPinIcon />
                <span className="text-sm"><strong>Distanza da Roma:</strong> {option.distanceFromRome}</span>
            </div>
          )}
          {option.specialNote && (
            <div className="flex items-start p-2 bg-amber-100 border border-amber-200 rounded-md">
                <CrownIcon />
                <span className="text-amber-800 font-medium text-sm">{option.specialNote}</span>
            </div>
          )}
        </div>

        <div className="mt-auto pt-4 border-t border-amber-200">
          <a
            href={option.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center font-bold py-2 px-4 rounded-md transition-colors duration-300 shadow-md bg-red-800 text-amber-50 hover:bg-red-900"
          >
            Visita la Dimora
          </a>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;