import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [], // List of all recipes
  favorites: [], // List of favorite recipes (recipe IDs)
  filteredRecipes: [], // List of filtered recipes (for search)
  recommendations: [], // Personalized recommendations based on favorites
  
  // Action to set all recipes (and also trigger initial filtering)
  setRecipes: (newRecipes) => set((state) => {
    set({ recipes: newRecipes });
    set({ filteredRecipes: newRecipes }); // Set filtered recipes to the full list initially
  }),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set((state) => {
    const updatedFavorites = [...state.favorites, recipeId];
    set({ favorites: updatedFavorites });
    return { favorites: updatedFavorites };
  }),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => {
    const updatedFavorites = state.favorites.filter((id) => id !== recipeId);
    set({ favorites: updatedFavorites });
    return { favorites: updatedFavorites };
  }),

  // Action to generate recommendations based on the user's favorites
  generateRecommendations: () => set((state) => {
    // Example of generating recommendations: select recipes that are similar to favorites
    // For now, we'll mock it by selecting recipes that are not in favorites
    const recommended = state.recipes.filter(
      (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
    return { recommendations: recommended };
  }),

  // Action to update or add a recipe
  addRecipe: (recipe) => set((state) => {
    const newRecipes = [...state.recipes, recipe];
    set({ recipes: newRecipes });
    set({ filteredRecipes: newRecipes });
    return { recipes: newRecipes };
  }),

  // Action to update a recipe
  updateRecipe: (id, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    set({ recipes: updatedRecipes });
    set({ filteredRecipes: updatedRecipes });
    return { recipes: updatedRecipes };
  }),

  // Action to delete a recipe
  deleteRecipe: (id) => set((state) => {
    const filteredRecipes = state.recipes.filter((recipe) => recipe.id !== id);
    set({ recipes: filteredRecipes });
    set({ filteredRecipes: filteredRecipes });
    return { recipes: filteredRecipes };
  }),

  // New state for search functionality
  searchTerm: "", // Store the current search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => {
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      set({ filteredRecipes });
    });
  },
}));

export default useRecipeStore;
