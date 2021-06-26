import "./App.css";
//styling:
import { GlobalStyle, ButtonTheme } from "./styles";
import { ThemeProvider } from "styled-components";

//components:
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import movies from "./movies";
import Home from "./components/Home";

//Labraries:
import { Route, Switch } from "react-router";

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
  const [_movies, setMovies] = useState(movies);
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  // const setView = () => {
  //   return movie ? (
  //     <MovieDetail movie={movie} setMovie={setMovie} />
  //   ) : (
  //     <MovieList setMovie={setMovie} />
  //   );
  // };

  return (
    <div className="App">
      <div>
        <ThemeProvider theme={theme[currentTheme]}>
          <GlobalStyle />

          <ButtonTheme onClick={toggleTheme}>
            {currentTheme === "light" ? "Light " : "Dark "}Mode
          </ButtonTheme>
          {/* {setView()} */}
          {/* <Home /> */}
          <Switch>
            <Route path="/:movieId">
              <MovieDetail setMovies={setMovies} movies={_movies} />
            </Route>
            <Route exact path="/">
              <Home />
              <MovieList setMovies={setMovies} movies={_movies} />
            </Route>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
          </Switch>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
