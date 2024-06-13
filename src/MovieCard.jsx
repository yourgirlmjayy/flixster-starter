// import PropTypes from 'prop-types';
import './MovieCard.css';

function MovieCard(props){
    return (
        <div className='movie-card'>
            <div className='movie-image-container'><img src = {'https://image.tmdb.org/t/p/w500' + props.movieImage} className= 'movie-image' alt="movie image"/></div>
            <div className='movie-details'><h4>{props.movieTitle}</h4>
            <p>{'☆ Rating: ' + props.movieRating}</p>
            <p>{"Release date: " + props.movieReleaseDate}</p>
            </div>
        </div>
    )
}


































// MovieCard.propTypes={
//     movieTitle: PropTypes.string.isRequired,
//     movieImage: PropTypes.string.isRequired,
//     movieRating: PropTypes.string.isRequired,
// }

export default MovieCard;