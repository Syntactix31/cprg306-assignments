"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null); // Error handling for the fetch API

  async function loadMealIdeas() {
    try {
      const result = await fetchMealIdeas(ingredient);
      setMeals(result);
      setError(null);
    } catch (e) {
      setError(e.message);
      setMeals([]);
    }
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
    }
  }, [ingredient]); // Update paint with change in ingredient, if its empty it just does it once

  return (
    <div>
      <h1 className="p-4 font-bold text-center mr-10">Meal Ideas</h1>
      {error && <div>Error: {error}</div>}
      <ul className="mr-10">
        {meals.map(meal => (
          <li key={meal.idMeal} className="bg-white p-6 my-2 border-4 border-red-200 rounded-2xl">
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} width={100} />
          </li>
        ))}
      </ul>
    </div>
  );
}
