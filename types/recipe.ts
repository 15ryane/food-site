import { Author } from "@/data/authors";
import { Collection } from "@/data/collections";

export interface Recipe {
  id: string;
  name: string;
  author: Author;
  collection: Collection;
  description: string;
  prepTime: number;
  cookTime: number;
  recipeYield: string;
  isVegan: boolean;
  isVegetarian: boolean;
  recipeCategory: Category[];
  recipeCuisine: Cuisine[];
  recipeIngredient: string[];
  recipeInstructions: { name: string; text: string; }[];
}

export type Category = 'Dessert' | 'Entree' | 'Side' | 'Bread'
export type Cuisine = 'American' | 'German' | 'French' | 'Chinese' | 'Indian' | 'Italian' | 'British' | 'West African' | 'Filipino'