
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