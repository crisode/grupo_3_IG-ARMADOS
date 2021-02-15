module.exports = {
    index: (req, res) => {
        res.render("productoLista")
    },   
    cargaProducto : (req,res) => {
        res.render("admin/cargaProducto")
    }
}