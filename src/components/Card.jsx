import React from 'react';

const Card = (props) => {
        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        <h6>{props.movieList.title}</h6>
                    </div>
                    <div className="card-body">
                        <p>{props.movieList.description}</p>
                    </div>
                </div>
            </div>

        )
}


export default Card;