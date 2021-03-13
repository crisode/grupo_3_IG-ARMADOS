module.exports = (sequelize, dataTypes) => {

    const alias = "Rol";

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(45),                                          
            allowNull : false
        }
    };

    const config = {
        tableName : "roles",
        timestamps : true,
        underscored: true,
        classMethods : {
            associate : function(models){
                Rol.hasMany(models.Usuario,{
                    as : 'usuario',
                    foreignKey : "FK_ROL_ID"
                    
                })
            }
        }
    };

    const Rol = sequelize.define(alias, cols, config);
/*
    Rol.associate = (models) => {
        Rol.hasMany(models.User, {
            as : "usuario",
            foreignKey : "FK_ROL_ID"
        })


    };*/

    return Rol
};