import React from "react";
import { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";

const App = () => {
  const [movies, setMovies] =useState([
    {
      title:'EQUALIZER 3',
      description: 'Equalizer 3 est un film réalisé par Antoine Fuqua avec Denzel Washington, Dakota Fanning.',
      posterUrl: 'https://clutchpoints.com/_next/image?url=https%3A%2F%2Fwp.clutchpoints.com%2Fwp-content%2Fuploads%2F2023%2F04%2FThe-Equalizer-3-Everything-You-Need-to-Know.jpeg&w=3840&q=75',
      rating: 8.5,
    },
    {
      title:'Kingdom of Heaven',
      description: 'Kingdom of Heaven ou Le Royaume des cieux au Québec est un film germano-américano-britannique réalisé par Ridley Scott et sorti en 2005.',
      posterUrl: 'https://fr.web.img5.acsta.net/medias/nmedia/18/35/53/31/18425554.jpg',
      rating: 8,
    },
    {
      title:'Mission impossible',
      description: 'Mission impossible est une série cinématographique américaine',
      posterUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmgOdqGeM_NS2vYQsGNWt5XsLECohCu1EKPWcFP5NAExQwH0HL',
      rating: 9,
    },
  ]);
  const [filterMovies, setFilterMovies]= useState(movies)
  const [TitleFilter, setTitleFilter] = useState('');
  const [RatingFilter, setRatingFilter]= useState(0);
  const onFilterChange = (filterType, value) => {
    if (filterType === 'title') {
      setTitleFilter(value);
    } else if (filterType === 'rating') {
      setRatingFilter(value);
    }
  };
  const AddMovie = () =>{
    const newMovie = {
      title: 'new Movie',
      description: 'description for new movie',
      posterUrl: '',
      rating:0,
    };
    setMovies([...movies, newMovie]);
  };
  return(
    <div>
      <h1>MovieList</h1>
      <Filter 
      onFilterChange={onFilterChange}
      TitleFilter={TitleFilter}
      RatingFilter={RatingFilter}
      onAddMovie={AddMovie}/>
      <MovieList movies={movies}/>
    </div>
  );
  
}

export default App;