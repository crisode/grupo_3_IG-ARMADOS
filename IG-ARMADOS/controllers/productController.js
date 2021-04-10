const db = require('../database/models');

const {Op,Sequelize} = require('sequelize');
const { sequelize } = require('../database/models');


module.exports = { 
    busqueda : (req,res) => {

        let busqueda;

        if(req.query.search){
            busqueda = req.query.search.trim()
        }
        

        db.Products.findAll({
            where : {
                name : {
                    [Op.like] : `%${busqueda}%`
                }
            },
            include : [{association : 'imagenes'}]
        })
        .then(result => {
            return res.render('productList',{
                title : 'Resultados',
                productos : result,
                search : busqueda
            })
        }).catch(error => console.log(error))

        
    },
    productByComponent : (req,res) => {
        
        db.Products.findAll({
            where : {
                component_id : +req.params.id
            },
            include : [{association : 'imagenes'},{association : 'componente'}]
        })
        .then(result => {

            return res.render('componentProducts',{
                title : 'Resultados',
                productos : result,
            })
     
            
          
        })
        .catch(error => console.log(error))
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
                title:producto.name,
                producto:producto,
                categoria:producto,
                componente:producto,
                marca:producto,
                garantia:producto,
                interes
            })
        }).catch(error => console.log(error))
             
    },
    carrito :(req, res)=>{
        res.render("carrito",{
            title:"title"
        })
    },
    
    

}