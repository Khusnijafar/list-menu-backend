const express = require('express')
const Route = express.Router()
const cartController = require('../controllers/cart')
const Auth = require('../helpers/auth')

Route
    
    .get('/', cartController.getCart)
    .patch('/quantityPlus/:id_cart', cartController.quantityPlus)
    .patch('/quantityMinus/:id_cart', cartController.quantityMinus)
    .post('/', cartController.insertCart)
    .patch('/:id_cart', cartController.updateCart)
    .delete('/:id_cart', cartController.deleteCart)
    
module.exports = Route
