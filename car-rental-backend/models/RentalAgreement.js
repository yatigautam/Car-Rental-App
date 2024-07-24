const mongoose = require('mongoose');

const RentalAgreementSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rentalDuration: Number,
  totalCost: Number,
  status: { type: String, enum: ['pending', 'accepted', 'returned'], default: 'pending' },
});

module.exports = mongoose.model('RentalAgreement', RentalAgreementSchema);
