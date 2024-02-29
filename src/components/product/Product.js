import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function Product({props}) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <img className="card-img-top" src={props.img} alt="Card image cap" />
                    <h5 className="card-title"><strong>{props.name}</strong></h5>
                    <h6 className="card-text"><strong>{props.price}</strong></h6>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text text-end">{props.stock}</p>
                </div>
            </div>
        </div>
    )
}

export default Product