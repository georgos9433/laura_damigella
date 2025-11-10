import React from 'react';
import Header from './components/Header';
import OptionCard from './components/OptionCard';
import OrganizationalDetails from './components/OrganizationalDetails';
import { PARTY_OPTIONS, BRIDE_NAME } from './constants';
import type { BacheloretteOption } from './types';

// INSERISCI QUI IL LINK AL TUO GOOGLE FORM
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSejcqYs25fqRUM3frQKlNhL-iZp-BRhCX8xLXp96cwx0W2CVQ/viewform?usp=publish-editor"; 

const App: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen text-stone-800" style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/old_map.png')" }}>
      <Header brideName={BRIDE_NAME} />

      <main className="container mx-auto px-4 py-8 md:py-16">
        <section id="options" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-red-900 mb-12">
            Le Proposte del Reame
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PARTY_OPTIONS.map((option: BacheloretteOption) => (
              <OptionCard key={option.id} option={option} />
            ))}
          </div>
        </section>

        <OrganizationalDetails />

        <section id="preference" className="max-w-3xl mx-auto bg-amber-50/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-amber-300">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-900 mb-6">✔ Esprimi il tuo Favore</h2>
            <p className="text-lg text-stone-700 mb-8">
              Ora che hai visionato le proposte, clicca sul pulsante qui sotto per esprimere la tua preferenza tramite il nostro sondaggio. La tua voce è importante per la Corona!
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-800 text-amber-50 font-bold py-3 px-10 rounded-md text-lg shadow-lg hover:bg-red-900 transition-all duration-300 transform hover:scale-105"
            >
              Vota Ora!
            </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-stone-600 text-sm">
        <p>Con affetto, la tua fidata ancella ❤️</p>
      </footer>
    </div>
  );
};

export default App;