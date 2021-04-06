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
            title: "Ingreso"
        });
    },
    loginProcess: (req, res) => {

        let errores = validationResult(req)
        
        
        if (!errores.isEmpty()) {
            
            
            return res.render("login", {
                errores: errores.mapped(),
                title : "Ingreso",
                
            })

        } else {

            const { email, pass, recordar } = req.body;

            db.Users.findOne({
                where: {
                    email : email.trim()
                }
            })
            .then(user => {
                if(!user == ""){
                    if (bcrypt.compareSync(pass, user.password)) {
                        req.session.user = {
                            id : user.id,
                            name : user.name,
                            last_name : user.last_name,
                            email : user.email,
                            avatar : user.avatar,
                            rol : user.rol_id
                        }
                        console.log(req.session.user)
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
                }else{
                    return res.render('login',{
                        errores :{
                            email : {
                                msg : 'Usuario no registrado'
                            }
                        },
                        
                        title : 'ingreso'
                    })
                }
               
            }).catch(error => console.log(error))
        }
         /*           
        return res.render('login',{
            errores :{
                email : {
                    msg : 'Usuario no registrado'
                }
            },
            
            title : 'ingreso'
        })*/
    },
    register: (req, res) => {
        res.render("register", {
            title: "Registro de Usuario"
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


            const { name, apellido, email, pass } = req.body;

            db.Users.create({
                name : name.trim(),
                last_name : apellido.trim(),
                email: email.trim(),
                password : bcrypt.hashSync(pass, 12),
                avatar : (req.files[0]) ? req.files[0].filename : "default.png"
            })
            .then(() => {res.redirect("/users/login")})
        }

    },
    profile: (req, res) => {

        db.Users.findOne({
            where: {
                id : req.session.user.id
            }
        })
        .then((result) => {
            res.render("profile", {
                title: "Perfil",
                result
            })
        })
    },
    profileEdit: (req, res) => {

        db.Users.findOne({
            where: {
                id : req.session.user.id
            }
        })
        .then((result) => {
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

        const {name, apellido, provincia, localidad, direccion, telefono} = req.body


        db.Users.update({
            name : name,
            last_name : apellido,
            avatar : (req.files[0]) ? req.files[0].filename : req.session.user.avatar,
            provincia : provincia,
            localidad : localidad,
            direccion : direccion,
            telefono : telefono
        },{
            where : {
                id : req.session.user.id
        }
    })
    .then(() => {
            res.redirect("/users/profile")
        })
    .catch(error => res.send(error))
    },
    remove: (req, res) => {

        db.Users.destroy({
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