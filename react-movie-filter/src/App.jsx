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

  
  return(
    <>
    <h1>ciao</h1>
    </>
    
  );
}

export default App;