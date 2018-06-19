import React from 'react';
import Card from './Card.jsx';

const MovieList = (props) => {
    let movies = props.movie.map((movie, index) => {
        return <Card key={index} movie={movie} />
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col">{movies}</div>
            </div>
        </div>
    )
}


export default MovieList;