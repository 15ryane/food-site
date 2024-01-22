import { Recipe } from "@/types/recipe";

export default {
    "id": "white-bread-machine-bread",
    "name": "White Bread Machine Bread",
    "collection": "unsourced",
    "author": "j-adams",
    "description": "The greatest recipe known to bread machine.",
    "prepTime": 5,
    "cookTime": 300,
    "recipeYield": "One 1.5lb loaf",
    "isVegan": true,
    "isVegetarian": true,
    "recipeCategory": ["Bread"],
    "recipeCuisine": ["American"],
    "recipeIngredient": [
      "9.5 oz water",
      "12.375 oz all purpose flour",
      "2 oz gluten",
      "1.5 tsp sugar",
      "1.5 tsp yeast",
      "1 tsp table salt"
    ],
    "recipeInstructions": [
      {
        "name": "Liquids",
        "text": "Put water in baking pan. Make sure the paddle is in there."
      },
      {
        "name": "Everything but the yeast",
        "text": "Add everything except the yeast."
      },
      {
        "name": "Yeast",
        "text": "Make a well in the dry ingredients. Put the yeast in the well."
      },
      {
        "name": "Bake",
        "text": "Bake."
      },
    ]
  } as Recipe
  