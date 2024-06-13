import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'

const MovieList = (props) => {


  return (
      <div className="movie-list">
       {props.movies.map((movie) => (
         <MovieCard
            key = {movie.id}
            movieImage = {movie.poster_path}
            movieTitle = {movie.title}
            movieRating={movie.vote_average}
            movieReleaseDate={movie.release_date}
        />
      ))}
     </div>
  );
};
export default MovieList;
