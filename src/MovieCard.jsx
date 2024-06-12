// import PropTypes from 'prop-types';
import './MovieCard.css';

function MovieCard(props){
    return (
        <div className='movie-card'>
            <img src = {'https://image.tmdb.org/t/p/w500' + props.movieImage} alt="movie image"/>
            <h4>{props.movieTitle}</h4>
            <p>{props.movieRating}</p>
        </div>
    )
}


































// MovieCard.propTypes={
//     movieTitle: PropTypes.string.isRequired,
//     movieImage: PropTypes.string.isRequired,
//     movieRating: PropTypes.string.isRequired,
// }

export default MovieCard;