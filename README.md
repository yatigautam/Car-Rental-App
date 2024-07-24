
# Car Rental Application

## Overview

The Car Rental Application is designed to facilitate car rentals for regular users and provide management capabilities for admin users. The system supports the following functionalities:

- **User Authentication:** Both regular users and admin users can log in using their email and password.
- **Car Management:** Admin users can add, update, and delete cars from the inventory.
- **Rental Management:** Users can search for available cars, view rental agreements, and manage their rentals.

## Features

### Regular User Flow

- **Login:** Regular users can log in with valid credentials.
- **Car Search:** Users can search for available cars using filters such as maker, model, and rental price.
- **Car Selection:** Users can select a car and specify the rental duration.
- **Rental Agreement:** The system generates a rental agreement with car information, rental duration, total cost, and user details.
- **Manage Agreements:** Users can view, edit before acceptance, and accept rental agreements. Once accepted, agreements cannot be edited or deleted.
- **Return Request:** Users can request the return of rented cars.

### Admin User Flow

- **Manage Rentals:** Admin users can view, update, and delete all rental agreements.
- **Car Return Validation:** Admin users can inspect cars marked for return and update their status accordingly.
- **Car Inventory Management:** Admin users can add new cars, update existing car details, and delete cars from the inventory.

## Assumptions

- Regular and admin user data is seeded directly into the database.
- System updates car availability status upon rental or return.
- Form validations and exception handling are implemented throughout the application.
- Routes are secured with proper authorization to restrict access based on user roles.

## Architecture

The application follows the N-Layer or Clean Architecture to ensure a scalable, maintainable, and testable codebase.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/Car-Rental-App.git
   
Install Dependencies:
Navigate to the project directory and run
npm install
Setup Database:
Configure your database settings and seed initial data.

Start the Application:
npm start

## Usage
Regular Users: Log in, search for cars, manage rental agreements, and request returns.
Admin Users: Log in, manage car inventory, and handle rental agreements and returns.
Enhancements
Feel free to enhance the user experience and responsiveness of the application. Suggestions for improvements are welcome!
