// PayPalButton.js
import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPalIntegration = ({ amount, onSuccess, onError, onCancel }) => {
  const paypalOptions = {
    clientId: 'your-paypal-client-id', // Replace with your PayPal client ID
    currency: 'USD', // PayPal supports limited currencies, make sure to use one that PayPal supports
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  return (
    <div>
      <PayPalButton
        amount={amount}
        options={paypalOptions}
        style={buttonStyles}
        onSuccess={(details, data) => onSuccess(details, data)}
        onError={(err) => onError(err)}
        onCancel={(data) => onCancel(data)}
      />
    </div>
  );
};

export default PayPalIntegration;
