import React from 'react';
import Card from './Card.jsx';
import Card2 from './Card2.jsx';

const MovieList = (props) => {
    let cardList = props.list.map((value, index){
        if(props.type == 'movies'){
            <Card key={movie.id} value={value}/>
        }else {
            <Card2 key={people.id} value={value}/>
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