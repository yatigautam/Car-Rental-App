import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RentalAgreements = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const fetchRentals = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/rentals/my-rentals', {
        headers: {
          'x-auth-token': token,
        },
      });
      setRentals(res.data);
    };
    fetchRentals();
  }, []);

  return (
    <div>
      {rentals.map((rental) => (
        <div key={rental._id}>
          <h3>{rental.car.maker} {rental.car.model}</h3>
          <p>Duration: {rental.rentalDuration} days</p>
          <p>Total Cost: ${rental.totalCost}</p>
          <p>Status: {rental.status}</p>
        </div>
      ))}
    </div>
  );
};

export default RentalAgreements;
