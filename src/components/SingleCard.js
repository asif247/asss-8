import React from 'react';
import CART_ICON from './cart.svg'
const SingleCard = (props) => {

    const {name,age,country,email,invest,avater} = props.cardData;
    const {updateDisplay} = props

    const clickHandler = () => {
        updateDisplay(props.cardData)
    }

    return (
        <div className="singleCard">
            <img src={avater} alt="Person" />
            <p>Name: {name}</p>
            <p>Age:{age}</p>
            <p>Country: {country}</p>
            <p>Email: {email}</p>
            <p>Invest:$ {invest}</p>
            <button onClick={clickHandler}>
            <img src={CART_ICON} alt="CART" />
                 Add To Cart</button>
        </div>
    );
};

export default SingleCard;