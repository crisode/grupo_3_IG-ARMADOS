module.exports = (sequelize, dataTypes) => {

    const alias = "Componente";

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            prymaryKey: true,
            allowNull: false,
            autoIncrement: true
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
    Component.associate = (models) => {
        Component.belonsTo(models.Producto, {
            as : "producto",
            foreignKey : "component_id"
        })
    };










    const Component = sequelize.define(alias, cols, config)
    return Component
}