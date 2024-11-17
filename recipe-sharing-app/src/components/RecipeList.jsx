// src/components/RecipeList.jsx
import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes); // Use filtered recipes
  const searchTerm = useRecipeStore((state) => state.searchTerm); // Get the search term
  const recipes = useRecipeStore((state) => state.recipes); // Get the complete list of recipes
  const addFavorite = useRecipeStore((state) => state.addFavorite); // Action to add to favorites
  const removeFavorite = useRecipeStore((state) => state.removeFavorite); // Action to remove from favorites
  const favorites = useRecipeStore((state) => state.favorites); // Get current favorites

  // Automatically filter recipes whenever the search term or recipes list changes
  useEffect(() => {
    filterRecipes(); // Filter the recipes based on the current search term
  }, [searchTerm, recipes]);

  const handleFavoriteToggle = (recipeId) => {
    if (favorites.includes(recipeId)) {
      removeFavorite(recipeId); // Remove from favorites if already added
    } else {
      addFavorite(recipeId); // Add to favorites
    }
  };

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleFavoriteToggle(recipe.id)}>
              {favorites.includes(recipe.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
