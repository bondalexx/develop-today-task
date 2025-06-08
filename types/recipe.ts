export interface RecipeSearchResult {
  results: {
    id: number;
    title: string;
    image: string;
  }[];
  totalResults: number;
}

export interface RecipeDetails {
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  summary: string;
  extendedIngredients: {
    id: number;
    original: string;
  }[];
}


export interface Recipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  summary?: string;
}
