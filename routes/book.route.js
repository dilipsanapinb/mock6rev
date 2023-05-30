const express = require("express");

const { BookFlight } = require("../models/book.models");
const bookRoute = express.Router();

bookRoute.post("/api/booking", async (req, res) => {
  let { user, flight } = req.body;
  try {
    var book = await BookFlight({ user, flight });
    book = await book.populate("user", "-password");
      book = await book.populate("flight", "airline flightNo departure arrival departureTime arrivalTime seats price");
      await book.save()
    res
      .status(200)
      .send({ Message: "Flight booked Successfully", "Flight": book });
  } catch (error) {
    res.status(500).send({ Message: error.message });
    console.log(error);
  }
});

bookRoute.get("/api/dashboard",async(req,res)=>{
    try {
        let book = await BookFlight.find()
          .populate("user", "-password")
          .populate(
            "flight",
            "airline flightNo departure arrival departureTime arrivalTime seats price"
        );
        res.status(200).send({"Message":"All Booking Data",'AllData':book})
    } catch (error) {
        res.status(500).send({ Message: error.message });
        console.log(error);
    }
});

module.exports = { bookRoute };
