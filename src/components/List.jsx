import React from 'react';
import Card from './Card.jsx';
import Card2 from './Card2.jsx';

const MovieList = props => {
    console.log(props.list);
    let cardList = props.list.map((data, index) => {
        console.log(data);
        console.log(index.id);
        if (props.type === "films") {
            return <Card key={index.id} data={props.data}/>;
        }
        else {
            return <Card2 key={index.id} data={props.data}/>;
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