module.exports= ( req, res, next)=>{
    if (req.cookies.userLogin) {                               
        req.session.user = req.cookies.userLogin
    }
    next()
}