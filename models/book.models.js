const mongoose=require('mongoose');

const bookSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    flight: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flight'
    }
});

const BookFlight=mongoose.model("Book",bookSchema);

module.exports={BookFlight}