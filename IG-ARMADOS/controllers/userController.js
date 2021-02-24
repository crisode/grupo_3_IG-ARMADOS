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