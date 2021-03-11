module.exports = (sequelize,dataTypes) => {

    const alias = 'Producto';

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        price : {
            type : dataTypes.DECIMAL,
            allowNull : false
        },
        insale : {
            type : dataTypes.SMALLINT
        },
        stock : {
            type : dataTypes.SMALLINT,
            allowNull : false
        },
        description : {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        features : {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        guarantee_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        mark_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        component_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        category_id : {
            type : dataTypes.INTEGER,
            allowNull : false
        },
        image : {
            type : dataTypes.INTEGER,
            allowNull : false
        }
    },

    const config = {
        tableName : 'products',
        timesTamps : true,
        underscored: true  
    }




    const Producto = sequelize.define(alias,cols,config)

    Producto.associate = function(models){
        Producto.belongsTo(models.Carrito,{
            as : 'carrito',
            foreignKey : 'FK_PRODUCT_ID'
        })

        Producto.belongsTo(models.Categoria,{
            as : 'categoria',
            foreignKey : 'FK_CATEGORY_ID'
        })

        Producto.belongsTo(models.Componente,{
            as : 'componente',
            foreignKey : 'FK_COMPONENT_ID'
        })

        Producto.belongsTo(models.Marca,{
            as : 'marca',
            foreignKey : 'FK_MARK_ID'
        })

        Producto.hasMany(models.Imagen,{
            as : 'imagen',
            foreignKey : 'FK_IMAGE_ID'
        })

        Producto.belongsTo(models.Garantia,{
            as : 'garantia',
            foreignKey : 'FK_GUARANTEE_ID'
        })
                
    }

    return Producto
}