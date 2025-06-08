import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const [cuisine, setCuisine] = useState<string>('');
  const [prepTime, setPrepTime] = useState<string>('');

  const isFormValid = query.length > 2 || cuisine || prepTime;

  const handleSearch = () : void => {
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (prepTime) params.append('maxReadyTime', prepTime);
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex items-center justify-center">
      <div className="w-full max-w-xl bg-gray-50 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">🍽 Recipe Finder</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Search recipe (e.g., pasta)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
          />
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-teal-500 outline-none"
          >
            <option value="">Select cuisine</option>
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Chinese">Chinese</option>
          </select>
          <input
            type="number"
            placeholder="Max preparation time (min)"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 outline-none"
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg text-white font-semibold transition cursor-pointer ${
            isFormValid ? 'bg-teal-600 hover:bg-teal-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
