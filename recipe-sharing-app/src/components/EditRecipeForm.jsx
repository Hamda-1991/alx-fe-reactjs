import React, { useState } from "react";
import useRecipeStore from "../store/recipeStore"; // Ensure this is correct

const EditRecipeForm = ({ recipeId, initialRecipeData }) => {
  const { updateRecipe } = useRecipeStore(); // Use store methods
  const [recipeData, setRecipeData] = useState(initialRecipeData);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Update the recipe data in the store
    updateRecipe(recipeId, recipeData);
    // Optionally, reset or close the form
    console.log("Recipe updated", recipeData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Name:
        <input
          type="text"
          name="name"
          value={recipeData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Ingredients:
        <textarea
          name="ingredients"
          value={recipeData.ingredients}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
