// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const foodsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      foods: z.array(z.string())
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  recipes: foodsCollection,
};