import { useState, useEffect } from 'react'

const initialMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App(){

  //stato di react
  const [movies]=useState(initialMovies);  //contiene tutti i film e non cambia, lo uso per i filtri
  const [selectedGenre, setSelectedGenre]=useState(""); //selectedgenre, tiene traccia del genere selezionato dall'utente nel <select>
  const [filteredMovies, setFilterMovies]=useState(initialMovies);

  useEffect(() => {

    if (selectedGenre===''){
      setFilterMovies(movies);
    }else{
      const filtered=movies.filter(movie=>movie.genre===selectedGenre);
      setFilterMovies(filtered);
    }
  
  }, [selectedGenre, movies])

  
  return(
    <>
   
    </>
    
  );
}

export default App;