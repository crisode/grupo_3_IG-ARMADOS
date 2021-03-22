//procesamiento de archivos subidos al servidor
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null, 'public/images/productos')
    },
    filename : (req,file,cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage : storage,
    fileFilter : (req,file, cb) => {
        /*
        req: parametro request
        file: archivo enviado en el formulario
        cb: multer.fileFilterCallback(error,acceptFile), error recibe null o new Error y acceptFile recibe un boolean
        */ 

        //file.mimetype revisa la extension del documento
        if(file.mimetype == "image/jpg" || file.mimetype == "image/png" || file.mimetype == "image/jpeg"){
            return cb(null, true);
        }else {
            return cb(new Error('Solo se permiten los formatos .jpg, .png y .jpeg'))
        }
    }

})

module.exports = upload;