module.exports = (sequelize,dataTypes) => {
    const alias = 'Carts';

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
        timesTamp : false,
        underscored: true,
        
    }

    const Cart = sequelize.define(alias,cols,config);

    Cart.associate = (models)=>{
        Cart.belongsTo(models.Users,{
            as : 'User',
            foreignKey : 'user_id'
            
        })

        Cart.belongsTo(models.Products,{
            as : 'Product',
            foreignKey : 'product_id'
        })

        
    }

    return Cart;

}