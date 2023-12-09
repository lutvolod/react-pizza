import React from 'react';

import { Link } from 'react-router-dom';
import CartEmptyImg from '../assets/img/empty-cart.png';

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Cart is empty 😕</h2>
        <p>
          Most likely, you haven't ordered pizza yet.
          <br />
         To order pizza, go to the main page.
        </p>
        <img src={CartEmptyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Come back</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
