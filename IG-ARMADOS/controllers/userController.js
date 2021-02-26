const {getUsers, setUsers} = require('../data/users');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt')
let users = getUsers();


module.exports={
    login: (req, res) => {
        res.render("login",{
            title:"ingreso"
        });
    },
    loginProcess: (req, res) => {

            const {email, pass, recordar} = req.body;
            
            /* verifico que el email este en la base de datos */
            let result = users.find(user => user.email === email);

            /* verifico que la contraseña sea la misma y si es positivo redirigo al perfil */
            if(result){
                if (bcrypt.compareSync(pass.trim(), result.pass)) {

                    //guardo en el objeto session.user los datos del usuario para levantar session del usuario
                    req.session.user = {
                        id: result.id,
                        nombre: result.nombre,
                        apellido: result.apellido,
                        email: result.email,
                        avatar: result.avatar
                    }

                    // creo la cookie para cuando el usuario elija recordarme
                    if(recordar != "undefined"){
                        res.cookie("userCom4", req.session.user, {maxAge: 1000 * 60 * 60 * 24}); // 1 dia de recordar la cookie
                    }

                    return res.redirect("/");
                }
            }
    },
    register: (req, res) => {
        res.render("register",{
            title:"registro de usuario"
        });
    },
    registerProcess: (req, res) => {
        
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('register',{
                errores : errores.errors,
                title : 'registro de usuario'
            })
        }else{
            

            const {name,apellido,email,pass} = req.body;

            let lastID = 0;
            users.forEach(user => {
                if (user.id > lastID) {
                    lastID = user.id
                }
            });
            
            let passHash = bcrypt.hashSync(pass,12);

            let newUser = {
                id: +lastID +1,
                nombre : name,
                apellido,
                email,
                password : passHash,
                avatar : req.files[0].filename ||  'no image' 
            }

            users.push(newUser)

            setUsers(users);

            res.redirect("/")

        }
    
    },
    profile:(req, res)=>{
        res.render("profile",{
            title:"perfil"
        })
    },
    profileEdit:(req, res)=>{
        res.render("profileEdit",{
            title:"Editar usuario"
        })

    },
    carrito:(req, res) => {
        res.render("carrito",{
            title:"carrito"
        });
    },
    update: (req, res) => {

    },
    remove: (req, res) => {
        
    }
}