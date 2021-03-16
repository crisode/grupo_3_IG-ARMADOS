module.exports = (sequelize, dataTypes) => {

    const alias = 'Products';

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
        model:{
            type: dataTypes.STRING(100),
            allowNull:false
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
        }
        
    }

    const config = {
        tableName : "products",
        timestamps : false,
        underscored: true
    };




    const Product = sequelize.define(alias,cols,config)

    Product.associate = (models)=>{
        Product.belongsToMany(models.Users,{
            as : 'productos',
            through : "cart",
            foreignKey : 'product_id',
            otherKey : "user_id"
        })

        Product.belongsTo(models.Categorys,{
            as : 'categoria',
            foreignKey : 'category_id'
        })

        Product.belongsTo(models.Components,{
            as : 'componente',
            foreignKey : 'component_id'
        })

        Product.belongsTo(models.Marks,{
            as : 'marca',
            foreignKey : 'mark_id'
        })

        Product.hasMany(models.Images,{
            as : 'imagenes',
            foreignKey : 'product_id'
        })

        Product.belongsTo(models.Guarantees,{
            as : 'garantia',
            foreignKey : 'guarantee_id'
        })
                
    }

    return Product
}