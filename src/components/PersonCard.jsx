import React from 'react';

const PersonCard = (props) => {
    return (
        <div className="card bg-light m-4 rounded-0">
            <div className="card-header bg-dark text-white rounded-0">{props.data.name}</div>
            <div className="card-body shadow">
                <h5 className="card-title">{props.data.gender}</h5>
                <h5 className="card-title">{props.data.age}</h5>
            </div>
        </div>
    )
}

export default PersonCard;