import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'

const MovieList = ({movies, selectedSort}) => {
  const [sortedMovies, setSortedMovies] = useState([]);

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

  useEffect(() => {
    const sortMovies = () => {
      let sorted = [...movies];
      if (selectedSort === 'popularity.desc') {
        sorted.sort((a, b) => b.popularity - a.popularity);
      } else if (selectedSort === 'release_date.desc') {
        sorted.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      }
      setSortedMovies(sorted);
    };
    sortMovies();
  }, [movies, selectedSort])

  return (
      <div className="movie-list">
       {sortedMovies.map((movie) => (
         <MovieCard
            movieId = {movie.id}
            movieImage = {movie.poster_path}
            movieTitle = {movie.title}
            movieRating={movie.vote_average}
            movieReleaseDate={movie.release_date}
            movie = {movie}
            // movieDetails = {getMovieDetails(movie.id)}
        />
      ))}
     </div>
  );
};
export default MovieList;
