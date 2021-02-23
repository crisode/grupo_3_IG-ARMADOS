module.exports = {
    login: (req, res) => {
        res.render("login",{
            title:"ingreso"
        });
    },
    loginProcess: (req, res) => {

    }, 
    profile: (req, res) => {
        res.render("profile",{
            title:perfil
        });
    },
    
}