
const products = [
    {
        id:1,
        name:"laptop",
        quantity:22
    },
    {
        id:2,
        name:"bags",
        quantity:12,
    },
    {
        id:3,
        name:"mobile",
        quantity:11
    },
]

module.exports.products = (req,res) => {
    res.json(products);
}

module.exports.create = (req,res) => {
    console.log(req.body);
    const product = {
        id:products.length,
        name:req.body.name,
        quantity:req.body.quantity
    }
    res.json(req.body);
}