import React from 'react';
import type { BacheloretteOption } from '../types';

interface PreferenceFormProps {
  options: BacheloretteOption[];
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
  onSubmit: (event: React.FormEvent) => void;
}

const PreferenceForm: React.FC<PreferenceFormProps> = ({ options, selectedOption, onSelect, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold text-red-900 mb-6 text-center">✔ Esprimi il tuo Favore</h2>
      <fieldset className="space-y-4">
        <legend className="sr-only">Seleziona la tua opzione preferita</legend>
        {options.map((option) => {
          return (
            <div key={option.id}>
              <label
                htmlFor={option.id}
                className={`flex items-center p-4 border-2 rounded-lg transition-all duration-200 cursor-pointer hover:border-amber-400 ${
                  selectedOption === option.id
                    ? 'bg-amber-100 border-amber-500 shadow-md'
                    : 'bg-white border-amber-200'
                }`}
              >
                <input
                  type="radio"
                  id={option.id}
                  name="preference"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => onSelect(option.id)}
                  className="h-5 w-5 text-red-800 focus:ring-red-700 border-stone-400"
                />
                <span className="ml-4 text-lg font-semibold text-stone-800">{option.title} - <span className="font-normal text-stone-500 italic">{option.location}</span></span>
              </label>
            </div>
          )
        })}
      </fieldset>
      <div className="mt-8 text-center">
        <button
          type="submit"
          disabled={!selectedOption}
          className="bg-red-800 text-amber-50 font-bold py-3 px-10 rounded-md text-lg shadow-lg hover:bg-red-900 transition-all duration-300 disabled:bg-stone-400 disabled:cursor-not-allowed transform hover:scale-105"
        >
          Invia Preferenza
        </button>
      </div>
    </form>
  );
};

export default PreferenceForm;