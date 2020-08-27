import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

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
            <Jumbotron Fluid>
                <Container>
                <h1>Price</h1>
                <h2>Total Price : ${totalPrice}</h2>
                </Container>
  
            </Jumbotron>
        </div>
    );
};

export default Cart;