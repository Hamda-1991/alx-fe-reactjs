// src/components/RecommendationsList.jsx
import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations); // Get recommendations from the store
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  ); // Action to generate recommendations

  // Automatically generate recommendations when favorites change
  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
