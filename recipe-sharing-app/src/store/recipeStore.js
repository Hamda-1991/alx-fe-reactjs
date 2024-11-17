import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  setRecipes: (newRecipes) => set(() => ({ recipes: newRecipes })), // Replace entire recipe list
  addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })), // Add new recipe
  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })), // Update recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })), // Delete recipe by ID
}));

export default useRecipeStore;
