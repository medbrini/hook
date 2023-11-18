import React from "react";

const MovieCard = ({movie}) => {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        width: '300px',
      };
    
      const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
      };
    return (
        <div style={cardStyle}>
          <h1>{movie.title}</h1>
          <p>{movie.description}</p> 
          <p>Rating:{movie.rating}</p> 
          <img src={movie.posterUrl} alt={movie.title} style={imageStyle}/>
        </div>
    );};

    export default MovieCard;