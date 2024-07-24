import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const res = await axios.get('http://localhost:5000/api/cars');
      setCars(res.data);
    };
    fetchCars();
  }, []);

  return (
    <div>
      {cars.map((car) => (
        <div key={car._id}>
          <h3>{car.maker} {car.model}</h3>
          <p>Price: ${car.rentalPrice}/day</p>
          <button>Rent</button>
        </div>
      ))}
    </div>
  );
};

export default CarList;
