module.exports = (req, res, next) => {
  if (typeof req.session.user.rol != "undefined") {
    next();
  } else {
    res.redirect("/");
  }
};
