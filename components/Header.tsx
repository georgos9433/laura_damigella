import React from 'react';

interface HeaderProps {
  brideName: string;
}

const FleurDeLisIcon = () => (
    <svg
      role="img"
      aria-hidden="true" // Decorative icon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-16 w-16 text-red-800 opacity-70 hidden md:block" // Hide on small screens for better responsiveness
    >
        <path d="M10,0.5L8.5,5.5H5.5L7,8.5l-3,1.5V12h5v7.5h2V12h5v-2l-3-1.5L14.5,5.5H11.5L10,0.5z M10,8 C10.8284271,8 11.5,8.67157288 11.5,9.5C11.5,10.3284271 10.8284271,11 10,11 C9.17157288,11 8.5,10.3284271 8.5,9.5 C8.5,8.67157288 9.17157288,8 10,8z"/>
    </svg>
);

const Header: React.FC<HeaderProps> = ({ brideName }) => {
  return (
    <header className="relative text-center py-20 px-4 bg-amber-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/worn_dots.png')] opacity-20"></div>
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto border-y-2 border-amber-400 py-4 flex items-center justify-center space-x-4 md:space-x-8">
            <FleurDeLisIcon />
            <h1 className="text-5xl md:text-7xl font-bold text-red-900">
              Addio al Nubilato
              <span className="block text-4xl md:text-6xl font-bold mt-2">di {brideName}</span>
            </h1>
            <FleurDeLisIcon />
        </div>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-stone-700 mt-6">
          Gentili partecipanti, di seguito trovate una selezione di strutture proposte per il pernottamento. Vi invitiamo a leggere attentamente le opzioni e a indicare la vostra preferenza.
        </p>
      </div>
    </header>
  );
};

export default Header;