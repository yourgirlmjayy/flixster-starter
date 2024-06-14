import { useState, useEffect } from 'react'
import './App.css'
// import MovieCard from './MovieCard';
import MovieList from './MovieList';
import SearchForm from './SearchForm';

const App = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  // const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedSort, setSelectedSort] = useState('popularity_desc')


  const handleSortChange = (event) => {
    setSelectedSort(event.target.value)
  };

  const API_KEY = import.meta.env.VITE_API_KEY;

  console.log("searchInput", searchInput)
  
  const getMovies = async() => { 
    
    let url;
    if (searchInput === ""){
      url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`}
      else {
        const filteredMovies = movies.filter(movie => {
          const title = movie.title.toLowerCase()
          const search = searchInput.toLowerCase()
          return title.includes(search)
        })
        setMovies(filteredMovies)
        return;
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
      setMovies((prevMovies) => page === 1 ? data.results : [...prevMovies, ...data.results]);
    };
    
    useEffect(() => {
      
      getMovies()
    }, [page, searchInput] /* fetches data  immediately because useEffect has page and search text deendency */
  );
  
  
  const handleLoadMore = () => {
    // increment page number when load more is clicked
    setPage(page + 1)
  }
  
  return(
    <div className="App">
      
      <div className='movieInfo'>
          {/* display name of app*/}
        <header className='App-header'>
          <h1>🎬 Flixter</h1>

         <div className='user-options-form'><SearchForm className='search-form-box' searchInput={searchInput} setSearchInput={setSearchInput}/>  
          {/* Implement a sort by feature which arranges the movies either by popularity or by release date */}
         
          <select className='sort-box' name="sort-by" value={selectedSort} onChange={handleSortChange}>
            <option value="popularity.desc">Sort By Popularity</option>
            <option value="release_date.desc">Sort By Release Date</option>
          </select></div>
        
        </header>
      </div>


        <main> {/*display movie list*/}
          <MovieList movies={movies} 
          selectedSort={selectedSort}
          // getMovieData={() => getMovieDetails(movie.id)}  Fiyin was working on this
          /> 
          <button className='Load-more-button' onClick ={handleLoadMore}>Load More</button>
        </main>


        {/*display movie app footer*/}
        <footer className='App-footer'><p>© 2024 Flixter, All Rights Reserved</p></footer>
       
    </div>
  )
  
}

export default App;


//Tried to implement a getMovieDetails Fetch function
  // const getMovieDetails = async(movie_id) => {
  //   let url = `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&api_key=${API_KEY}`      

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2NkNWViYjMzNzBlYjc4MzQxNWViZTYxMjFhOGYxNyIsInN1YiI6IjY2Njc4NTU3M2RlNTFiZmE0YzFjMmU2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NBzva_Lu1kD0S-TVYFRe2TpeBbFuJnblRAPNLZUbbfE'
  //     }
  //   };

  //   const res = await fetch(url, options);
  //   const data = await res.json();
  //   setMovies((prevMovies) => page === 1 ? data.results : [...prevMovies, ...data.results]);
  // }