import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  
  const handleSearch = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks === null) {
          setNoResults(true);
          setLoading(false);
          setSearchResults([]);
        } else {
          setSearchResults(data.drinks);
          setLoading(false);
          setNoResults(false);
        }
      });
  };

  return (
    <div className="mx-2">
      <div className="flex justify-center my-4">
      <input
        type="text"
        className="w-full sm:w-1/4 p-2 rounded-lg bg-white border border-emerald-500 text-center text-sm"
        placeholder="Search for a drink..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search for a drink"
      />
        <button
          className="ml-2 bg-emerald-500 hover:bg-emerald-300 hover:text-white text-black font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {noResults ? (
        <p className="text-center" aria-live="polite" role="status">
          No drinks with that name.
        </p>
      ) : (
        <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <p></p>
          ) : (
            searchResults.map((drink) => (
              <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink} state={drink}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300 hover:border-emerald-300 transform transition duration-300 hover:scale-105">
                <img className="w-full" src={drink.strDrinkThumb} alt={drink.strDrink} aria-label={drink.strDrink} />
                  <div className="px-4 py-4 bg-emerald-500">
                    <div className="font-bold text-lg text-black truncate">{drink.strDrink}</div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
        </div>
      )}
    </div>
  );
};

export default Search;