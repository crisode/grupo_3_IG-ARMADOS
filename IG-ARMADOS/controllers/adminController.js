const db = require("../database/models");
const { validationResult } = require('express-validator');
module.exports = {
    index: (req, res) => {
        db.producto.findAll()
            .then(productos => {
                return res.render("admin/productoLista", {
                    title: "lista de productos",
                    productos
                })
            })
            .catch(error => res.send(error))
    },

    cargaProducto: (req, res) => {
        return res.render("admin/cargaProducto", {
            title: "Carga de producto"
        })
    },
    storeProducto: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {/* si no hay errores */

            const { image, title, price, insale, garantia, component, mark, category, model, stock, description, features } = req.body;
            db.producto.create({
                title: title.trim(),
                price: +price.trim(),
                insale: insale,
                garantia: garantia.trim(),
                component: component.trim(),
                mark: mark.trim(),
                model: model.trim(),
                stock: (req.body.stock),
                description: description.trim(),
                features: features.trim(),
                category: category,
            })
                .then((newProduct) => {
                    let id = newProduct.id
                    db.Images.create({
                        imagen: (req.files[0]) ? req.files[0].filename : "default-image.png",
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
        db.producto.findByPk(req.params.id)
            .then(producto => {
                return res.render("admin/productoDetalle", {
                    title: "Detalle",
                    producto
                });
            })
            .catch(error => res.send(error))

    },
    editarProducto: (req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(producto => {
                return res.render("admin/editarProducto.ejs", {
                    title: "Edicion de producto",
                    producto
                })
            })
            .catch(error => res.send(error))

    },
    actualizarProducto: (req, res) => {
        const { image, title, price, insale, garantia, component, mark, category, model, stock, description, features } = req.body;
        db.Producto.update({
            title: title.trim(),
            price: +price.trim(),
            insale: insale,
            garantia: garantia.trim(),
            component: component.trim(),
            mark: mark.trim(),
            model: model.trim(),
            stock: (req.body.stock),
            description: description.trim(),
            features: features.trim(),
            category: category,
        }, {
            where: {
                    id: req.params.id
                }
            })
            .then(() => {
                return res.redirect("/admin/detalle/" + req.params.id)
            })
            .catch(error => res.send(error))


    },
    borrarProducto: (req, res) => {
        db.Pelicula.destroy({
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