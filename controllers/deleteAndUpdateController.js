

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