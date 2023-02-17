const multer = require('multer')
const path = require('path')

// directory to save image
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images')
    },
    filename: (req, file, callback) => {
        const timeStamp = new Date().getTime();
        const originalName = file.originalname;
        
        callback(null, `${timeStamp}-${originalName}`)
    }
})

// handle middleware upload
const upload = multer({storage: storage, 
    limits:{
        fileSize: 5 * 1000 * 1000
}})

module.exports = upload