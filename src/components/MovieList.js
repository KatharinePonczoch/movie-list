import React from "react";

import "./MovieList.css";

function MovieList(props) {
  const baseURL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  return (
    <div>
      <ul>
        {props.loadedMovies.map((movie) => {
          return (
            <li>
              <div className="movie_card">
                <h3>{movie.title}</h3>
                <h4>
                  <em>{movie.overview}</em>
                </h4>

                <img
                  src={`${baseURL}${movie.poster_path}`}
                  alt="movie poster"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MovieList;
