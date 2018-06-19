import React from 'react';

const Card = (props) => {
        return (
                <div className="card m-3">
                    <div className="card-header">
                        <h6>{props.movie.title}</h6>
                    </div>
                    <div className="card-body">
                        <p>{props.movie.description}</p>
                    </div>
                </div>

        )
}

export default Card;