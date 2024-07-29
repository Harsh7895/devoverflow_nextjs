"use client";

import { HomePageFilters } from "@/contants/Filters";
import { Button } from "../ui/button";

export default function HomeFilteres() {
  let active = "newest";
  return (
    <div className="hidden mt-10 flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          onClick={() => (active = item.value)}
          key={item.value}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-noe ${
            active === item.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500 dark:text-light hover:bg-light-800 dark:bg-dark-300 dark:hover:bg-dark-300"
          }`}
        >
          {item.value}
        </Button>
      ))}
    </div>
  );
}
