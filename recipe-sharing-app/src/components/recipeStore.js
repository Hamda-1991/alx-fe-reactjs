// recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
}));

export default useRecipeStore; // Ensure this line is present for default export
