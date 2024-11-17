import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  setRecipes: (newRecipes) => set((state) => {
    // Automatically trigger filtering after setting new recipes
    set({ recipes: newRecipes });
    set({ filteredRecipes: newRecipes }); // Set filtered recipes to the full list initially
  }),

  addRecipe: (recipe) => set((state) => {
    const newRecipes = [...state.recipes, recipe];
    set({ recipes: newRecipes });
    set({ filteredRecipes: newRecipes }); // Update filtered recipes after adding
  }),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      );
      set({ recipes: updatedRecipes });
      set({ filteredRecipes: updatedRecipes }); // Update filtered recipes after update
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const filteredRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      set({ recipes: filteredRecipes });
      set({ filteredRecipes: filteredRecipes }); // Update filtered recipes after deletion
    }),

  // New state for search functionality
  searchTerm: "", // Store the current search term
  setSearchTerm: (term) => {
    set({ searchTerm: term }); // Set search term action
    // Trigger filtering immediately when search term changes
    set((state) => {
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) // Filters by title
      );
      set({ filteredRecipes });
    });
  },

  // New state for filtered recipes based on search term
  filteredRecipes: [],
}));

export default useRecipeStore;
