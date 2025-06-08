import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, cuisine, maxReadyTime } = req.query;

  const params = new URLSearchParams({
    apiKey: process.env.SPOONACULAR_API_KEY || "",
    number: "10",
  });

  if (query) params.append("query", String(query));
  if (cuisine) params.append("cuisine", String(cuisine));
  if (maxReadyTime) params.append("maxReadyTime", String(maxReadyTime));

  const spoonacularUrl = `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`;

  try {
    const response = await fetch(spoonacularUrl);
    if (!response.ok) {
      console.error("Spoonacular error:", await response.text());
      throw new Error("Failed to fetch from Spoonacular");
    }

    const data = await response.json();
    res.status(200).json(data.results); // Send only recipes
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
}