const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Products', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        description: {
            type : Sequelize.STRING(150),
            allowNull : false,
        },
        salePrice:{
            type : Sequelize.INTEGER,
            allowNull : false,
        },status:{
            type : Sequelize.INTEGER,
            allowNull : false
        },
        fkSubGroup:{
            type:Sequelize.INTEGER,
            allowNull:false
        },fkGroup:{
            type:Sequelize.INTEGER,
            allowNull:false
        },fkCollection:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    })
}