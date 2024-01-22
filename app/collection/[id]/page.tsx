'use client'

import { useState } from "react";
import Link from "next/link";
import collections, { Collection } from "@/data/collections";
import recipes from "@/data/recipes";
import Header, { FilterOption, filterOptions } from "@/components/Header";
import Footer from "@/components/Footer";

export default function CollectionPage({ params: { id } }: { params: { id: Collection } }) {
  const [filter, setFilter] = useState<FilterOption>(filterOptions[0])
  const filtered = recipes.filter(r => r.collection === id && (filter.id === 'all' || !!r[filter.id]))
  return <main className="grid gap-8">
    <Header filter={filter} setFilter={setFilter} />
    <section className="grid gap-2">
      <h2>Recipes from {collections[id]?.searchLabel ?? collections[id].label}</h2>
      {filtered.length 
        ? <ol className="text-sm">
          {filtered.map((r) => (
            <li key={r.id}>
              <Link href={`/recipe/${r.id}`}>{r.name}</Link>
            </li>
          ))}
        </ol> 
        : <p className="text-sm pl-1">This collection doesn't have any recipes that are {filter.label.toLocaleLowerCase()}.</p>
      }
    </section>
    <Footer />
  </main>
}