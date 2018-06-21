import React from 'react';

const FilmCard = (props) => {
    return (
        <div className="card bg-light m-4 rounded-0">
            <div className="card-header bg-dark text-white">{props.data.title}</div>
            <div className="card-body shadow">
                <h5 className="card-title">{props.data.description}</h5>
            </div>
        </div>

    )
}

export default FilmCard;