import { useState } from 'react';

const elvenShieldRevipe = {
  leatherStrips: 2,
  ironIgnot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRevipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRevipe);
console.log(elvenGauntletsRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRevipe)}>
        Elven Shield Recipe
      </button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlet Recipe
      </button>
      <ul>
        {Object.keys(recipe).map(material => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
