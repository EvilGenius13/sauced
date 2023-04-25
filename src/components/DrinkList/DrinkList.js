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
      });
  }, [dropdownChoice]);

  return (
    <div className="mx-5 bg-emerald-4">
      {dropdownChoice === 'Age Verification' ? (
        <div className="flex justify-center my-4">
          <div className="p-2 rounded-lg bg-emerald-300 border border-gray-300 text-center text-md font-semibold">
            <p>You must be of legal drinking age to view this site.</p>
            <button onClick={handleAgeVerification}>Confirm Here</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center my-4">
            <select
              className="w-full sm:w-1/4 p-2 rounded-lg bg-emerald-300 border border-gray-300 text-center text-md font-semibold"
              onChange={(e) => setDropdownChoice(e.target.value)}
              value={dropdownChoice}
            >
              <option value="Cocktail">Cocktail</option>
              <option value="Shake">Shake</option>
              <option value="Beer">Beer</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            {loading ? (
              <p>Loading...</p>
            ) : (
              drinks.map((drink) => (
                <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink} state={drink}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-300 hover:border-emerald-300 transform transition duration-300 hover:scale-105">
                    <img className="w-full" src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <div className="px-6 py-4 bg-emerald-300">
                      <div className="font-bold text-base truncate">{drink.strDrink}</div>
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