const products = require('../products.json');

getProducts = (req,res)=>{
    if(req.query.price){
        res.status(200).send(products.filter(val => val.price >= req.query.price));
    }
    else{
        res.status(200).send(products);
    }
    
};

module.exports = getProducts;