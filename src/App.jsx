import { useState, useEffect } from 'react'
import './App.css'
// import MovieCard from './MovieCard';
import MovieList from './MovieList';
import SearchForm from './SearchForm';

const App = () => {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedSort, setSelectedSort] = useState('popularity_desc')


  const handleSortChange = (event) => {
    setSelectedSort(event.target.value)
  };

  // now playing with load more button

  // fetch data from API
  // turn into json
  // update state

  // conditions:
  // if page is value 1
    // populate data for the first time (initial page load)
    // let url;
  //   if (page === 1){
  //     url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}`}


  // // if page is >1
  //   // load more button clicked -> add more movies to list
  //   if(page > 1){
  //     data => setMovies([...movies, ...data.results])
  //   }





  // search term results



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
        setFilteredMovies(filteredMovies)
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

    // setMovies((oldData) => [...oldData, ...data.results]);
      // .then(response => response.json())
      // .then(response => setMovies(movies.concat(response.results)))
      // .then(console.log(movies))
      // setMovies(movies);
      // .catch(err => console.error(err));
};

  useEffect(() => {

    getMovies()
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
    getMovies();
  }

  return(
    <div className="App">
      <div className='navBar'>
        <SearchForm searchInput={searchInput} setSearchInput={setSearchInput}/>
      </div >
      
      <div className='movieInfo'>
          {/* display name of app*/}
        <header className='App-header'>
          <h1>🎬 Flixter</h1>
        </header>

        <select name="sort-by" value={selectedSort} onClick={handleSortChange} selectedSort={selectedSort} setSelectedSort={setSelectedSort}>
          <option value="popularity.desc">Sort By Popularity</option>
          <option value="release_date.desc">Sort By Release Date</option>
        </select>
        
        <main> {/*display movie list*/}
          <MovieList movies={movies} 
          selectedSort={selectedSort}/>
          <button className='Load-more-button' onClick ={handleLoadMore}>Load More</button>
        </main>


        {/*display movie app footer*/}
        <footer className='App-footer'><p>© 2024 Flixter, All Rights Reserved</p></footer>
        </div>
    </div>
  )

}

export default App;

