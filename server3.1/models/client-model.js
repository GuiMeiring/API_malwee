const { Sequelize } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('Clients', {
        id : {
            type : Sequelize.INTEGER.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            allowNull : false
        },
        name:{
            type : Sequelize.STRING(150),
            allowNull : false,
        },
        cnpj:{
            type : Sequelize.STRING(14),
            allowNull: false,
        },
        razaoSocial:{
            type: Sequelize.STRING(150),
            allowNull : false, 
        },
        dateClient:{
            type: Sequelize.STRING(150),
            allowNull: false,
        },
        status:{
            type : Sequelize.INTEGER,
            allowNull : false
        }
    })
}