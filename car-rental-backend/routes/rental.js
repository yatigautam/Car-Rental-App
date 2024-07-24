const express = require('express');
const RentalAgreement = require('../models/RentalAgreement');
const Car = require('../models/Car');
const { verifyToken, verifyAdmin } = require('../middleware/auth');

const router = express.Router();

// Create a rental agreement
router.post('/', verifyToken, async (req, res) => {
  const { carId, rentalDuration } = req.body;
  try {
    const car = await Car.findById(carId);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    if (!car.availabilityStatus) return res.status(400).json({ message: 'Car not available' });

    const totalCost = car.rentalPrice * rentalDuration;
    const rentalAgreement = new RentalAgreement({
      car: car._id,
      user: req.user.id,
      rentalDuration,
      totalCost,
    });

    await rentalAgreement.save();
    car.availabilityStatus = false;
    await car.save();

    res.json(rentalAgreement);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get rental agreements for a user
router.get('/my-rentals', verifyToken, async (req, res) => {
  try {
    const rentals = await RentalAgreement.find({ user: req.user.id }).populate('car');
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all rental agreements (Admin only)
router.get('/', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const rentals = await RentalAgreement.find().populate('car user');
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark rental agreement as returned (Admin only)
router.patch('/:id/return', verifyToken, verifyAdmin, async (req, res) => {
  try {
    const rental = await RentalAgreement.findById(req.params.id);
    if (!rental) return res.status(404).json({ message: 'Rental agreement not found' });

    rental.status = 'returned';
    await rental.save();

    const car = await Car.findById(rental.car);
    car.availabilityStatus = true;
    await car.save();

    res.json(rental);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
