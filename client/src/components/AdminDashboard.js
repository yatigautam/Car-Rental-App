import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [agreements, setAgreements] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch rental agreements and cars from the server
    fetch('/api/rentals')
      .then(response => response.json())
      .then(data => setAgreements(data));

    fetch('/api/cars')
      .then(response => response.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Rental Agreements</h3>
      <ul>
        {agreements.map(agreement => (
          <li key={agreement.id}>
            {agreement.car.model} - {agreement.duration} days - ${agreement.totalCost}
            {/* Add buttons for update and delete */}
          </li>
        ))}
      </ul>
      <h3>Car Inventory</h3>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.model} by {car.maker} - ${car.rentalPrice}/day
            {/* Add buttons for update and delete */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
