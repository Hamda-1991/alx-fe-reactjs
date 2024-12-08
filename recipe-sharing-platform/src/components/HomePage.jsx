import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import recipeData from "../data.json"; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the recipe data when the component mounts
    setRecipes(recipeData);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`} // Navigate to the Recipe Detail Page
                className="text-blue-500 hover:underline mt-4 inline-block"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
