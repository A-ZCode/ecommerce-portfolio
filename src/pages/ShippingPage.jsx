import React, { useState } from 'react';

function ShippingInfo  () {
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Shipping information:', shippingAddress);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={shippingAddress.name}
        onChange={handleChange}
        required
      />

      

      <button type="submit">Submit Shipping Information</button>
    </form>
  );
};

export default ShippingInfo;