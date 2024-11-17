import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
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
  
  // New state for search functionality
  searchTerm: "", // Store the current search term
  setSearchTerm: (term) => set({ searchTerm: term }), // Set search term action

  // New state for filtered recipes based on search term
  filteredRecipes: [],

  // Action to filter recipes based on search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) // Filters by title
      ),
    })),
}));

export default useRecipeStore;
