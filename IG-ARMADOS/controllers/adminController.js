const db = require("../database/models");
const { validationResult } = require('express-validator');
const {Op} = require('sequelize');


module.exports = {
    index: (req, res) => {
       let productos = db.Products.findAll({include:[
            {association:'imagenes'},
            {association: 'categoria'},
        ]})
        let categorias = db.Categorys.findAll();

        Promise.all([categorias, productos])
        .then(([categorias, productos]) => {
                res.render("admin/productoLista", {
                    title: "Lista de Productos",
                    productos: productos,
                    imagen:productos,
                    categoria:productos,
                    categorias

                })
            }).catch(error => console.log(error))
    },
    users: (req, res) => {
    db.Users.findAll(
           {include:[
            {association:'roles'},
        ]})
        
        .then((users) => {
            res.render("admin/users", {
                title: "Registro de usuarios",
                users
            })
        })
    },
    profile: (req, res) => {
      let result =  db.Users.findOne({
            where: {
                id: req.params.id
            }, 
            include:[
                {association:'roles'},
            ] 
        })
        let roles = db.Rols.findAll()
        Promise.all([result,roles])
        .then(([result,roles]) => {
            res.render("admin/userEdit", {
                title: "Perfil",
                result,
                roles
            })
        })
    },
    updateUser: (req, res) => {
        
        const {rol} = req.body
       
        let NewiD = Number(rol)
        

        db.Users.update({
         rol_id : +NewiD
        },{
            where : {
                id: +req.params.id
        }
    })
    .then((result) => {
            
            res.redirect("/admin/users")
        })
    .catch(error => res.send(error))
    },
    
    borrarUser: (req, res) => {
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                return res.redirect("/admin/users")
            })
            .catch(error => res.send(error))




    },
    cargaProducto: (req, res) => {

        let categorias = db.Categorys.findAll();
        let componentes = db.Components.findAll();
        let garantias = db.Guarantees.findAll();
        let marcas = db.Marks.findAll();



        Promise.all([categorias, componentes, garantias, marcas])
            .then(([categorias, componentes, garantias, marcas]) => {
                res.render("admin/cargaProducto", {
                    title: "Carga de Producto",
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

            const { title, price, insale, garantia, component, mark, category, model, stock, description, features } = req.body;
            db.Products.create({
                name: title.trim(),
                price: +price.trim(),
                insale: +insale,
                guarantee_id: garantia.trim(),
                component_id: component.trim(),
                mark_id: mark.trim(),
                model: model.trim(),
                stock: +stock,
                description: description.trim() ,
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
        } else{
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
                        errores : errors.mapped(),
                        oldProduct : req.body
                    })
                })
                .catch(error => console.log(error))

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
                    title: "Edicion de Producto",
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
                description: description != "" ? description.trim(): null,
                features: features != "" ? features.trim() : null,
                category_id: category != "" ? category : null,
                /* image: image != "" ? image : null */
            }, {
                where: {
                    id: req.params.id
                }
            }).then(() => {
                db.Images.update({
                    name: (req.files[0]) ? req.files[0].filename : image
                }, {
                    where: {
                        product_id : req.params.id
                    }
                })
            })
                .then(() => {
                    return res.redirect("/admin")
                })

                .catch(error => res.send(error))
        }/* else {
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
                        producto ,
                        categorias,
                        componentes,
                        garantias,
                        marcas,
                        errores : errors.mapped()

                    })
                })
                .catch(error => res.send(error))

        }

 */





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