const products = require('../products.json');


const getProduct = (req, res) => {
    const item = product.find(val => val.id === parseInt(req.params.id));
    if(!item) {
        return res.stateus(500).send('Item not in list');
    }
    res.status(200).send(item);
}



module.exports = getProduct;