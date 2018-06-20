import React from 'react';

const Card2 = (props) => {
    return (
        <div className="card m-3">
            <div className="card-header">
                <h6>{props.name}</h6>
            </div>
            <div className="card-body">
                <p>{props.age}</p>
                <p>{props.gender}</p>
            </div>
        </div>

    )
}

export default Card2;