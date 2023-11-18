import React, {useState} from "react";
function AddMovie ({onAddMovie}) {
    const [newMovieTitle, setNewMovieTitle]=useState('');

    const handleChange=() =>{  
        setNewMovieTitle();
      };
      const handleAddMovie = ( ) => {
        onAddMovie({
            title: newMovieTitle,
            description: 'Description for the new movie',
            posterUrl: '',
            rating: 0,
          });
          setNewMovieTitle('');
      };
    return (
<div>
    <input onChange={handleChange} placeholder="add movie" value={newMovieTitle}/>
<button onClick={handleAddMovie}>add movie</button>
</div>
    );
    
};

export default AddMovie;