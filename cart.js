import React, { useState } from 'react';
import PaymentPopup from '../component/payment';  // Import the payment popup component

const Cart = ({ cart, removeFromCart }) => {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handlePayClick = () => {
    setShowPaymentPopup(true);
  };

  const handleClosePopup = () => {
    setShowPaymentPopup(false);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.title}</h2>
              <p>GH₵ {item.price.toFixed(2)}</p>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h2>Total: GH₵ {calculateTotal().toFixed(2)}</h2>
      </div>
      <button className="pay-button" onClick={handlePayClick}>Pay</button>
      {showPaymentPopup && <PaymentPopup total={calculateTotal()} cart={cart} onClose={handleClosePopup} />}
    </div>
  );
};

export default Cart;
