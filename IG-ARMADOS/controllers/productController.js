const { getProducts } = require('../data/products')
const productos = getProducts(); 

module.exports = {
    detalle: (req, res) => {

        let producto = productos.find(producto => {
            return producto.id === Number(req.params.id)
        });
        let novedades = productos.filter(producto => {
            return producto.category == "novedades"
        });

        res.render("productoDetalle",{
            producto,
            novedades


        })
    }
}