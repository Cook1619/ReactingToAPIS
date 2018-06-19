import React from 'react';

const Card = (props) => {
        return (
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <h6>Card Title</h6>
                    </div>
                    <div className="card-body">
                        <p>{props.movie}</p>
                    </div>
                </div>
            </div>

        )
}


export default Card;