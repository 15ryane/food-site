type Recipe = {
  "name": string;
  "author": string;
  "source": string;
  "description": string;
  "prepTime": number;
  "cookTime": number;
  "recipeYield": string;
  "isVegan": boolean;
  "isVegetarian": boolean;
  "recipeCategory": Category[];
  "recipeCuisine": Cuisine[];
  "recipeIngredient": string[];
  "recipeInstructions": { name: string; text: string; }[];
}

type Category = 'Dessert' | 'Entree' | 'Side' | 'Bread'
type Cuisine = 'American' | 'German' | 'French' | 'Chinese' | 'Indian' | 'Italian'
