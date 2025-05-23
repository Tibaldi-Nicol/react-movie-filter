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
  const [movies, setMovies]=useState(initialMovies);  //contiene tutti i film e non cambia, lo uso per i filtri
  const [selectedGenre, setSelectedGenre]=useState(""); //selectedgenre, tiene traccia del genere selezionato dall'utente nel <select>
  const [filteredMovies, setFilterMovies]=useState(initialMovies);

   // Stati per i nuovi film
   const [newTitle, setNewTitle] = useState('');
   const [newGenre, setNewGenre] = useState('');

  useEffect(() => {

    if (selectedGenre===''){
      setFilterMovies(movies);
    }else{
      const filtered=movies.filter(movie=>movie.genre===selectedGenre);
      setFilterMovies(filtered);
    }
  
  }, [selectedGenre, movies])

  // Aggiunta di un nuovo film
  const handleAddMovie = (e) => {
    e.preventDefault();

    // Verifica che entrambi i campi siano compilati
    if (newTitle.trim() === '' || newGenre.trim() === '') return;

    // Crea nuovo film e aggiorna lo stato
    const newMovie = { title: newTitle.trim(), genre: newGenre.trim() };
    setMovies([...movies, newMovie]);

    // Reset dei campi input
    setNewTitle('');
    setNewGenre('');
  }; 

  //interfaccia che vede l'utente
  return(
    <>

    <div className='container mt-5'>  {/**container: classe Bootstrap che aggiunge margini e centra il contenuto ||||  mt-5: margine superiore (margin-top) per distanziare dall’alto */}
      <h1 className='mb-5'>React Movie Filter</h1>  {/**mb-4: margine sotto il titolo (margin-bottom */}
            {/* FORM PER AGGIUNGERE NUOVI FILM */}
            <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Aggiungi un nuovo film</h5>
          <form onSubmit={handleAddMovie}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Titolo"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Genere"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Aggiungi</button>
          </form>
        </div>
      </div>


      {/** selezione tramoite filtro */}

      <label htmlFor="genre" className="form-label">Filtra per genere:</label>{/**form-label, form-select: classi Bootstrap per stilizzare form */}

      <select

      id="genre"
      className="form-select"
      //     {/**value={selectedGenre}: collega lo stato al valore corrente del select */}
      value={selectedGenre}                              
      onChange={(e) => setSelectedGenre(e.target.value)}  //onChange: quando l’utente seleziona un’opzione, aggiorniamo selectedGenre

      
    >  
          {/**option film che possono scegliere */}
          <option value="">Tutti i generi</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
    
    
    </select>

    </div>

    <div className='row'>
      {/**.map(...): itera sui film filtrati e crea una "card" per ognuno */}
        {/**row e col-md-4: classi Bootstrap per creare una griglia a 3 colonne          */}
      {filteredMovies.map((movie, index)=>(   
              
        <div className='col-md-4 mb-3' key={index}>  {/** key={index}: React richiede una chiave unica per ogni elemento generato dinamicamente*/}
          <div className='card h-100 mt-5'>
            <div className='card-body'>               {/**card, card-body: classi Bootstrap per creare un box visivo pulito */}
              <h5 className='card-title'>{movie.genre}</h5>
                <p className='card-text'><strong>Genere:</strong>{movie.title}</p>
              
            </div>
          </div>
        </div>
      ))}  {/** <<-- tolto il punto e virgola finale che era un errore */}
    </div>
   
    </>
    
  );
}

export default App;



{/** */}

// ----------------------------------------
// LOGICA DELL'APPLICAZIONE
// ----------------------------------------

// 1. All'inizio tutti i film sono mostrati
// 2. L’utente sceglie un genere nella tendina
// 3. Il valore di selectedGenre cambia → React esegue useEffect
// 4. useEffect filtra i film in base al genere selezionato
// 5. filteredMovies viene aggiornato con i risultati filtrati
// 6. React ricarica la UI mostrando solo i film filtrati

