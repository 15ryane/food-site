import Footer from "@/components/Footer";
import Header from "@/components/Header";
import authors from "@/data/authors";
import collections from "@/data/collections";
import recipes from "@/data/recipes";
import { ClockIcon, GlobeAmericasIcon, UserIcon } from "@heroicons/react/16/solid";

export default function RecipePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) return <>Recipe not found.</>;
  return (
    <main className="grid gap-8">
      <Header supressRadioGroup />
      <section className="grid gap-4">
        <div className="grid gap-1">
          <h2 className="text-2xl font-semibold">{recipe.name}</h2>
          <span className="italic font-light text-xs">
            {authors[recipe.author].label}, from{" "}
            {collections[recipe.collection].searchLabel ??
              collections[recipe.collection].label}
          </span>
        </div>
        <p className="text-sm">{recipe.description}</p>
        <div className="grid gap-1">
          <span className="text-sm flex items-center gap-2">
            <GlobeAmericasIcon className="h-4 w-4" />
            {recipe.recipeCuisine}{" "}
            {recipe.recipeCategory.toString().toLocaleLowerCase()}
          </span>
          {!!recipe.prepTime && (
            <span className="flex items-center gap-2 text-sm">
              <ClockIcon className="h-4 w-4" />
              {recipe.prepTime} mins prep time
            </span>
          )}
          {!!recipe.cookTime && (
            <span className="flex items-center gap-2 text-sm">
              <ClockIcon className="h-4 w-4" />
              {recipe.cookTime} mins cook time
            </span>
          )}
          <span className="flex items-center gap-2 text-sm">
            <UserIcon className="h-4 w-4" />
            Makes {recipe.recipeYield.toLocaleLowerCase()}
          </span>
        </div>
      </section>
      <section className="grid gap-2">
        <h2>Ingredients</h2>
        <ol className="text-sm grid gap-0.5">
          {recipe.recipeIngredient.map((i, idx) => <li key={`ingredient-item-${idx}`}>{i}</li>)}
        </ol>
      </section>
      <section className="grid gap-2">
        <h2>Instructions</h2>
        <ol className="list-decimal grid gap-2">
          {recipe.recipeInstructions.map((i, idx) => (
            <li key={`instruction-item-${idx}`} className="">
              <h3 className="text-sm font-semibold">{i.name}</h3>
              <p className="text-sm">{i.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <Footer />
    </main>
  );
}
