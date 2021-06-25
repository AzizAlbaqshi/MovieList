import "./App.css";
//styling:
import { GlobalStyle, ButtonTheme } from "./styles";
import { ThemeProvider } from "styled-components";

//components:
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import movies from "./movies";

//State
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#bfc0c0",
    backgroundColor: "#011627",
  },
  dark: {
    mainColor: "#011627",
    backgroundColor: "#bfc0c0",
  },
};

function App() {
  const [movie, setMovie] = useState(movies[null]);
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  const setView = () => {
    return movie ? (
      <MovieDetail movie={movie} />
    ) : (
      <MovieList setMovie={setMovie} />
    );
  };

  return (
    <div className="App">
      <div>
        <ThemeProvider theme={theme[currentTheme]}>
          <GlobalStyle />
          <h1>Welcome to the Movie List WebPage </h1>

          <ButtonTheme onClick={toggleTheme}>
            {currentTheme === "light" ? "Light " : "Dark "}Mode
          </ButtonTheme>
          {setView()}
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
