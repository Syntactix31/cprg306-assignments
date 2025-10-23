"use client"

import Item from "./item";
import items from './item.json';

import { useState } from "react";


export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortBy === "index") {
      const categoryCompare = a.category.localeCompare(b.category);
      return categoryCompare !== 0 ? categoryCompare : a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="mx-[25vw] px-10 pt-10 pb-5 bg-red-200 min-w-list">
      <div className="flex gap-4 mb-6 lg:pl-4 pl-0">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded 
            ${sortBy === "name" ? "bg-blue-500 text-white font-semibold" : "bg-gray-100 font-semibold"}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded 
            ${sortBy === "category" ? "bg-blue-500 text-white font-semibold" : "bg-gray-100 font-semibold"}`}
        >
          Sort by Category
        </button>

        {/* // TODO Later (Optional Activity) */}
        <button
          onClick={() => setSortBy("index")}
          className={`px-4 py-2 rounded 
            ${sortBy === "index" ? "bg-white text-red-500 rounded-4xl outline-3 font-semibold" : "bg-red-500 text-white rounded-4xl font-semibold"}`}
        >
          Grocery Index
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>


    </div>
  );
}







