module.exports = (sequelize,dataTypes) => {
    const alias = 'Carrito';

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        user_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        product_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        }

    }

    const config = {
        tableName : 'cart',
        timesTamp : true  
    }

    const Carrito = sequelize.define(alias,cols,config);

    Carrito.associate = function(models){
        Carrito.hasMany(models.Producto,{
            as : 'producto',
            foreignKey : 'FK_PRODUCT_ID'
        })
    }

    Carrito.associate = function(models){
        Carrito.hasMany(models.Usuario,{
            as : 'usuario',
            foreignKey : 'FK_USER_ID'
        })
    }






    return Carrito;

}