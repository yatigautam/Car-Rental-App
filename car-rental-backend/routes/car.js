const express = require('express');
const Car = require('../models/Car');
const { verifyToken, verifyAdmin } = require('../middleware/auth');

const router = express.Router();

// Add a new car (Admin only)
router.post('/', verifyToken, verifyAdmin, async (req, res) => {
  const { vehicleId, maker, model, rentalPrice } = req.body;
  try {
    const newCar = new Car({ vehicleId, maker, model, rentalPrice });
    await newCar.save();
    res.json(newCar);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all available cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find({ availabilityStatus: true });
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
