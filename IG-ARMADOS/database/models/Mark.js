module.exports = (sequelize, dataTypes) => {


    const alias = "Marks";

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
        tableName: "marks",  /* Nombre de la tabla */
        timestamps: false,    /* Marca de tiempo */
        underscored: true    /* como esta escrito */

    };


    const Mark = sequelize.define(alias, cols, config)

    Mark.associate = (models) => {
        Mark.belongsTo(models.Products, {
            as : "producto",
            foreignKey : "mark_id"
        })
    };


    

    return Mark
}