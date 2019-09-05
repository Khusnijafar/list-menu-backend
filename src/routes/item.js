const express = require('express')
const Route = express.Router()
const ItemController = require('../controllers/item')
const Auth = require('../helpers/auth')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage})

Route 
    .all('/*', Auth.authInfo)
    .get('/', ItemController.getItem)
    .post('/', upload.single('image'), ItemController.insertItem)
    .delete('/:id_item', ItemController.deleteItem)

module.exports = Route