const fs = require("fs");
const path = require("path");
const { getUsers, setUsers } = require('../data/users');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const users = getUsers();
const db = require("../database/models");

module.exports = {
    login: (req, res) => {
        res.render("login", {
            title: "ingreso"
        });
    },
    loginProcess: (req, res) => {

        let errores = validationResult(req)
        
        
        if (!errores.isEmpty()) {
            
            
            return res.render("login", {
                errores: errores.mapped(),
                title : "ingreso",
                
            })

        } else {

            const { email, pass, recordar } = req.body;

            db.Usuarios.findOne({
                where: {
                    email
                }
            })
            .then(user => {
                if (user && bcrypt.compareSync(pass, user.password)) {
                    req.session.user = {
                        id : user.id,
                        name : user.name,
                        last_name : user.last_name,
                        email : user.email,
                        avatar : user.avatar,
                        rol : user.rol_id
                    }

                    // creo la cookie para cuando el usuario elija recordarme
                    
                    if(recordar){
                        res.cookie("user", req.session.user, {maxAge: 1000 * 60 * 60 * 24}); // 1 dia de recordar la cookie
                    }
                    return res.redirect("/");
                }else{
                    return res.render('login',{
                        errores :{
                            email : {
                                msg : 'Email o contraseña incorecto'
                            }
                        },
                        
                        title : 'ingreso'
                    })

                }
            })
        }
                    
        return res.render('login',{
            errores :{
                email : {
                    msg : 'Usuario no registrado'
                }
            },
            
            title : 'ingreso'
        })
    },
    register: (req, res) => {
        res.render("register", {
            title: "registro de usuario"
        });
    },
    registerProcess: (req, res) => {

        let errores = validationResult(req);
        
        if (!errores.isEmpty()) {
            return res.render('register', {
                errores: errores.mapped(),
                title: 'Registro de Usuario'
            })
        } else {


            const { name, apellido, email, pass , img} = req.body;

            db.User.create({
                name : name.trim(),
                last_name : apellido.trim(),
                email,
                password : bcrypt.hashSync(pass, 12),
                avatar : img
            })
            .then(() => res.redirect("/login"))
        }

    },
    profile: (req, res) => {

        let result = db.Usuarios.findByPk({
            where: {
                id : req.params.id
            }
        })
        .then(() => {
            res.render("profile", {
                title: "perfil",
                result
            })
        })
    },
    profileEdit: (req, res) => {

        let result = db.Usuarios.findByPk({
            where: {
                id : req.params.id
            }
        })
        .then(() => {
            res.render("profileEdit", {
                title: "Editar Perfil",
                result
            })
        })
    },
    carrito: (req, res) => {
        res.render("carrito", {
            title: "carrito"
        });
    },
    update: (req, res) => {

        const {name, apellido, email} = req.body


        db.Usuarios.update({
            name : name,
            last_name : apellido,
            email : email
        },{
            where : {
                id : req.params.id
        }
    })
    .then(() => {
        let userUpdate = db.Usuarios.findByPk({
            where: {
                id : req.params.id
            }
        }).then(() => {
            req.session.user = {
                id: userUpdate.id,
                name: userUpdate.name,
                last_name: userUpdate.last_name,
                email: userUpdate.email,
                avatar: userUpdate.avatar,
                rol: userUpdate.rol_id
            }
        })

        res.redirect("/users/profile")
    })
        
    },
    remove: (req, res) => {

        db.Usuarios.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(() => {
            //cuando cierro sesion, mato el req.session
            req.session.destroy();

            //cuando finalizo la session, tambien me encargo de matar la cookie
            if(req.cookies.user){
                res.cookie("user", "", {maxAge: -1})
            };

            res.redirect("/");
        })
        

    },
    logout: (req, res) => {

        //cuando cierro sesion, mato el req.session
        req.session.destroy();

        //cuando finalizo la session, tambien me encargo de matar la cookie
        if(req.cookies.user){
            res.cookie("user", "", {maxAge: -1})
        };

        //finalizo redireccionando
        res.redirect("/");
    }
}