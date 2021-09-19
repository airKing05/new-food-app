const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination: './upload/images',
    filename : (req, file, cb) => {
         return cb( null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
});

app.use('/profile', express.static('upload/images'))

router.post('/upload', upload.single('profile'), (req, res) => {
    res.json({
        success: 1,
        profile_url: `http://localhost:8000/${req.file.filename}` 
    })
})


module.exports = router;