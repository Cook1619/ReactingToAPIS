import React from 'react';
import Card from './Card.jsx';

const MovieList = (props) => {
    let movies = props.movie.map((movie) => {
        return <Card key={movie.id} movie={movie} />
    })
    return (
        <div className="container">
            <div className="row">
                {movies}
            </div>
        </div>
    )
}


export default MovieList;