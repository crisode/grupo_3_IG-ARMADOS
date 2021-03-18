const db = require('../database/models');

const {Op,Sequelize} = require('sequelize');
const { sequelize } = require('../database/models');


module.exports = { 
    busqueda : (req,res) => {

      
        db.Products.findAll({
            where : {
                name : {
                    [Op.like] : `%${req.query.search}%`
                }
            },
            include : [{association : 'imagenes'}]
        })
        .then(result => {
            
            res.render('productList',{
                title : 'resultados',
                productos : result,
                search : req.query.search
            })
        })
        
    },

    detalle: (req, res) => {
        let interes=db.Products.findAll({
            include: [
                { association: 'imagenes' },  
                { association: 'categoria' },
            ],
            order: sequelize.random(),
            limit:4
        })


        
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
        Promise.all([interes, producto])
        .then( ([interes,producto])=> {

            res.render("productoDetalle",{
                title:"Detalle",
                producto:producto,
                categoria:producto,
                componente:producto,
                marca:producto,
                garantia:producto,
                interes
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