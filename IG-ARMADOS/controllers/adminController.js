const db = require("../database/models");
const { validationResult } = require('express-validator');


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

            res.render("admin/productoLista", {
                title: "lista de productos",
                destacados,
                novedades,
                 productos
            })
        }).catch(error => console.log(error))
    },
     





    cargaProducto: (req, res) => {
        
        let categorias = db.Categorys.findAll();
        let componentes = db.Components.findAll();
        let garantias = db.Guarantees.findAll();
        let marcas = db.Marks.findAll();
        
    
        Promise.all([categorias, componentes, garantias, marcas])
            .then(([categorias, componentes, garantias, marcas]) => {
                 res.render("admin/cargaProducto", {
                    title: "Carga de producto",
                    categorias,
                    componentes,
                    garantias,
                    marcas
                })
            })
            .catch(error => console.log(error))

    },
    storeProducto: (req, res) => {
        
        let errors = validationResult(req);
        if (errors.isEmpty()) {/* si no hay errores */

            const { image, title, price, insale, garantia, component, mark, category, model, stock, description, features } = req.body;
            db.Products.create({
                name: title.trim(),
                price: +price.trim(),
                insale: +insale,
                guarantee_id : garantia.trim(),
                component_id: component.trim(),
                mark_id: mark.trim(),
                model: model.trim(),
                stock: +stock,
                description: description.trim(),
                features: features.trim(),
                category_id: category
                

            })
                .then((newProduct) => {
                    db.Images.create({
                        name:(req.files[0])?req.files[0].filename:"default-image.png",
                        product_id: newProduct.id
                    })
                   
                        .then(() => {
                            res.redirect("/admin")
                        })
                })
                .catch(error => res.send(error))
        }

    },

    detalleProducto: (req, res) => {
        db.Products.findByPk(req.params.id)
            .then(producto => {
                return res.render("admin/productoDetalle", {
                    title: "Detalle",
                    producto
                });
            })
            .catch(error => res.send(error))

    },
    editarProducto: (req, res) => {
        db.Products.findByPk(req.params.id)
            .then(producto => {
                return res.render("admin/editarProducto.ejs", {
                    title: "Edicion de producto",
                    producto
                })
            })
            .catch(error => res.send(error))

    },
    actualizarProducto: (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {

            const { image, title, price, insale, garantia, component, mark, category, model, stock, description, features } = req.body;

            db.Products.update({
                title: title.trim(),
                price: +price.trim(),
                insale: insale,
                garantia: garantia.trim(),
                component: component.trim(),
                mark: mark.trim(),
                model: model.trim(),
                stock: stock.trim(),
                description: description.trim(),
                features: features.trim(),
                category: +category,
            }, {
                where: {
                    id: req.params.id
                }
            })
                .then(() => {
                    return res.redirect("/admin/detalle/" + req.params.id)
                })

                .catch(error => res.send(error))
        }







    },
    borrarProducto: (req, res) => {
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return res.redirect("/admin")
            })
            .catch(error => res.send(error))




    }
}