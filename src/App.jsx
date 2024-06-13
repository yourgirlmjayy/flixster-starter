import { useState, useEffect } from 'react'
import './App.css'
// import MovieCard from './MovieCard';
import MovieList from './MovieList';
import SearchForm from './SearchForm';

const App = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')


  const API_KEY = import.meta.env.VITE_API_KEY;



  useEffect(() => {
    const getMovies = async() => { 
      
      let url;
      if (searchInput === ""){
        url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`
      } else {
        url = `https://api.themoviedb.org/3/search/movie?query=${searchInput}&language=en-US&page=${page}`
      }
  
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2NkNWViYjMzNzBlYjc4MzQxNWViZTYxMjFhOGYxNyIsInN1YiI6IjY2Njc4NTU3M2RlNTFiZmE0YzFjMmU2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NBzva_Lu1kD0S-TVYFRe2TpeBbFuJnblRAPNLZUbbfE'
        }
      };

      const res = await fetch(url, options);
      const data = await res.json();

      setMovies(data.results);
        // .then(response => response.json())
        // .then(response => setMovies(movies.concat(response.results)))
        // .then(console.log(movies))
        // setMovies(movies);
        // .catch(err => console.error(err));
  };
  getMovies();
}, [page, searchInput] /* fetches data  immediately because useEffect has page and search text deendency */
    );
  // yay this is working
  // console.log('movie data', movies);

  // const handleSearch = (searchText) => {
  //   if (searchText) {
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         accept: 'application/json',
  //       }
  //     }
      
  //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchText}`, options)
  //       .then(response => response.json())
  //       .then(response => setMovies(response.results))
  //       .catch(err => console.error(err))
  //   } else {
  //     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${1}`, options)
  //       .then(response => response.json())
  //       .then(response => setMovies(response.results))
  //       .catch(err => console.error(err))
  //   }
  // }

  const handleLoadMore = () => {
    // increment page number when load more is clicked
    setPage(page + 1)
  }

  return(
    <div className="App">
      {/* display name of app*/}
      <header className='App-header'>
        <h1>🎬 Flixter</h1>
        <SearchForm searchInput={searchInput} setSearchInput={setSearchInput}/>
      </header>
      
      <main> {/*display movie list*/}
        <MovieList movies={movies}/>
        <button className='Load-more-button' onClick ={handleLoadMore}>Load More</button>
      </main>


      {/*display movie app footer*/}
      <footer className='App-footer'><p>© 2024 Flixter, All Rights Reserved</p></footer>
    </div>
  )

}

export default App;

