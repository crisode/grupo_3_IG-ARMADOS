module.exports= ( req, res, next)=>{
    if (req.cookies.userCom4) {                               
        req.session.user = req.cookies.userCom4
    }
    next()
}