// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
};

// Wrapper to extract the `id` from URL params
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
