const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Ensure this path is correct

mongoose.connect('mongodb://localhost:27017/car-rental-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedUsers = async () => {
  const users = [
    {
      email: 'admin@example.com',
      password: await bcrypt.hash('adminpassword', 10),
      role: 'admin',
    },
    {
      email: 'user@example.com',
      password: await bcrypt.hash('userpassword', 10),
      role: 'user',
    },
  ];

  try {
    await User.deleteMany({});
    await User.insertMany(users);
    console.log('Users seeded successfully');
  } catch (err) {
    console.error('Error seeding users:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedUsers();
