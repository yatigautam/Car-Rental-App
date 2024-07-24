import React, { useEffect, useState } from 'react';

function MyRentalAgreements() {
  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    // Fetch rental agreements from the server
    fetch('/api/rentals')
      .then(response => response.json())
      .then(data => setAgreements(data));
  }, []);

  return (
    <div>
      <h2>My Rental Agreements</h2>
      <ul>
        {agreements.map(agreement => (
          <li key={agreement.id}>
            {agreement.car.model} - {agreement.duration} days - ${agreement.totalCost}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyRentalAgreements;
