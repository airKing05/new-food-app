const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    categoryName:{
        type: String,
       // required: true
    },
    dish: [
        {
            dishName: {
                type: String,
                // required: true
            },
            dishDescription: {
                type: String
            },
            dishPrice: {
                type: Number,
                // required: true
            },
            dishImg: {
                type: String,
            },
            dishRating: {
                type: String
            },
        }
    ]
});

const restaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
       
    },
    restaurantRating:{
        type: String
    },

    restaurantAddress: {
        type: String
    },
    category: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'foodSchema'
        }
    ]
})

const Restaurant = mongoose.model('RESTAURANT', restaurantSchema);
const Food = mongoose.model('Food', foodSchema);

module.exports = {
    Restaurant: Restaurant,
    Food: Food
};