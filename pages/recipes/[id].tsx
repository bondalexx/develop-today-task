import { RecipeDetails } from "@/types/recipe";
export async function getServerSideProps(
  context: { params: { id: string } }
): Promise<{ props: { recipe: RecipeDetails | null } }> {
  const { id } = context.params;
  const apiKey = process.env.SPOONACULAR_API_KEY;

  try {
    const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
    const data = (await res.json()) as RecipeDetails;
    return { props: { recipe: data } };
  } catch {
    return { props: { recipe: null } };
  }
}

export default function RecipeDetail({ recipe }: { recipe: RecipeDetails }) {
  if (!recipe) return <div className="p-6">Error loading recipe.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-4">
        <h1 className="text-2xl font-bold">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {recipe.extendedIngredients?.map((ing: { id: number; original: string }) => (
  <li key={ing.id}>{ing.original}</li>
))}
        </ul>
        <p className="text-gray-600">{recipe.readyInMinutes} min | 🍽 {recipe.servings} servings</p>
      </div>
    </div>
  );
}