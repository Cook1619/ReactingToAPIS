import React from 'react';
import FilmCard from './FilmCard.jsx';
import PersonCard from './PersonCard.jsx';

const List = props => {

    let cardList = props.list.map(data => {
        console.log(data);
        if (props.type === "movies") {
            return <FilmCard key={data.id} data={data}/>;
        }
        else {
            return <PersonCard key={data.id} data={data}/>;
        }
        
    });
    
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col">{cardList}</div>
            </div>
        </div>
    )

}

export default List;