import { Recipe } from "@/types/recipe";

export default {
    "id": "pickles",
    "name": "Pickles",
    "collection": "unsourced",
    "author": "a-adams",
    "description": "Yep. Pickles.",
    "prepTime": 10,
    "cookTime": 5,
    "recipeYield": "Two 1 pint mason jars",
    "isVegan": true,
    "isVegetarian": true,
    "recipeCategory": ["Side"],
    "recipeCuisine": ["American"],
    "recipeIngredient": [
      "1 lb cucumber, or any other pickleable veg",
      "1 cup apple cider vinegar",
      "1 cup water",
      "1-2 tbsp sugar",
      "1 tbsp kosher salt",
      "1 tsp pepper flakes",
      "1 1/2 tsp pickling spice (rosemary, mustard seed, dill, etc...)",
      "6 cloves garlic"
    ],
    "recipeInstructions": [
      {
        "name": "Prepare liquid",
        "text": "Boil vinegar, sugar, salt, and water. Add spice and pepper flakes. Let cool."
      },
      {
        "name": "Pack jars",
        "text": "Distribute veg evenly between the jars."
      },
      {
        "name": "Add liquid",
        "text": "Pour in liquid, taking care that it completely covers the veg."
      }
    ]
  } as Recipe
  