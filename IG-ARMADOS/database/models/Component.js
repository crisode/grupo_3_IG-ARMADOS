module.exports = (sequelize, dataTypes) => {

    const alias = "Components";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        }

    };

    const config = {
        tableName: "components",  /* Nombre de la tabla */
        timestamps: false,         /* Marca de tiempo */
        underscored: true         /* como esta escrito */

    };


    const Component = sequelize.define(alias, cols, config)



    Component.associate = (models) => {
        Component.belongsTo(models.Products, {
            as : "producto",
            foreignKey : "component_id"
        })
    };

    
    return Component
}