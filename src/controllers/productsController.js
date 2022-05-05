const products = require("../data/products")

module.exports={

    detail: (req,res)=>{

        const {id} = req.params;

        const product = products.find(product=>product.id === +id)

        return res.render('detalleMenu',{
            product
        })
    }
}