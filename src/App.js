import React, { useState } from "react";
import "./App.css";
import Movieslist from "./MovieList";
import FilterMovie from "./FilterMovies";
import MoviesData from "./Movies";
function App() {
  const [Movies, setMovies] = useState(MoviesData)
  const [filterByTitle, setFilterByTitle] = useState("")
  const [filterByRating, setFilterByRating] = useState(0)

  const addMovie = (newMovie) => {
    setMovies([newMovie, ...Movies]);
  };
  return (
    <div className="App">
      <div class="row">
        <FilterMovie
          setFilterByTitle={setFilterByTitle}
          setFilterByRating={setFilterByRating}
          rating={filterByRating}
          addMovie={addMovie}
        />
      </div>
      <div class="row">
        <Movieslist
          moviesList={Movies}
          titlefilter={filterByTitle}
          ratingfilter={filterByRating}
        />
      </div>
    </div>
  );
};

export default App;