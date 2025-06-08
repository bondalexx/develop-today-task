import { Recipe } from "@/types/recipe";

interface FetchRecipesParams {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
}

export async function fetchRecipes({ query, cuisine, maxReadyTime }: FetchRecipesParams): Promise<Recipe[]> {
  const params = new URLSearchParams();
  if (query) params.append("query", query);
  if (cuisine) params.append("cuisine", cuisine);
  if (maxReadyTime) params.append("maxReadyTime", maxReadyTime);

  const res = await fetch(`/api/recipes?${params.toString()}`);

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  return res.json();
}