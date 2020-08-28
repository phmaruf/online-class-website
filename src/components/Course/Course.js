import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Course.css';
import Training from '../Training/Training';
import Cart from '../Cart/Cart';

const Course = () => {
    const first12 = fakeData.slice(0,12);
    const [course, setCourse] = useState(first12);
    const [cart, setCart] = useState([]);

    const handlAddTraining = (training) => {
        
        const newCart = [...cart, training];
        setCart(newCart);
    }
    return (
        <div>
            
            <div className="main-container">
                <div className="course-container">
                   {
                        course.map(course => <Training 
                            training={course}
                            handlAddTraining={handlAddTraining}
                        ></Training>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                    
                </div>
            </div>
        </div>
    );
};

export default Course;