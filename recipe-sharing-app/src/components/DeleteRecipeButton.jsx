import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import useRecipeStore from "../store/recipeStore"; // Assuming you're using the store for deleting recipes

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate(); // Initialize the navigate function from useNavigate
  const { deleteRecipe } = useRecipeStore(); // Assuming deleteRecipe is the function to remove a recipe

  const handleDelete = () => {
    // Call the deleteRecipe function from the store to delete the recipe
    deleteRecipe(recipeId);

    // Optionally navigate to another page after deletion (e.g., back to the recipe list)
    navigate("/recipes"); // Navigate to the /recipes page
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
