const products = require('../products.json');

getProduct = (req,res)=>{
    const product = products.find(product => product.id === +req.params.id)
    if(!product){
        res.status(500).send('Item not in list')
    }
    else{
        res.status(200).send(product)
    }
};

module.exports = getProduct;