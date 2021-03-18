
const db = require('../database/models');



module.exports = { 
    detalle: (req, res) => {
        let producto = db.Products.findOne({
            where : {
                id : req.params.id
            },
            include : [
                {association : 'categoria'},
                {association : 'componente'},
                {association : 'marca'},
                {association : 'imagenes'},
                {association : 'garantia'}
            ]
        })
        .then( producto=> {

            res.render("productoDetalle",{
                title:"Detalle",
                producto:producto,
                categoria:producto,
                componente:producto,
                marca:producto,
                garantia:producto
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
    },
    
    

}