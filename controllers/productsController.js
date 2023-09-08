
const products = [
    {
        id:"1",
        name:"laptop",
        quantity:22
    },
    { 
        id:"2",
        name:"bags",
        quantity:12,
    },
    {
        id:"3",
        name:"mobile",
        quantity:11
    },
]

module.exports.products = (req,res) => {
    res.json(products);
}

module.exports.create = (req,res) => {
    const product = {
        id:(products.length + 1).toString(),
        name:req.body.name,
        quantity:req.body.quantity
    }

    products.push(product);
    res.json(req.body);
}


module.exports.delete = (req,res) => {
    // const product = products.find((item) => item.id === req.params.id );
    const index = products.findIndex((item) => item.id === req.params.id );
    if(index === -1 ){
        res.send('not found');
    }
    products.slice(index,1);
    res.send({
        "success":true,
        "message":"product deleted"
    });
}