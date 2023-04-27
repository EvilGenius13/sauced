import React, { useEffect, useState } from 'react';

const Random = () => {
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((res) => res.json())
      .then((data) => {
        setDrink(data.drinks[0]);
      });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-16">
      {drink && (
        <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mr-8">
          <img 
            src={drink.strDrinkThumb} 
            alt={drink.strDrink} 
            className="h-auto drink-menu" 
            aria-label={drink.strDrink} 
          />
        </div>
      )}

      {drink && (
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold mb-4">{drink.strDrink}</h1>

          <div className="mb-4">
            <h2 className="text-lg font-bold mb-2">Ingredients</h2>
            <ul>
              {Object.keys(drink)
                .filter((key) => key.startsWith('strIngredient') && drink[key])
                .map((key) => (
                  <li key={key}>
                    {drink[key]}
                    <span className="ml-2">{drink[`strMeasure${key.slice(13)}`]}</span>
                  </li>
                ))}
            </ul>
          </div>

          <h2 className="text-lg font-bold mb-2">Instructions</h2>
          <p className="text-lg" id="instructions">{drink.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default Random;