module.exports = (sequelize, dataTypes) => {


    const alias = "Marca";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        }

    };

    const config = {
        tableName: "Marks",  /* Nombre de la tabla */
        timestamps: true,    /* Marca de tiempo */
        underscored: true    /* como esta escrito */

    };


    const Mark = sequelize.define(alias, cols, config)

    Mark.associate = (models) => {
        Mark.belongsTo(models.Producto, {
            as : "producto",
            foreignKey : "FK_MARK_ID"
        })
    };


    

    return Mark
}