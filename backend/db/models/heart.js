'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Heart = sequelize.define("Heart", {
      toyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Toy'
          },
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Users'
        }
      }
    }
  })
  Heart.associate = function (models) {
    Heart.belongsTo(models.Toy, {foreignKey: 'toyId'})
    Heart.belongsTo(models.User, {foreignKey: 'userId'})
  }


  return Heart;
}
