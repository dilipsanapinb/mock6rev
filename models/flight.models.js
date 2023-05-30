const mongoose = require('mongoose');

const flighSchema = mongoose.Schema({
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number,
});

const Flight = mongoose.model('Flight', flighSchema);

module.exports={Flight}