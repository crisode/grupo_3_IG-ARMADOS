const fs = require("fs");
const path = require("path");
const { getUsers, setUsers } = require('../data/users');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const users = getUsers();


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

            /* verifico que el email este en la base de datos */
            let result = users.find(user => user.email === email);

            /* verifico que la contraseña sea la misma y si es positivo redirigo al perfil */
            if (result) {
                if (bcrypt.compareSync(pass.trim(), result.password)) {

                    //guardo en el objeto session.user los datos del usuario para levantar session del usuario
                    req.session.user = {
                        id: result.id,
                        nombre: result.nombre,
                        apellido: result.apellido,
                        email: result.email,
                        avatar: result.avatar,
                        rol: result.rol
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
            }
            
            return res.render('login',{
                errores :{
                    email : {
                        msg : 'Usuario no registrado'
                    }
                },
                
                title : 'ingreso'
            })
            


        }


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
                title: 'registro de usuario'
            })
        } else {


            const { name, apellido, email, pass } = req.body;

            let lastID = 0;
            users.forEach(user => {
                if (user.id > lastID) {
                    lastID = user.id
                }
            });

            let passHash = bcrypt.hashSync(pass, 12);

            let newUser = {
                id: +lastID + 1,
                nombre: name,
                apellido,
                email,
                password: passHash,
                avatar: req.files[0].filename || 'no image'
            }

            users.push(newUser)

            setUsers(users);


            res.redirect("/users/login")

        }

    },
    profile: (req, res) => {

        let result = users.find(user => req.session.user.id === user.id);

        res.render("profile", {
            title: "perfil",
            result
        })
    },
    profileEdit: (req, res) => {

        let result = users.find(user => user.id == +req.params.id);

        res.render("profileEdit", {
            title: "Editar Perfil",
            result
        })

    },
    carrito: (req, res) => {
        res.render("carrito", {
            title: "carrito"
        });
    },
    update: (req, res) => {

        const {name, apellido, email} = req.body


        users.forEach(user => {
            if(user.id === +req.params.id){
                user.id = Number(req.params.id)
                user.avatar = user.avatar
                user.nombre = name
                user.apellido = apellido
                user.email = email
                user.password = user.password
            }
        })

        let userUpdate = users.find(user => user.id == +req.params.id);

        

        req.session.user = {
            id: userUpdate.id,
            nombre: userUpdate.nombre,
            apellido: userUpdate.apellido,
            email: userUpdate.email,
            avatar: userUpdate.avatar,
            rol: userUpdate.rol
        }


        setUsers(users)

        

        res.redirect("/users/profile")
    },
    remove: (req, res) => {

        users.forEach(user => {
            if (user.id === +req.params.id) {
                if (fs.existsSync(path.join('public','images','userAvatar',user.avatar))) {
                    fs.unlinkSync(path.join('public','images','userAvatar',user.avatar))
                }

                var aEliminar = users.indexOf(user);
                users.splice(aEliminar, 1)
            }
        });

        setUsers(users);

        //cuando cierro sesion, mato el req.session
        req.session.destroy();

        //cuando finalizo la session, tambien me encargo de matar la cookie
        if(req.cookies.userCom4){
            res.cookie("user", "", {maxAge: -1})
        };

        res.redirect("/");

    },
    logout: (req, res) => {

        //cuando cierro sesion, mato el req.session
        req.session.destroy();

        //cuando finalizo la session, tambien me encargo de matar la cookie
        if(req.cookies.userCom4){
            res.cookie("user", "", {maxAge: -1})
        };

        //finalizo redireccionando
        res.redirect("/");
    }
}