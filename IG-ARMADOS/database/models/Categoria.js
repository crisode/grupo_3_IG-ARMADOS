module.exports = (sequelize,dataTypes) => {
    const alias = 'Categoria';

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        }

    }

    const config = {
        tableName : 'categories',
        timesTamp : true  
    }

    const Categoria = sequelize.define(alias,cols,config);

    Categoria.associate = function(models){
        Carrito.hasMany(models.Producto,{
            as : 'producto',
            foreignKey : 'FK_CATEGORY_ID'
        })
    }

    
    return Categoria;

}