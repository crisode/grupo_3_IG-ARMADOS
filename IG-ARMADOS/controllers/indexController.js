const { getProducts } = require('../data/products')
const productos = getProducts(); // Entre parentesis significa que lo estamos ejecutando
const db = require('../database/models');
module.exports = {
        index : (req, res) => {
            
            db.producto.findAll({
                include : [
                    {
                        association : 'imagen'
                    },
                    {
                        include : 'categoria'
                    }
                ]
            })
            .then(productos => {
                let destacados = productos.filter(producto => {
                    return producto.categoria.name == "destacados"
                });

                let novedades = productos.filter(producto => {
                    return producto.categoria.name == "novedades"
                });

                res.render("index" ,{
                    title:"IG-Armados",
                    destacados,
                    novedades
                })
            }).catch(error => console.log(error))


            

            

            

        },
        contact:(req, res)=>{
            res.render("contacto",{
                title:"contacto"
            })
        }

        
}


