import { Recipe } from "@/types/recipe";

export default {
    "id": "pasta-salad",
    "name": "Pasta Salad",
    "collection": "photo-cookbook",
    "author": "j-adams",
    "description": "The one and only.",
    "prepTime": 20,
    "cookTime": 0,
    "recipeYield": "4 small salads",
    "isVegan": false,
    "isVegetarian": true,
    "recipeCategory": ["Side"],
    "recipeCuisine": ["American"],
    "recipeIngredient": [
      "1 lb pasta (preferrably radiatore)",
      "1/2 cup olive oil (probably more)",
      "1/2 cup vingear",
      "1/4 lemon juice",
      "12 greek olives",
      "5-8 leaves basil",
      "1/4 cup fresh rosemary",
      "1/4 cup fresh chives",
      "1 tsp salt",
      "1 tbsp minced garlic",
      "1/2 cup romano or parmesean cheese",
      "1/4 pine nuts"
    ],
    "recipeInstructions": [
      {
        "name": "Do pasta",
        "text": "Boil pasta, then mix with oil to prevent sticking."
      },
      {
        "name": "Do prep",
        "text": "Chop chives. Roast pine nuts. Grate cheese. Mince garlic. Mince herbs. Quarter olives."
      },
      {
        "name": "Prepare salad",
        "text": "Mix remaining ingredients. Let sit overnight."
      }
    ]
  } as Recipe
  