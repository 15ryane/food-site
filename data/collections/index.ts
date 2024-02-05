export enum Collection {
  UNSOURCED = "unsourced",
  AMISH_BREAD_SITE = "amish-bread-site",
  GOOGLE = "google",
  HELLO_FRESH = "hello-fresh",
  FRENCH_COOKING = "mastering-the-art-of-french-cooking",
  CYAN_BINDER = "cyan-binder",
  PHOTO_COOKBOOK = "photo-cookbook",
  JOY_OF_COOKING = "the-joy-of-cooking",
  NYT = "nyt",
  NYT_MAG = "nyt-mag",
  ALLRECIPES = "allrecipes",
  SERIOUSEATS = "seriouseats"
}

const collections = {
  [Collection.UNSOURCED]: {
    "label": "Unsourced",
    "searchLabel": "an unknown source"
  },
  [Collection.SERIOUSEATS]: {
    "label": "Serious Eats",
    "searchLabel": "Serious Eats"
  },
  [Collection.ALLRECIPES]: {
    "label": "allrecipes.com",
    "searchLabel": "allrecipes.com"
  },
  [Collection.AMISH_BREAD_SITE]: {
    "label": "Amish Bread Site",
    "searchLabel": "an Amish Bread site"
  },
  [Collection.GOOGLE]: {
    "label": "Google",
  },
  [Collection.HELLO_FRESH]: {
    "label": "Hello Fresh",
  },
  [Collection.FRENCH_COOKING]: {
    "label": "Mastering the Art of French Cooking"
  },
  [Collection.CYAN_BINDER]: {
    "label": "Adams Cyan Binder",
    "searchLabel": "the Adams Cyan Binder"
  },
  [Collection.PHOTO_COOKBOOK]: {
    "label": "Adams Photo Cookbook",
    "searchLabel": "the Adams Photo Cookbook"
  },
  [Collection.JOY_OF_COOKING]: {
    "label": "The Joy of Cooking",
  },
  [Collection.NYT]: {
    "label": "New York Times",
    "searchLabel": "the New York Times"
  },
  [Collection.NYT_MAG]: {
    "label": "New York Times Magazine",
    "searchLabel": "the New York Times Magazine"
  },
} as Record<Collection, { label: string, searchLabel?: string }>

export default collections
