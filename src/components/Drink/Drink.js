import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Drink.css';

const Drink = () => {
  const location = useLocation();
  const drink = location.state;
  const [drinkData, setDrinkData] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
      .then((response) => response.json())
      .then((data) => setDrinkData(data.drinks[0]));
  }, [drink.idDrink]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-16">
      <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="h-auto drink-menu drink-image" />
      </div>

      <div className="max-w-xl">
        <h1 className="text-3xl font-bold mb-4" aria-label="Drink name">{drink.strDrink}</h1>

        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2" aria-label="Ingredients list">Ingredients</h2>
          <ul aria-label="Ingredients">
            {drinkData &&
              Object.keys(drinkData)
                .filter((key) => key.startsWith('strIngredient') && drinkData[key])
                .map((key) => (
                  <li key={key}>
                    {drinkData[key]}
                    <span className="ml-2">{drinkData[`strMeasure${key.slice(13)}`]}</span>
                  </li>
                ))}
          </ul>
        </div>
        <h2 className="text-lg font-bold mb-2" aria-label="Instructions">Instructions</h2>
        <p className="text-lg" aria-label="Instructions description">{drinkData?.strInstructions}</p>
      </div>
    </div>
  );
};

export default Drink;