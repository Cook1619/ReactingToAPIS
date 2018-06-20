import React from 'react';

const FilmCard = (props) => {
        return (
                <div className="card m-3">
                    <div className="card-header">
                        <h6>{props.data.title}</h6>
                    </div>
                    <div className="card-body">
                        <p>{props.data.description}</p>
                    </div>
                </div>

        )
}

export default FilmCard;