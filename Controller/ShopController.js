const Shop = require("../Models/ShopModel");


//* Get product's data from shop
const getProduct = async (req,res)=>{
    const data = await Shop.find();
    res.send(data);
}
//* Get product's data from shop
const getSingleProduct = async (req,res)=>{
    const name = req.query.name
    const data = await Shop.findOne({name});
    console.log(data);
    res.send(data);
}

//* Add new product to shop
const addProduct = async (req,res)=>{
    const product = req.body
    const element = new Shop(product)
    try {
        await element.save();
        res.send("Product add operation is Sucessfull");
    } catch (error) {
        if(error.code===11000){
            let err = `Duplicate data is in ${Object.keys(error.keyValue)} object`;
            res.send(err)
        }else{
            res.send(error.message);
        }
    }
}
//* Delete product from shop
const deleteProduct = async (req,res)=>{
    const name = req.body.name
    try {
        await Shop.deleteOne({name})
        res.send("Deletation is Sucessfull");
    } catch (error) {
        res.send(error.message);
    }
}

module.exports = { addProduct , getProduct , deleteProduct,getSingleProduct};
