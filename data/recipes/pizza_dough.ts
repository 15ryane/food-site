import { Recipe } from "@/types/recipe";

export default {
    "id": "pizza-dough",
    "name": "Pizza Dough",
    "collection": "youtube",
    "author": "a-ragusea",
    "description": "Dough without measure.",
    "prepTime": 2400,
    "cookTime": 15,
    "recipeYield": "One pizza",
    "isVegan": true,
    "isVegetarian": true,
    "recipeCategory": ["Side"],
    "recipeCuisine": ["American"],
    "recipeIngredient": [
      "1/2 cup water",
      "1/2 tsp dry yeast",
      "1/2 tsp sugar",
      "1/2 tsp olive oil",
      "1/2 tsp salt",
      "1 cup flour, plus some extra"
    ],
    "recipeInstructions": [
      {
        "name": "Prepare dough",
        "text": "Combine all ingredients. Stir to just combine."
      },
      {
        "name": "Autolyze",
        "text": "Let sit for 30 mins."
      },
      {
        "name": "More flour",
        "text": "The dough should be stickier now. Add more flour."
      },
      {
        "name": "Rise",
        "text": "Let rise until doubled, about two hours."
      },
      {
        "name": "Store",
        "text": "Oil up a covered bowl and store your dough between 12 hours and up to 2 weeks. The dough will continue to rise in the fridge. Ensure that your bowl has enough headroom."
      },
      {
        "name": "Bake",
        "text": "Heat up a cast iron pan. Fry the dough in olive oil for about 2 minutes while adding toppings, then transfer to a 500 degree F oven for 10-12 minutes."
      },
    ]
  } as Recipe
  