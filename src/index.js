import "./styles/index.scss";

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
