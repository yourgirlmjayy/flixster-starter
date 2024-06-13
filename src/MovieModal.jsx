import React from 'react';
import './MovieModal.css'

const MovieModal = ({ movie, showModal, onClose }) => {
    console.log(showModal);
  return (
    <div className="modal" style={{display: showModal ? "block" : "none"}}>
      <div className="modal-content">
        <div className="modal-card">
          <h2>{movie.title}</h2>
          <img src={'https://image.tmdb.org/t/p/w1280' + movie.poster_path} alt="Backdrop poster" />
          {/* <p>Genres: {movie.genres.join(', ')}</p> */}
          <p><b>Overview: </b>{movie.overview}</p>
          <p><b> Release date: </b>{movie.release_date}</p>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieModal;

