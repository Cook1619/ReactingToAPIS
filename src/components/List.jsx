import React from 'react';
import FilmCard from './FilmCard.jsx';
import PersonCard from './PersonCard.jsx';

const List = props => {

    let cardList = props.list.map(data => {

        if (props.type === "films") {
            return <FilmCard key={data.id} data={props.data}/>;
        }
        else {
            return <PersonCard key={data.id} data={props.data}/>;
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

export default List;