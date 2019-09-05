const itemModels = require('../models/item');
const miscHelper = require('../helpers/helpers');
const cloudinary = require('cloudinary')

module.exports = {
    getItem: (req, res) => {
        const search = req.query.search
        itemModels.getItem(search)
            .then((resultItem) => {
                const result = resultItem
                // console.log(result);
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    insertItem: async (req, res) => {
        let path = req.file.path        
        console.log(req.file.path)
        // const image = req.file.filename
        const {
            title,
            // image,
            price,
            status
        } = req.body

        let geturl = async (req) =>{
            cloudinary.config({
                cloud_name: 'dwv9umye9',
                api_key: '814525311932543',
                api_secret: 'wiWIl-Goh-Ll1XLceh71lQoBqfw'
            })

            let dataCloudinary
            await cloudinary.uploader.upload(path, (result)=>{
                const fs = require('fs')
                fs.unlinkSync(path)
                dataCloudinary = result.url
            })
            return dataCloudinary
        }
        
        // let fileName =  'http://localhost:3001/upload/' + req.file.filename
        const data = {
            title,
            image: await geturl(),
            price,
            status: 0,
            created_at: new Date(),
            updated_at: new Date()
        }
        itemModels.insertItem(data)
            .then((resultItem) => {
                const result = resultItem
                miscHelper.response(res, result, 200, data)
            })
            .catch((error) => {
                console.log(error);
            })
    },
    deleteItem: (req, res) => {
        const id_item = req.params.id_item
        itemModels.deleteItem(id_item)
            .then((resultItem) => {
                const result = resultItem
                miscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error);
            })
    }
}