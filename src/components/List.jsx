import React from 'react';
import Card from './Card.jsx';
import Card2 from './Card2.jsx';

const List = props => {

    let cardList = props.list.map((data, index) => {

        if (props.type === "films") {
            return <Card key={data.id} data={props.data}/>;
        }
        else {
            return <Card2 key={data.id} data={props.data}/>;
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