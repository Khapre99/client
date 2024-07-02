import React from 'react';

const PaymentForm = ({ handlePayment }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handlePayment();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Payment Details</h2>
      <input type="text" placeholder="Card Number" required />
      <input type="text" placeholder="Name on Card" required />
      <input type="month" placeholder="Expiry Date" required />
      <input type="text" placeholder="CVV" required />
      <button type="submit">Pay</button>
    </form>
  );
};

export default PaymentForm;
