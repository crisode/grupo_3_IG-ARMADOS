

const db = require("../database/models");

module.exports = {
    index: (req, res) => {
        db.Producto.findAll()
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
        const { image, title, price, insale, garantia, component, mark, category, model, stock, description, features } = req.body;
        db.Producto.create({
            title: title.trim(),
            price,
            insale,
            garantia,
            component,
            mark,
            model,
            stock,
            description,
            features,
            category,
            image: req.files[0].filename
        })
            .then(() => {
               return res.redirect("/admin")
            })
            .catch(error => res.send(error))
    },

    detalleProducto: (req, res) => {
        db.Producto.findByPk(req.params.id)
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
            price,
            insale,
            garantia,
            component,
            mark,
            model,
            stock,
            description,
            features,
            category,
            image
        },
            {
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
            where:{
                id:req.params.id
            }
        })
        .then(() => {
            return res.redirect("/admin")
        })
        .catch(error => res.send(error))




    }
}