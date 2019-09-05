const cartModels = require('../models/cart')
const miscHelper = require('../helpers/helpers')

module.exports = {
    getCart: (req, res) => {
        cartModels.getCart()
            .then((resultCart) => {
                const result = resultCart
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    getUserCart: (req, res) => {
        const id_user = req.params.id_user
        cartModels.getUserCart(id_user)
            .then((resultCart) => {
                const result = resultCart
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    quantityPlus: (req, res) => {
        const id_cart = req.params.id_cart
        cartModels.quantityPlus(id_cart)
            .then((resultCart) => {
                const result = resultCart
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    quantityMinus: (req, res) => {
        const id_cart = req.params.id_cart
        cartModels.quantityMinus(id_cart)
            .then((resultCart) => {
                const result = resultCart
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    insertCart: (req, res) => {
        const { id_item, id_user } = req.body

        const data = {
            id_item,
            quantity: 1,
            id_user,
            status: 1,
            created_at: new Date(),
            updated_at: new Date()
        }
        cartModels.checkCart(id_item, id_user)
            .then((resultCart) => {
                const result = resultCart
                if(result.length < 1) {
                    cartModels.insertCart(data)
                        .then((resultCart) => {
                            const result = resultCart
                            miscHelper.response(res, result, 200)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                } else {
                    miscHelper.response(res, null, 403, 'data is available')
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },
    updateCart: (req, res) => {
        const id_cart = req.params.id_cart
        const { id_item, quantity, id_user, status } = req.body
        const data = {
            id_item,
            quantity,
            id_user,
            status,
            updated_at: new Date()
        }
        cartModels.updateCart(id_cart, data)
            .then((resultCart) => {
                const result = resultCart
                miscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteCart: (req, res) => {
        const id_cart = req.params.id_cart
        cartModels.deleteCart(id_cart)
            .then((resultCart) => {
                const result = resultCart
                miscHelper.response(res, result, 200)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}