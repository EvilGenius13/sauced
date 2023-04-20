import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data.drinks);
      });
  };

  return (
    <div className="mx-2">
      <div className="flex justify-center my-4">
        <input
          type="text"
          className="w-full sm:w-1/4 p-2 rounded-lg bg-white border border-gray-300 text-center text-sm"
          placeholder="Search for a drink..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {searchResults.map((drink) => (
          <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink} state={drink}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={drink.strDrinkThumb} alt={drink.strDrink} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{drink.strDrink}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;