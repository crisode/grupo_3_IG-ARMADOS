const fs = require("fs");
const {getProducts, setProducts} = require("../data/products");
const productos = getProducts();
const path = require("path");

module.exports = {
    index: (req, res) => {

        //en el main de admin enviamos todo el listado de los productos
        res.render("admin/productoLista",{
            title:"lista de productos",
            productos
        })
    },   
    cargaProducto : (req,res) => {
        res.render("admin/cargaProducto",{
            title:"Carga de producto"
        })
    },
    storeProducto: (req, res) => {
        
        //capturamos el ultimo ID
        let lastID = 1;
        productos.forEach(producto => {
            if (producto.id > lastID) {
                lastID = producto.id
            }
        });

        //capturamos lo que viene del formulario
        const {image, title, price, insale, garantia, component, mark, category, model, stock, description, features} = req.body;

        //creamos el nuevo producto
        const producto = {
            id: Number(lastID +1),
            title,
            price,
            insale,
            garantia,
            component,
            mark,
            model,
            stock,
            description,
            features,
            category,
            image: req.files[0].filename
        }

        //pushear a la base de datos de productos, el nuevo producto
        productos.push(producto);

        setProducts(productos);
        res.redirect("/admin");

    },
    detalleProducto: (req, res) => {
        
        //igualo el dato que nos viene por parametro con el ID que tenemos en nuestra base de datos de productos
        let producto = productos.find(producto => producto.id === +req.params.id);

        res.render("admin/productoDetalle", {
            title:"Detalle",
            producto
        });

    },
    editarProducto: (req, res) => {
        
        //igualo el dato que nos viene por parametro con el ID que tenemos en nuestra base de datos de productos
        const producto = productos.find(producto => producto.id === +req.params.id);

        res.render("admin/editarProducto.ejs", {
            title:"edicion",
            producto
        })

    },
    actualizarProducto: (req, res) => {
        
        //capturamos lo que viene del formulario
        const {image, title, price, insale, garantia, component, mark, category, model, stock, description, features} = req.body;

        //actualizamos el nuevo producto

        productos.forEach(producto => {
            if(producto.id === +req.params.id){
                producto.title = title
                producto.price = price
                producto.insale = insale
                producto.garantia = garantia
                producto.component = component
                producto.mark = mark
                producto.model = model
                producto.stock = stock
                producto.description = description
                producto.features = features
                producto.category = category
                producto.image = req.files[0].filename
            }
        });
        
        setProducts(productos);
        res.redirect("/admin");

    },
    borrarProducto: (req, res) => {
        
        productos.forEach(producto => {
            if (producto.id === +req.params.id) {
                
                if (fs.existsSync(path.join("public", "images", producto.image))) {
                    fs.unlinkSync(path.join("public", "images", producto.image))
                }

                let aEliminar = productos.indexOf(producto);
                productos.splice(aEliminar, 1)
            }
        });

        setProducts(productos);
        res.redirect("/admin")
    }
}