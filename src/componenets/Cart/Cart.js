import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const totalPrice = cart.reduce((total, crs) => total + crs.duration_in_minutes, 0);
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        totalPrice = totalPrice + course.duration_in_minutes;        
    }
    return (
        <div>
            <h1>Price :</h1>
            <h2>Total Price : ${totalPrice}</h2>
        </div>
    );
};

export default Cart;