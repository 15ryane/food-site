'use client'

import Badge from "@/components/Badge";
import Header, { FilterOption, filterOptions } from "@/components/Header";
import authors, { Author } from "@/data/authors";
import collections, { Collection } from "@/data/collections";
import recipes from "@/data/recipes";
import { groupBy, toKebabCase } from "@/lib/util";
import { Recipe } from "@/types/recipe";
import { Combobox, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";

const browseCriteria: Partial<Record<keyof Recipe, Record<string, { label: string }>>> = {
  'collection': collections,
  'author': authors
}

export default function Home() {
  const [filter, setFilter] = useState<FilterOption>(filterOptions[0])
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [query, setQuery] = useState<string>('')
  const filteredRecipes = (() => {
    const _filtered = recipes.filter(r => filter.id === 'all' ? true : !!r[filter.id])
    return query === ''
      ? _filtered
      : _filtered.filter((recipe: Recipe) => {
          if(filter.id !== 'all' && !recipe[filter.id]) return false
          return ([
            'name',
            'author', 
            'collection', 
          ] as Array<keyof Recipe>).some(criterion => {
            if(criterion === 'name') return recipe[criterion].toString().toLowerCase().includes((query ?? '').toLowerCase())
            return browseCriteria[criterion]![`${recipe[criterion]}`].label.toLowerCase().includes((query ?? '').toLowerCase())
          })
        })
  })()  
  return (
    <main className="grid gap-8">
      <Header filter={filter} setFilter={setFilter} />
      <section className="flex flex-col gap-8">
        <div className='relative'>
          <Combobox value={selectedRecipe} onChange={setSelectedRecipe} nullable immediate>
            <Combobox.Input 
              onChange={(event) => setQuery(event.target.value)} 
              className='border-solid rounded border-2 px-2 py-0.5 w-full' 
              placeholder='Search for recipes by name, author, or source'
              displayValue={(recipe: typeof selectedRecipe) => recipe?.name ?? '' }        
            />
            <Transition
              className="absolute w-full"
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Combobox.Options className='border-soild rounded drop-shadow-xl border-2 overflow-y-scroll max-h-[50vh] mt-0.5'>
                {filteredRecipes.map((recipe) => (
                  <Combobox.Option key={recipe.name} value={recipe} as={Fragment}>
                    {({ focus }) => (
                      <li
                        className={`${
                          focus ? 'bg-blue-500 text-white' : 'bg-white text-black'
                        } hover:cursor-pointer`}
                      >
                        <Link href={`/recipe/${recipe.id}`} className={`visited:text-black hover:text-white hover:no-underline ${focus ? 'text-white visited:text-white hover:text-white' : 'text-black'}`}>
                          <div className="px-1 py-2">
                            <div className='flex gap-3'>
                              {recipe.name}
                              {recipe.isVegan && <Badge>Vegan</Badge>}
                              {recipe.isVegetarian && !recipe.isVegan && <Badge>Vegetarian</Badge>}
                            </div>
                            <div className='italic font-light text-sm pl-1'>
                              {(authors[recipe.author as Author]).label}, from{" "} 
                              {collections[recipe.collection as Collection].searchLabel ?? 
                              collections[recipe.collection as Collection].label}
                            </div>
                          </div>
                        </Link>
                      </li>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Transition>
          </Combobox>
        </div>
        {Object.entries(browseCriteria).map(([criterion, criterionMap]) => {
          const grouped = groupBy(recipes, (r) => r[criterion as keyof Recipe])
          return (
            <div key={criterion} className='flex flex-col gap-2'>
              <h2 className='text-xl'>Browse by {criterion}:</h2>
              <ol className='text-md'>
                  {Object
                    .entries(grouped)
                    .sort((a, b) => criterionMap[a[0]].label.localeCompare(criterionMap[b[0]].label))
                    .map(([k,v]) => {
                      const filtered = v.filter(r => filter.id === 'all' || !!r[filter.id])
                      if(!filtered.length) return null
                      return <li key={`criteria-item-${toKebabCase(criterion)}-${toKebabCase(k)}`}>
                        <Link href={`/${criterion}/${k}`}>{criterionMap[k]?.label ?? k}</Link> ({filtered.length})
                      </li>
                    })
                  }
              </ol>
            </div>
          )
        })}
    </section>
    </main>
  )
}
