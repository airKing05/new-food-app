const express = require('express');
const router = express.Router();
require('../db/conn');
const Food = require('../model/foodSchema');

router.get('/', (req, res) => {
    res.send('hello from server on router page')
});


// promises method
// router.post('/post-food', (req, res) => {
//     const {restaurantName, dishName, dishDescription, dishPrice, dishRating} = req.body;

//     if (!restaurantName || !dishName || !dishPrice){
//        return res.status(422).json({error: "please fill up the filed properly"})
//     }

//     Food.findOne({restaurantName: restaurantName, dishName: dishName })
//         .then((foodExist) => {
//             if (foodExist){
//                 return res.status(422).json({error: "this combination already exist"})
//             }

//             const food = new Food({restaurantName, dishName, dishDescription, dishPrice, dishRating});

//             food.save().then(() => {
//                 res.status(201).json({message: "food added successfully"})
//             }).catch((err) => res.status(500).json({err: "not able to added food"}))

//         }).catch(err => { console.log(err)});

// });


// async await method
router.post('/post-food', async (req, res) => {
    const { restaurantName, dishName, dishDescription, dishPrice, dishRating } = req.body;

    if (!restaurantName || !dishName || !dishPrice) {
        return res.status(422).json({ error: "please fill up the filed properly" })
    }

    try {
        const foodExist = await Food.findOne({ restaurantName: restaurantName, dishName: dishName })
        if (foodExist) {
            return res.status(422).json({ error: "this combination already exist" })
        }

        const food = new Food({ restaurantName, dishName, dishDescription, dishPrice, dishRating });

        await food.save();
        res.status(201).json({ message: "food added successfully" })


    } catch (err) {
        console.log(err)
    }
})

module.exports = router;

