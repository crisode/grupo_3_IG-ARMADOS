module.exports = (sequelize, dataTypes) => {

    const alias = "Guarantees";

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
        timestamps : false,
        underscored: true
    };

    const Guarantee = sequelize.define(alias, cols, config);

    Guarantee.associate = (models) => {
        Guarantee.hasMany(models.Products, {
            as : "producto",
            foreignKey : "guarantee_id"
        })
    };

    return Guarantee
};