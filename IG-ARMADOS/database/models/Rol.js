module.exports = (sequelize, dataTypes) => {

    const alias = "Rols";

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
        timestamps : false,
        underscored: true,
        /* classMethods : {
            associate : function(models){
                Rol.hasMany(models.Usuario,{
                    as : 'usuario',
                    foreignKey : "rol_id"
                    
                })
            }
        } */
    };

    const Rol = sequelize.define(alias, cols, config);

    Rol.associate = (models) => {
        Rol.hasMany(models.Users, {
            as : "usuario",
            foreignKey : "rol_id"
        })


    };

    return Rol
};