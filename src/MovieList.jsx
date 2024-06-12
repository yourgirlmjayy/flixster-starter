import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'

const MovieList = ({movies}) => {


  return (
      <div class="movie-list">
       {movies.map((movie) => (
         <MovieCard
            movieImage = {movie.poster_path}
            movieTitle = {movie.title}
            movieRating={movie.vote_average}
        />
      ))}
     </div>
  );
};
export default MovieList;
