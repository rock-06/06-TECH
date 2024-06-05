import React from 'react';
import { PaystackButton } from 'react-paystack';

const PaystackIntegration = ({ amount, email, phoneNumber, productNames, onSuccess, onClose }) => {
  const publicKey = "pk_live_fc438f29bed62f4493bb3f7e8a19d00e6cbc68a2"; // Replace with your Paystack public key

  const componentProps = {
    email,
    amount: amount * 100, // Convert amount to kobo (if using NGN) or subunits of other currencies
    publicKey,
    currency: "GHS", // Ensure the currency is correctly set
    text: "Pay Now",
    onSuccess: (reference) => onSuccess(reference),
    onClose: () => onClose(),
    metadata: {
      custom_fields: [
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phoneNumber,
        },
        {
          display_name: "Product Names",
          variable_name: "product_names",
          value: productNames,
        },
      ],
    },
  };

  return (
    <div>
      <PaystackButton {...componentProps} className="paystack-button" />
    </div>
  );
};

export default PaystackIntegration;
