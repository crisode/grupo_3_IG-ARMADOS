const { getProducts } = require('../data/products')
const productos = getProducts(); // Entre parentesis significa que lo estamos ejecutando

module.exports = {
        index : (req, res) => {
            
            let destacados = productos.filter(producto => {
                return producto.category == "destacados"
            });

            let novedades = productos.filter(producto => {
                return producto.category == "novedades"
            });

            res.render("index" ,{
                title:"IG-Armados",
                destacados,
                novedades
            })

        }

        
}


