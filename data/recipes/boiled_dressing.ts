import { Recipe } from "@/types/recipe";

export default {
    "id": "boiled-dressing",
    "name": "Boiled Dressing",
    "collection": "cyan-binder",
    "author": "anon",
    "description": "You can put this on coleslaw.",
    "prepTime": 10,
    "cookTime": 0,
    "recipeYield": "One dinner",
    "isVegan": false,
    "isVegetarian": true,
    "recipeCategory": ["Side"],
    "recipeCuisine": ["American"],
    "recipeIngredient": [
      "2/3 cup sugar",
      "2 tbsp and 2 tsp flour",
      "2 tsp salt",
      "2 tsp dry mustard",
      "2 eggs",
      "1 cup cider vinegar"
    ],
    "recipeInstructions": [
      {
        "name": "Make paste",
        "text": "Combine dry ingredients in a unheated medium saucepan. Stir in beaten eggs to make a paste."
      },
      {
        "name": "Bring to temperature",
        "text": "Put the saucepan on medium heat. Gradually add vinegar, then water, stirring constantly until thickened and smooth."
      },
      {
        "name": "Boil",
        "text": "Bring to a boil. Boil gently for 1 minute."
      },
      {
        "name": "Store",
        "text": "Cool, jar, and refrigerate. This will keep indefinitely (allegedly)."
      }
    ]
  } as Recipe
  