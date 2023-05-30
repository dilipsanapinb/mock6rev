## Air Tickets Booking App

## User Route

# Register a user

  POST /user/api/register
  - Request
        body:
                {
                _id: ObjectId,
                name: String,
                email: String,
                password: String
                }
                password will be saved to database in the form of hashed

    - Response:{
        "Message": "Registration is successfull",
       "User": {
                "name": "Barku Sanap",
                "email": "barku@gmail.com",
                "password": "$2b$05$tZkCviwRD44PtYDCN6lHTOsR3zpDU/KMJ0hy6uIIw77h7/JIZl2T2",
                "_id": "6475acab648b7ef8291bbebd",
                "__v": 0
            }
            }

# Login a user

POST /user/api/login

    - Request:
            body:
                {
                email: String,
                password: String
                }
          token will be generated after the user loggged in.

    - Response:
            {
            "Message": "Login is Successfull",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDcwODIxN2ZkOWU3YzY3Y2Q4NDdkNWMiLCJpYXQiOjE2ODU0MzQ5NTZ9.-wXralczC3EgcaDl7Iwk_qgNA_x-KQ1lzRR1vsWbll4"
        }



## Flight Routes

# Get All Flights Data
GET /api/flight
 return all flights data with id

 Response:
{
    "Message": "All Flights Data",
    "All Flight": [
        {
            "_id": "64709affc873cba38e7fb2c1",
            "airline": "Air India",
            "flightNo": "ABC50",
            "departure": "sunday",
            "arrival": "tuesday",
            "departureTime": "2023-05-28T00:00:00.000Z",
            "arrivalTime": "2023-05-30T00:00:00.000Z",
            "seats": 230,
            "price": 4000,
            "__v": 0
        },
        {
            "_id": "6475a1e7c168fc47f1f2f859",
            "airline": "Air Asia",
            "flightNo": "XYZ30",
            "departure": "monday",
            "arrival": "tuesday",
            "departureTime": "2023-05-28T00:00:00.000Z",
            "arrivalTime": "2023-05-30T00:00:00.000Z",
            "seats": 230,
            "price": 2000,
            "__v": 0
        },
        
    ]
}

# Get Flight by ID
GET /api/flight/:id

get the data of flight of entered id

Response:
{
    "Message": "Single Flights Data",
    "Flight": [
        {
            "_id": "64709affc873cba38e7fb2c1",
            "airline": "Air India",
            "flightNo": "ABC50",
            "departure": "sunday",
            "arrival": "tuesday",
            "departureTime": "2023-05-28T00:00:00.000Z",
            "arrivalTime": "2023-05-30T00:00:00.000Z",
            "seats": 230,
            "price": 4000,
            "__v": 0
        }
    ]
}


# Add Flight

POST /api/flight

        body:{
            airline: String,
        flightNo: String,
        departure: String,
        arrival: String,
        departureTime: Date,
        arrivalTime: Date,
        seats: Number,
        price: Number,
        }

   data will be saved to mongoDb

   Response:

   Response:
{
    "Message": "Flight Added Successfully",
    "Flight": [
        {
            "_id": "64709affc873cba38e7fb2c1",
            "airline": "Air India",
            "flightNo": "ABC50",
            "departure": "sunday",
            "arrival": "tuesday",
            "departureTime": "2023-05-28T00:00:00.000Z",
            "arrivalTime": "2023-05-30T00:00:00.000Z",
            "seats": 230,
            "price": 4000,
            "__v": 0
        }
    ]
}

# Edit the Flight Data

 PATCH /api/flight/:id

 body:{
        airline: String,
        flightNo: String,
        departure: String,
        arrival: String,
        departureTime: Date,
        arrivalTime: Date,
        seats: Number,
        price: Number,
 }

 enter the data witch we want to change in database

# Delete the flight document

 DELETE /api/flight/:id

 enter the id og flight which we want to delete from database.



## Booking Flight Routes

# Book a flight

POST /book/api/booking

body:{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight'
    }
}

it will add the user and fligth id to book route and we can populate the data from there.

# Get all booked Data of user and flights together

GET /book/api/booking

it will return all data of booking on dashboard
{
    "Message": "All Booking Data",
    "AllData": [
        {
            "_id": "6470bec2c03d8bf93ee9d91b",
            "user": {
                "_id": "6470bcd1ff62022be1a7d716",
                "name": "Dhanu Sanap",
                "email": "dhanu@gmail.com",
                "__v": 0
            },
            "flight": {
                "_id": "64709affc873cba38e7fb2c1",
                "airline": "Air India",
                "flightNo": "ABC50",
                "departure": "sunday",
                "arrival": "tuesday",
                "departureTime": "2023-05-28T00:00:00.000Z",
                "arrivalTime": "2023-05-30T00:00:00.000Z",
                "seats": 230,
                "price": 4000
            },
            "__v": 0
        }
    ]
}


