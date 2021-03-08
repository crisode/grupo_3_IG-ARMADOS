module.exports = (sequelize, dataTypes) => {


    const alias = "Marca";

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED.UNSIGNED,
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
        tableName: "Marks",  /* Nombre de la tabla */
        timestamps: true,    /* Marca de tiempo */
        underscored: true    /* como esta escrito */

    };

    const Mark = sequelize.define(alias, cols, config)

    return Mark
}