const express = require('express');
const { Flight } = require('../models/flight.models');

const flightRoute = express.Router();

// get all flights
flightRoute.get("/api/flights",async (req, res) => {
    
});   

// get flight by id
flightRoute.get("/api/flight",async(req,res)=>{
    try{
        let allFlight = await Flight.find();
        res.status(200).send({"Message":"All Flights Data","All Flight":allFlight})
    }catch(error){
         res.status(500).send({ Message: error.message });
        console.log(error);
    }
})

flightRoute.get("/api/flight/:id", async (req, res) => {
    let id = req.params.id;
  try {
    let allFlight = await Flight.findOne({'_id':id});
    res
      .status(200)
      .send({ Message: "Single Flights Data", "Flight": allFlight });
  } catch (error) {
    res.status(500).send({ Message: error.message });
    console.log(error);
  }
});

// add a new fllight

flightRoute.post('/api/flight', async (req, res) => {
    let { airline,flightNo,departure,arrival,departureTime,arrivalTime,seats,price} = req.body;
    try {
        let flight = new Flight({ airline, flightNo, departure, arrival, departureTime, arrivalTime, seats, price });
        await flight.save();
        res.status(201).send({ "Message": "Flight added successfully", "Flight": flight });
        res.send({'Message':`flight data with id ${id} updated`})
    } catch (error) {
        res.status(500).send({ Message: error.message });
        console.log(error);
    }
})

// edit flight

flightRoute.patch('/api/flight/:id', async(req, res)=> {
    let id = req.params.id;
    let payload = req.body;
    try {
        await Flight.findByIdAndUpdate({ '_id': id }, payload);
        res.status(204).send({"Message":"flight Data updated"})
    } catch (error) {
         res.status(500).send({ 'Message': error.message });
         console.log(error);
    }
})

flightRoute.delete("/api/flight/:id", async (req, res) => {
  let id = req.params.id;
  try {
    await Flight.findByIdAndDelete({ '_id': id });
    res.status(202).send({ "Message": "flight Data deleted" });
  } catch (error) {
    res.status(500).send({ "Message": error.message });
    console.log(error);
  }
});


module.exports={flightRoute}
