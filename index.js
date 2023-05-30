const express = require('express');
require("dotenv").config();
const { connection } = require("./config/db");
const { userRoute } = require('./routes/user.route');
const { flightRoute } = require("./routes/flight.route");
const {bookRoute}=require('./routes/book.route')
const app = express();

app.use(express.json())
app.get("/", (req, res) => {
    res.send("Welcome to Air Tickete Booking App")
})

app.use('/user', userRoute);
app.use('/flight', flightRoute);
app.use('/book',bookRoute)
app.listen(process.env.port, async() => {
    try {
        await connection;
        console.log('Connected To DB');
    } catch (error) {
        console.log({'Error':error.message});
    }
    console.log(`server is running on port ${process.env.port}`);
})