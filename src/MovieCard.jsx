import React, { useState } from "react";
import "./MovieCard.css";
import MovieModal from "./MovieModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart as regularHeart} from "@fortawesome/free-regular-svg-icons";
import {faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";

function MovieCard(props) {
  const [showModal, setShowModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isWatched, setIsWatched] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  function handleLike(event){
    event.stopPropagation;
    setIsLiked(!isLiked);
  }

  function handleWatched(event){
    event.stopPropagation;
    setIsWatched(!isWatched);
  }

  return (
    <>
    <div className="movie-card" key={props.movieId}>
      <div style={{ position: "relative" }}>
        <div className="card-icon">
          <div className="movie-image-container">
            <img
              src={"https://image.tmdb.org/t/p/w500" + props.movieImage}
              className="movie-image"
              alt="movie image"
            />
          </div>
          <div className="movie-details">
            <h4>{props.movieTitle}</h4>
            <p className="rating-id">{"☆ Rating: " + props.movieRating}</p>
            <div className="liked-and-watched-button"> 
              {/* <p onClick={handleLike}>{isLiked? <FontAwesomeIcon icon={regularHeart}/> : <FontAwesomeIcon icon={solidHeart}/> }</> */}
              <div onClick={handleLike}>{isLiked? <FontAwesomeIcon icon={solidHeart}/> : <FontAwesomeIcon icon={regularHeart}/>}</div>
              
              {/* / User can click eye button to indicate they have watched a movie / */}
              <div onClick={handleWatched}>{isWatched? '🍿': '👁️'}</div>
            </div>
            {/* <p>{"Release date: " + props.movieReleaseDate}</p> */}
            <button className="more-details-button" onClick={handleModalOpen}>
              More details
            </button>
          </div>
        </div>
      </div>
    </div>

    {showModal && (
        <MovieModal
          movie={props.movie}
          showModal={showModal}
          onClose={handleModalClose}
        />
      )}
    </>
  );
}

export default MovieCard;
