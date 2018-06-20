import React from 'react';
import Card from './Card.jsx';
import Card2 from './Card2.jsx';

const MovieList = props => {
    let cardList = props.list.map((data, index) => {
        if (props.type === "films") {
            return <Card key={index.id} />;
        }
        else {
            return <Card2 key={index.id} />;
        }
    });
    return (
        <div className="container">
            <div className="row">
               {cardList}
            </div>
        </div>
    )

}

export default MovieList;