module.exports = (sequelize,dataTypes) => {
    const alias = 'Categorys';

    const cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull : false,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        }

    }

    const config = {
        tableName : 'categories',
        timesTamp : false,
        underscored: true 
    }

    const Category = sequelize.define(alias,cols,config);

    Category.associate = (models)=>{
        Category.hasMany(models.Products,{
            as : 'producto',
            foreignKey : 'category_id'
        })
    }

    
    return Category;

}