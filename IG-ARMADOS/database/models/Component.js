module.exports = (sequelize, dataTypes) => {

    const alias = "Componente";

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
        timestamps: true,         /* Marca de tiempo */
        underscored: true         /* como esta escrito */

    };


    const Component = sequelize.define(alias, cols, config)



    Component.associate = (models) => {
        Component.belongsTo(models.Producto, {
            as : "producto",
            foreignKey : "FK_COMPONENT_ID"
        })
    };

    
    return Component
}