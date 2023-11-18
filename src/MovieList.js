import React from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

const MovieList = ({movies}) => {
return (
    <div>
        {movies.map((movie, index) =>(
            <MovieCard key={index} movie={movie}/>
        ))}
        <AddMovie/>
    </div>
);
};

export default MovieList;