
const db = require('../database/models');



module.exports = { 
    detalle: (req, res) => {

        db.Producto.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {
                    association : 'carrito'
                },
                
                {
                    association : 'categoria'
                },
                {
                    association : 'componente'
                },
                {
                    association : 'marca'
                },
                {
                    association : 'imagen'
                },
                {
                    association : 'garantia'
                }
            ]
        })
        .then(producto => {
            let novedades = producto.filter(producto => {
                return producto.categoria.name == "novedades"
            });
            res.render("productoDetalle",{
                title:"Detalle",
                producto,
                novedades
            })
        }).catch(error => console.log(error))
        



        /*
        let producto = productos.find(producto => {
            return producto.id === Number(req.params.id)
        });
        
        let novedades = productos.filter(producto => {
            return producto.category == "novedades"
        });

        res.render("productoDetalle",{
            title:"Detalle",
            producto,
            novedades
        })*/

    },
    carrito :(req, res)=>{
        res.render("carrito",{
            title:"title"
        })
    }
  
    

}