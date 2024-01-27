import { Recipe } from "@/types/recipe";
import { Label, RadioGroup } from "@headlessui/react";
import Link from "next/link";

export type FilterOption = {
  id: keyof Recipe | "all";
  label: string;
};

export const filterOptions: Array<FilterOption> = [
  { id: "all", label: "All" },
  { id: "isVegetarian", label: "Only Vegetarian" },
  { id: "isVegan", label: "Only Vegan" },
];

export default function Header({
  filter,
  setFilter,
  supressRadioGroup
}: {
  filter?: FilterOption;
  setFilter?: React.Dispatch<React.SetStateAction<FilterOption>>;
  supressRadioGroup?: boolean
}) {
  return (
    <header className="grid gap-3">
      <Link href="/" className="hover:underline">
        <h1 className="text-xl sm:text-2xl">The Adams-Ryan Cookbook</h1>
      </Link>
      {!supressRadioGroup && <RadioGroup
        value={filter}
        onChange={setFilter}
        className="flex flex-row gap-3 items-center"
      >
        <Label className="mr-1">Show:</Label>
        {filterOptions.map((option) => (
          <RadioGroup.Option
            key={option.id}
            value={option}
            className={({ checked, hover }) =>
              `${
                hover
                  ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-500"
                  : ""
              }
                ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                cursor-pointer focus:outline-none rounded px-3 py-1 text-sm sm:text-base`
            }
          >
            {option.label}
          </RadioGroup.Option>
        ))}
      </RadioGroup>}
    </header>
  );
}
