module.exports = (sequelize, dataTypes) => {


    const alias = "Imagen";

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
        }

    };

    const config = {
        tableName: "Images",  /* Nombre de la tabla */
        timestamps: true,     /* Marca de tiempo */
        underscored: true     /* como esta escrito */

    };

    const Image = sequelize.define(alias, cols, config)

    Image.associate = (models) => {
        Image.belongsTo(models.Producto, {
            as : "producto",
            foreignKey : "FK_IMAGE_ID"
        })
    };

    
    return Image
}