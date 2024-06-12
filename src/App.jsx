import { useState, useEffect } from 'react'
import './App.css'
// import MovieCard from './MovieCard';
import MovieList from './MovieList';
import Header from './Header';

const App = () => {
  const [movies, setMovies] = useState([])


  const API_KEY = import.meta.env.VITE_API_KEY;



  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        // Authorization: 'Bearer' + import.meta.env.VITE_API_ACCESS_TOKEN
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${1}`, options)
      .then(response => response.json())
      .then(response => setMovies(movies.concat(response.results)))
      .then(console.log(movies))
      setMovies(movies);
      // .catch(err => console.error(err));
  }, [] /* fetches data  immediately because useEffect has no dependencies*/
  )

  // yay this is working
  console.log('movie data', movies);

  return(
    <div className="App">
      {/* display name of app*/}
      <header className='App-header'><h1>Flixter</h1></header>
      {/*display movie list*/}

      <MovieList movies={movies}/>


      {/*display movie app footer*/}
      <footer className='App-footer'><p>© 2024 Flixter, All Rights Reserved</p></footer>
    </div>
  )

}

// function App(){
//   return (
//     <div className='header'><Header /></div>
//   )
// }

export default App;

