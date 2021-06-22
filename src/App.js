import "./App.css";
import Home from "./components/Home";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <Home />
      <div className="ListWrapper">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
