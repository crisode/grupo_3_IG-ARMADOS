module.exports={
    login: (req, res) => {
        res.render("login",{
            title:"ingreso"
        });
    },
    loginProcess: (req, res) => {

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
            
            let passHash = bcrypt.hashSync(pass,12);

            let newUser = {
                nombre : name,
                apellido,
                email,
                password : passHash,
                avatar : req.files[0].filename ||  'no image' 
            }

            users.push(newUser)

            setUsers(users);

            res.redirect("/users/login")

        }
    
    },
    profile:(req, res)=>{
        res.render("profile",{
            title:"perfil"
        })
    },
    carrito:(req, res) => {
        res.render("carrito",{
            title:"carrito"
        });
        

         }
}