import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Recipe title is required.";
    if (!ingredients) newErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Please include at least two ingredients.";
    if (!steps) newErrors.steps = "Preparation steps are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const newRecipe = { title, ingredients, steps };
    console.log("Submitted Recipe:", newRecipe);
    alert("Recipe submitted successfully!");

    // Reset form fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="E.g., sugar, flour, eggs"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="steps"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Describe the steps to prepare the recipe"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
