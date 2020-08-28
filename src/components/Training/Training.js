import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Training.css';

const Training = (props) => {
    // console.log(props);
    const {img, name, instructor, price} = props.training;
    return (
        <div className="training">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="description">
                <h4>{name}</h4> 
                <p><small> Instructor: {instructor}</small></p> 
                <br/> <br/>
                <h5>Price BDT: {price}</h5>
                <button 
                    className="btn btn-primary" 
                    onclick={()=> props.handlAddTraining(props.training)}
                    > <FontAwesomeIcon icon={faCartPlus}/> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Training;