import { Suspense, useEffect, useState } from "react";
import { Recipe } from "@/types/recipe";
import { fetchRecipes } from "../api/fetchRecipes";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      try {
        const { query, cuisine, maxReadyTime } = router.query as {
          query?: string;
          cuisine?: string;
          maxReadyTime?: string;
        };
        const data = await fetchRecipes({ query, cuisine, maxReadyTime });
        setRecipes(data);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [router.query]);

return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="flex justify-center relative">
<button
        onClick={() => router.push("/")}
        className="mb-6 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition absolute left-0 cursor-pointer"
      >
        ← Back to Search
      </button>
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Results</h1>
      </div>
      <Suspense fallback={<p>Loading...</p>}>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 cursor-pointer">
          {recipes.map(recipe => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
              <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
                <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{recipe.title}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Suspense>
    </div>
  );
}  