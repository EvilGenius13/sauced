import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./DrinkList.css";

const DrinkList = () => {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownChoice, setDropdownChoice] = useState(
    localStorage.getItem("ageVerified") === "true" ? "Cocktail" : "Age Verification"
  );

  const handleAgeVerification = () => {
    localStorage.setItem("ageVerified", "true");
    setDropdownChoice("Cocktail");
  };

  useEffect(() => {
    if (dropdownChoice === "Age Verification") {
      return;
    }
    setLoading(true);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${dropdownChoice}`)
      .then((res) => res.json())
      .then((data) => {
        setDrinks(data.drinks);
        setLoading(false);
        console.log(dropdownChoice);
      });
  }, [dropdownChoice]);

  return (
    <div className="bg-emerald-100 min-h-screen mx-2">
      {dropdownChoice === 'Age Verification' ? (
        <div className="flex justify-center items-center w-full h-full">
          <div className="p-6 rounded-lg bg-white border border-gray-300 text-center text-lg font-semibold shadow-lg">
            <p className="mb-4">You must be of legal drinking age to view this site.</p>
            <button onClick={handleAgeVerification} className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400" aria-label="Confirm age verification">Confirm Here</button>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex justify-center mb-8">
            <label htmlFor="drink-type-select" className="sr-only">Select drink type</label>
            <select
              className="w-full sm:w-1/3 p-2 rounded-lg bg-emerald-500 border border-gray-300 text-black text-md font-semibold shadow-lg text-center"
              onChange={(e) => setDropdownChoice(e.target.value)}
              value={dropdownChoice}
              id="drink-type-select"
            >
              <option value="Cocktail">Cocktail</option>
              <option value="Shake">Shake</option>
              <option value="Shot">Shot</option>
              <option value="Beer">Beer</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <p>Loading...</p>
            ) : (
              drinks.map((drink) => (
                <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink} state={drink} aria-label={drink.strDrink}>
                  <div className="max-w-md rounded-lg overflow-hidden shadow-lg border border-gray-300 hover:border-emerald-500 transform transition duration-300 hover:scale-105 hover:-translate-y-2">
                    <img className="w-full " src={drink.strDrinkThumb} alt={drink.strDrink} />
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

export default DrinkList;