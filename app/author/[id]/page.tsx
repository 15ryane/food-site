'use client'

import authors, { Author } from "@/data/authors";
import recipes from "@/data/recipes";
import { useState } from "react";
import Header, { FilterOption, filterOptions } from "@/components/Header";
import Footer from "@/components/Footer";
import StyledLink from "@/components/StyledLink";

export default function AuthorPage({ params: { id } }: { params: { id: Author } }) {
  const [filter, setFilter] = useState<FilterOption>(filterOptions[0])
  const filtered = recipes.filter(r => r.author === id && (filter.id === 'all' || !!r[filter.id]))
  return <main className="grid gap-8">
    <Header filter={filter} setFilter={setFilter} />
    <section className="grid gap-2">
      <h2>
        Recipes by {authors[id].label}
      </h2>
      {filtered.length 
        ? <ol className="text-sm">
          {filtered.map((r) => (
            <li key={r.id}>
              <StyledLink href={`/recipe/${r.id}`}>{r.name}</StyledLink>
            </li>
          ))}
        </ol> 
        : <p className="text-sm pl-1">This author doesn't have any recipes that are {filter.label.toLocaleLowerCase()}.</p>
      }
    </section>
    <Footer />
  </main>
}