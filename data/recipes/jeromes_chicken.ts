import { Recipe } from "@/types/recipe";

export default {
    "id": "jeromes-chicken",
    "name": "Jerome's Chicken",
    "collection": "photo-cookbook",
    "author": "j-adams",
    "description": "A good general purpose marinade for general purpose chicken.",
    "prepTime": 10,
    "cookTime": 350,
    "recipeYield": "Lots of chicken",
    "isVegan": false,
    "isVegetarian": false,
    "recipeCategory": ["Entree"],
    "recipeCuisine": ["American"],
    "recipeIngredient": [
      "8 lbs chicken",
      "1 tsp black pepper",
      "2 tsp salt",
      "1 tsp Italian seasoning",
      "5 tbsp garlic",
      "12 oz vinegar",
      "4 oz lemon juice",
      "8 oz hot water (???)",
    ],
    "recipeInstructions": [
      {
        "name": "Make marinade",
        "text": "Combine all ingredients but chicken."
      },
      {
        "name": "Prepare chicken",
        "text": "Marinade chicken."
      },
      {
        "name": "Grill",
        "text": "Grill chicken."
      },
    ]
  } as Recipe
  