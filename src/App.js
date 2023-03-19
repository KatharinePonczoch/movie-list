import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Counter from "./components/counter";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/search/movie?api_key=afd9d40ec77b7305b0d12afa93c522d8&language=en-US&query=home%20alone&page=1&include_adult=false";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log("data: ", data);
      });
  }, []);
  console.log("movies.length ", movies.length);
  // const fetchHomeAloneMovies = async () => {
  //   const url =
  //     "https://api.themoviedb.org/3/search/movie?api_key=afd9d40ec77b7305b0d12afa93c522d8&language=en-US&query=home%20alone&page=1&include_adult=false";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setMovies(data);
  //   console.log("Data from async: ", data);
  // };
  // fetchHomeAloneMovies();

  return !movies ? (
    <h1>Movie is loading...</h1>
  ) : (
    <div>
      <Counter />
      <MovieList loadedMovies={movies} />
    </div>
  );
}

export default App;
