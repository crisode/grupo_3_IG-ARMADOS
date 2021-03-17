const db = require("../database/models");
const { validationResult } = require('express-validator');


module.exports = {
    index: (req, res) => {
        db.Products.findAll({include:[{association:'imagenes'}]})
        .then(function(productos){
                res.render("admin/productoLista", {
                    title: "lista de productos",
                    productos: productos,
                    imagen:productos

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
                    marcas,

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
                guarantee_id: garantia.trim(),
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
                        name: (req.files[0]) ? req.files[0].filename : "default-image.png",
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
        let categorias = db.Categorys.findAll();
        let componentes = db.Components.findAll();
        let garantias = db.Guarantees.findAll();
        let marcas = db.Marks.findAll();

        let producto = db.Products.findOne({
            where: {
                id: req.params.id
            },
            include: [
                { association: 'categoria' },
                { association: 'componente' },
                { association: "marca" },
                { association: "imagenes" },
                { association: "garantia" }
            ]
        })
        Promise.all([categorias, componentes, garantias, marcas, producto])
            .then(([categorias, componentes, garantias, marcas, producto]) => {
                return res.render("admin/productoDetalle", {
                    title: "Detalle",
                    producto,
                    categorias,
                    componentes,
                    garantias,
                    marcas,
                });
            })
            .catch(error => res.send(error))

    },
    editarProducto: (req, res) => {
        let categorias = db.Categorys.findAll();
        let componentes = db.Components.findAll();
        let garantias = db.Guarantees.findAll();
        let marcas = db.Marks.findAll();

        let producto = db.Products.findOne({
            where: {
                id: req.params.id
            },
            include: [
                { association: 'categoria' },
                { association: 'componente' },
                { association: "marca" },
                { association: "imagenes" },
                { association: "garantia" }
            ]
        })
        Promise.all([categorias, componentes, garantias, marcas, producto])
            .then(([categorias, componentes, garantias, marcas, producto]) => {
                return res.render("admin/editarProducto", {
                    title: "Edicion de producto",
                    producto,
                    categorias,
                    componentes,
                    garantias,
                    marcas,

                })
            })
            .catch(error => res.send(error))

    },


















    actualizarProducto: (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {

            const { image, title, price, insale, garantia, component, mark, category, model, stock, description, features } = req.body;

            db.Products.update({
                name: title != "" ? title.trim() : null,
                price: price != "" ? +price.trim() : null,
                insale: insale != "" ? +insale : null,
                guarantee_id: garantia != "" ? garantia.trim() : null,
                component_id: component != "" ? component.trim() : null,
                mark_id: mark != "" ? mark.trim() : null,
                model: model != "" ? model.trim() : null,
                stock: stock != "" ? +stock : null,
                description: description != "" ? description.trim() : null,
                features: features != "" ? features.trim() : null,
                category_id: category != "" ? category : null
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