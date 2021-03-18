const { sequelize } = require('../database/models');
const db = require('../database/models');
const Sequelize = require('sequelize')

module.exports = {
    index: (req, res) => {

        db.Products.findAll({
            include: [
                { association: 'imagenes' },
                { association: 'categoria' },
            ]

        })
            .then(productos => {

                let destacados = productos.filter(producto => {
                    return producto.categoria.name == "Destacados"
                });

                let novedades = productos.filter(producto => {
                    return producto.categoria.name == "Novedades"
                });
/* 
                var cuatroDestacados = [];
                var posicionesElegibles = [];
                var i, r;
                for (i = 0; i < destacados.length; i++) posicionesElegibles[i] = i;
                for (i = 0; i < 4; i++) {
                    r = Math.floor(Math.random() * posicionesElegibles.length);
                    cuatroDestacados.push(destacados[posicionesElegibles[r]]);
                    posicionesElegibles.splice(r, 1);
                }

                var cuatroNovedades = [];
                var posicionesElegibles1 = [];
                var i, r;
                for (i = 0; i < novedades.length; i++) posicionesElegibles1[i] = i;
                for (i = 0; i < 4; i++) {
                    r = Math.floor(Math.random() * posicionesElegibles1.length);
                    cuatroNovedades.push(novedades[posicionesElegibles1[r]]);
                    posicionesElegibles1.splice(r, 1);
                }

 */




                res.render("index", {
                    title: "IG-Armados",
                    destacados,
                    novedades,
                    /* cuatroNovedades,
                    cuatroNovedades */
                })
            }).catch(error => console.log(error))
    },
    contact: (req, res) => {
        res.render("contacto", {
            title: "contacto"
        })
    }


}


