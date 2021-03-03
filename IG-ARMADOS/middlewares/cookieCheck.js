module.exports= ( req, res, next)=>{
    if (req.cookies.user) {                               
        req.session.user = req.cookies.user
    }
    next()
}