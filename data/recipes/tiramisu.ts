import { Recipe } from "@/types/recipe";

export default {
    "id": "tiramisu",
    "name": "Tiramisu",
    "collection": "photo-cookbook",
    "author": "chef-dennis",
    "description": "\"It's really tasty!\" - Abigail Adams",
    "prepTime": 35,
    "cookTime": 0,
    "recipeYield": "1 cake",
    "isVegan": false,
    "isVegetarian": true,
    "recipeCategory": ["Dessert"],
    "recipeCuisine": ["Italian"],
    "recipeIngredient": [
      "6 egg yolk",
      "1 cup sugar",
      "1 1/4 cup mascarapone",
      "1 3/4 cup egg white",
      "1 cup espresso",
      "1/2 cup coffee liqueur",
      "14 oz lady finger",
      "dusting of cocoa"
    ],
    "recipeInstructions": [
      {
        "name": "Prepare sabayon",
        "text": "Heat up egg yolks and sugar in a double boiler for 10 minutes. Whip yolk and sugar mixture until thick. Fold in the mascarapone."
      },
      {
        "name": "Make meringue",
        "text": "In a seperate bowl, whip egg whites until stiff peaks. Fold into the rest."
      },
      {
        "name": "Prepare cookies",
        "text": "Mix coffee liqueur and espresso. Into the coffee, dip the lady fingers."
      },
      {
        "name": "Do first layer",
        "text": "Layer half in the bottom of a 9 x 9 inch dish. Top with half of the egg mixture."
      },
      {
        "name": "Do second layer",
        "text": "Repeat for the second layer."
      }
    ]
  } as Recipe
  