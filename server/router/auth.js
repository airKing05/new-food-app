const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

require('../db/conn');
const {Restaurant} = require('../model/restaurantSchema');

const app = express();

router.get('/', (req, res) => {
    res.send('hello from server on router page')
});

// for image uploading
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, 'upload/images')
    },
    filename: (req, file, cb) => {
        let imageName = `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        return cb(null, imageName)
    }
})

const upload = multer({
    storage: storage,
    // fileFilter: (req, file, cb) => {
    //     if( file.mimetype == "image/png" || file.mimetype == "image/jpg"){
    //         return cb(null, true)
    //     }else{
    //         console.log("can accept only png and jpg file formate")
    //         cb(null, false)
    //     }
    // }
    // limits: {
    //     fileSize: 1024 * 1024 * 2
    // }
})


// promises method --------------
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


// async await method ------------------

app.use('/dishImg', express.static('upload/images'));
 

router.post('/post-food', upload.single('dishImg'),  async (req, res) => {
    // const food = {
    //     restaurantName : req.body.restaurantName,
    //     restaurantRating : req.body.restaurantRating,
    //     restaurantAddress : req.body.restaurantAddress,
    //     category: [
    //         {
    //         dishName : req.body.category.dish.dishName,
    //         dishDescription : req.body.category.dish.dishDescription,
    //         dishPrice : req.body.category.dish.dishPrice,
    //         dishRating : req.body.category.dish.dishRating

    //     }]
    // }

    // const { restaurantName, categoryName, dishName, dishDescription, dishPrice, dishRating } = req.body;

    // if (req.file){
    //     dishImg = req.file.filename
    // }

    // if (!restaurantName || !categoryName || !dishName || !dishPrice || !dishImg) {
    //     return res.status(422).json({ error: "please fill up the filed properly" })
    // }

    try {
        // const foodExist = await Food.findOne({ restaurantName: req.body.restaurantName, dishName: req.body.category.dish.dishName })
        // if (foodExist) {
        //     return res.status(422).json({ error: "this combination already exist" })
        // }

        // console.log(req.body, "body")
        const restaurant = new Restaurant({
            
            restaurantName: req.body.restaurantName,
            restaurantRating: req.body.restaurantRating,
            restaurantAddress: req.body.restaurantAddress,
            category: [
                {
                 categoryName: req.body.categoryName
                },
                {
                    dishName: req.body.dishName,
                    dishDescription: req.body.dishDescription,
                    dishPrice: req.body.dishPrice,
                    dishRating: req.body.dishRating
                }
            ]
        });

        await restaurant.save();
        // console.log(restaurant, "save")
        res.status(201).json({ message: "food added successfully" })


    } catch (err) {
        console.log(err)
    }
})

module.exports = router;

