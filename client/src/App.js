import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import CarList from './components/CarList';
import RentalAgreements from './components/RentalAgreements';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/rental-agreements" element={<RentalAgreements />} />
        <Route path="/" element={<CarList />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;
