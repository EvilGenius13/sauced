import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DrinkList = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownChoice, setDropdownChoice] = useState('Cocktail');
  
  useEffect(() => {
    setLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${dropdownChoice}`)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
        setLoading(false);
      });
  }, [dropdownChoice]);

  return (
    <div className="mx-2">
      <div className="flex justify-center my-4">
        <select
          className="w-full sm:w-1/4 p-2 rounded-lg bg-white border border-gray-300 text-center text-sm"
          onChange={(e) => setDropdownChoice(e.target.value)}
          value={dropdownChoice}
        >
          <option value="Cocktail">Cocktail</option>
          <option value="Shake">Shake</option>
          <option value="Beer">Beer</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          drinks.map((drink) => (
            <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink} state={drink}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={drink.strDrinkThumb} alt={drink.strDrink} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{drink.strDrink}</div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default DrinkList;