module.exports = (sequelize, dataTypes) => {


    const alias = "Images";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey : true
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        }, 
        product_id:{
            type:dataTypes.INTEGER,
            allowNull:false
        }

    };

    const config = {
        tableName: "images",  /* Nombre de la tabla */
        timestamps: false,     /* Marca de tiempo */
        underscored: true     /* como esta escrito */

    };

    const Image = sequelize.define(alias, cols, config)

    Image.associate = (models) => {
        Image.belongsTo(models.Products, {
            as : "producto",
            foreignKey : "product_id"
        })
    };

    
    return Image
}