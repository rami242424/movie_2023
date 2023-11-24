import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className='movie__genres'>
                    {genres.map((genre, index) => {
                        return <li className='movie__genre' key={index}>{genre}</li>;
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...생략...</p>
            </div>
        </div>    
    );
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    //arrayOf(PropTypes.string)은 문자열을 원소로 하는 배열을 의미함.
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;