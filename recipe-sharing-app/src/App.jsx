// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar"; // Import the SearchBar component
import FavoritesList from "./components/FavoritesList"; // Import FavoritesList
import RecommendationsList from "./components/RecommendationsList";

const App = () => {
  return (
    <Router>
      <div>
        {/* Add the SearchBar component for searching */}
        <SearchBar />
        <FavoritesList /> {/* Display favorite recipes */}
        <RecommendationsList /> {/* Display recommendations */}
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

// Wrapper to extract the `id` from URL params
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
