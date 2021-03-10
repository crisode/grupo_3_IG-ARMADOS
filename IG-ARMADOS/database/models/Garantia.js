module.exports = (sequelize, dataTypes) => {

    const alias = "Garantia";

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        type : {
            type : dataTypes.STRING(200),                                          
            allowNull : true
        }
    };

    const config = {
        tableName : "guarantee",
        timestamps : true,
        underscored: true
    };

    const Garantia = sequelize.define(alias, cols, config);

    Garantia.associate = (models) => {
        Garantia.hasMany(models.Producto, {
            as : "producto",
            foreignKey : "guarantee_id"
        })
    };
};