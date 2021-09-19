const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    restaurantName: {
        type : String
    },
    dishName: {
        type: String
    },
    dishDescription: {
        type: String
    },
    dishPrice: {
        type: Number
    },
    dishImage: {
        type: String
    },
    dishRating: {
        type: String
    },
});

const Food = new mongoose.model('FOOD', foodSchema);

module.exports = Food;