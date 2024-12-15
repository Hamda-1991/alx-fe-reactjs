import SearchInput from "./components/SearchInput.jsx";
import Search from "./components/Search.jsx";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "2rem",
      }}
    >
      <h1>GitHub User Search Application</h1>
      <SearchInput />
      <Search />
    </div>
  );
}

export default App;
