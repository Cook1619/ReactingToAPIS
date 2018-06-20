import React from 'react';
import Card2 from './Card.jsx';
import Card2 from './Card2.jsx';

const MovieList = (props) => {
    let movies = props.movie.map((movie) => {
        return <Card key={people.id} movie={movie} />
    })
    let people = props.people.map((people) => {
        return <Card2 key={movie.id} people={people} />
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