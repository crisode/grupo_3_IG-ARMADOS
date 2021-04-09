const { sequelize } = require('../database/models');
const db = require('../database/models');
const {Op,Sequelize} = require('sequelize');

module.exports = {
    index: (req, res) => {

        let destacados=db.Products.findAll({
            include: [
                { association: 'imagenes' },  
                { association: 'categoria' },
            ],
            where : {
                category_id : {
                    [Op.like] : 1
                } 
            },
            order: sequelize.random(),
            limit:4
        })
        let novedades=db.Products.findAll({
            include: [
                { association: 'imagenes' },
                { association: 'categoria' },
            ],
            where : {
                category_id : {
                    [Op.like] : 3
                }
            },
            order: sequelize.random(),

            limit:4
        })
        Promise.all([destacados,novedades])
            .then(([destacados,novedades]) => {
                res.render("index", {
                    title: "IG-Armados",
                    destacados,
                    novedades
                })
            }).catch(error => console.log(error))
    },
    contact: (req, res) => {
        res.render("contacto", {
            title: "Contacto"
        })
    }


}


