const db = require('../database/models');
module.exports = {
        index : (req, res) => {
        
            db.Products.findAll({include : [{association :'imagenes'},{association : 'categoria'}]})
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


