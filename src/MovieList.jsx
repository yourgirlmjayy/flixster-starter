import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'

const MovieList = ({movies, selectedSort}) => {
  const [sortedMovies, setSortedMovies] = useState([]);

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
        />
      ))}
     </div>
  );
};
export default MovieList;
