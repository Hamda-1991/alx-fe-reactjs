// src/components/RecipeList.jsx
import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes); // Use filtered recipes
  const searchTerm = useRecipeStore((state) => state.searchTerm); // Get the search term
  const recipes = useRecipeStore((state) => state.recipes); // Get the complete list of recipes
  const filterRecipes = useRecipeStore((state) => state.filterRecipes); // Action to filter recipes

  // Automatically filter recipes whenever the search term or recipes list changes
  useEffect(() => {
    filterRecipes(); // Filter the recipes based on the current search term
  }, [searchTerm, recipes, filterRecipes]); // Dependencies ensure filtering happens when either search term or recipes change

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recipes found.</p> // Display a message if no recipes match the search
      )}
    </div>
  );
};

export default RecipeList;
