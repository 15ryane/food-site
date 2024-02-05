import { Recipe } from "@/types/recipe";

export default {
    "id": "chocolate-chip-cookies",
    "name": "Chocolate Chip Cookies",
    "collection": "seriouseats",
    "author": "jkla",
    "description": "Greatly simplified from the original.",
    "prepTime": 20,
    "cookTime": 15,
    "recipeYield": "20 cookies",
    "isVegan": false,
    "isVegetarian": true,
    "recipeCategory": ["Dessert"],
    "recipeCuisine": ["American"],
    "recipeIngredient": [
      "170g (1.5 sticks) unsalted butter",
      "310g all-purpose flour",
      "3g baking soda",
      "4g salt",
      "200g granulated sugar",
      "1 glug of molasses",
      "2 eggs",
      "10ml (about 2 tsp) vanilla extract",
      "200g chocolate chips"
    ],
    "recipeInstructions": [
      {
        "name": "Brown butter",
        "text": "Brown butter in a pan. Let cool."
      },
      {
        "name": "Mix",
        "text": "Toss all ingredients except mix-ins and butter in a stand mixer."
      },
      {
        "name": "Mix more",
        "text": "Add cool butter. Mix more."
      },
      {
        "name": "Mix even more",
        "text": "Add chocolate and other mix-ins. Mix even more."
      },
      {
        "name": "Rest",
        "text": "Cover and let sit in the fridge for at least 12 hours and no more than 4 days."
      },
      {
        "name": "Bake",
        "text": "Spoon into ~2tbsp sized nuggets on a baking sheet. Bake at 350 degrees F for 13 mins."
      },
    ]
  } as Recipe
