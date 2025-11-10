import React from 'react';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const CoinsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const DressIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c-3 3-5 5-5 7 0 1.5 1 3 3 3h4c2 0 3-1.5 3-3 0-2-2-4-5-7zM8 12h8v8H8v-8z" />
        <path d="M12 2l-2 4h4z" />
    </svg>
);

const CarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875M10.5 6h9.75M10.5 6a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5M10.5 6v7.5" />
    </svg>
);


const OrganizationalDetails: React.FC = () => {
    return (
        <section id="details" className="mb-16 max-w-3xl mx-auto">
            <div className="bg-amber-50/60 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-amber-300">
                <h2 className="text-3xl font-bold text-red-900 mb-6 text-center">📌 Editti del Regno</h2>
                <ul className="space-y-4 text-lg text-stone-700">
                    <li className="flex items-center">
                        <span className="text-red-900 mr-4 shrink-0"><CalendarIcon /></span>
                        <div>
                            <strong className="text-red-900">Date proposte:</strong> Febbraio/Marzo (con specifiche per feudo)
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-red-900 mr-4 shrink-0"><CoinsIcon /></span>
                        <div>
                            <strong className="text-red-900">Tributo stimato:</strong> <strong>Costo spa + notte con colazione</strong>: dai 120 euro ai 200 euro (con mezza pensione).
                            <p className="text-stone-600 mt-1"><strong>Costo viaggio stimato:</strong> medio 60 euro A/R (per macchina, quindi idealmente 15 euro a persona).</p>
                            <p className="text-stone-600 mt-1"><strong>Quota Sposa:</strong> circa 15€ in più a persona (la cifra esatta dipenderà dal numero di partecipanti e dall'opzione scelta).</p>
                        </div>
                    </li>
                    <li className="flex items-center">
                        <span className="text-red-900 mr-4 shrink-0"><DressIcon /></span>
                        <div>
                            <strong className="text-red-900">Vestiario di corte:</strong> [Da definire]
                        </div>
                    </li>
                     <li className="flex items-start">
                        <span className="text-red-900 mr-4 shrink-0"><CarIcon /></span>
                        <div>
                            <strong className="text-red-900">Come arrivare:</strong> Organizziamo macchinate da Roma. Per gli amici di fuori, possibilità di essere recuperati nelle stazioni vicine alle strutture se più comodo.
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default OrganizationalDetails;