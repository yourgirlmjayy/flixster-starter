import React, { useState } from 'react';
import './MovieCard.css';
import MovieModal from './MovieModal';

function MovieCard(props){
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
      setShowModal(true);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
    };
    return (
        <div className='movie-card' key={props.movieId}>
            <div className='movie-image-container'><img src = {'https://image.tmdb.org/t/p/w500' + props.movieImage} className= 'movie-image' alt="movie image"/></div>
            <div className='movie-details'><h4>{props.movieTitle}</h4>
            <p>{'☆ Rating: ' + props.movieRating}</p>
            {/* <p>{"Release date: " + props.movieReleaseDate}</p> */}
            <button onClick={handleModalOpen}>More details</button>
            </div>
            {showModal && (
        <MovieModal
          movie={props.movie}
          showModal={showModal}
          onClose={handleModalClose}
        />
      )}
        </div>
    )
}


































// MovieCard.propTypes={
//     movieTitle: PropTypes.string.isRequired,
//     movieImage: PropTypes.string.isRequired,
//     movieRating: PropTypes.string.isRequired,
// }

export default MovieCard;