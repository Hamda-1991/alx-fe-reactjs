import SearchInput from "./components/SearchInput.jsx";

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
    </div>
  );
}

export default App;
