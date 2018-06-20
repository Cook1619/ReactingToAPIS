import React from 'react';

const Card2 = (props) => {
    return (
        <div className="card m-3">
            <div className="card-header">
                <h6>{props.data.name}</h6>
            </div>
            <div className="card-body">
                <p>{props.data.age}</p>
                <p>{props.data.gender}</p>
            </div>
        </div>

    )
}

export default Card2;