// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Booking extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Booking.init({
//     toyId: DataTypes.INTEGER,
//     userId: DataTypes.INTEGER,
//     startDate: DataTypes.DATE,
//     endDate: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'Booking',
//   });
//   return Booking;
// };



"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define( "Booking",
    {
      toyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Toys",
          },
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Users",
          },
        },
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {}
  );
  Booking.associate = function (models) {
    Booking.belongsTo(models.User, {foreignKey: "userId"})
    Booking.belongsTo(models.Toy, {foreignKey: "toyId"})
  };

  Booking.book = async function({ toyId, userId, startDate, endDate }) {
    const booking = await Booking.create({
      toyId,
      userId,
      startDate,
      endDate
    })

    return await Booking.findByPk(booking.id)
  }

  Booking.delete = async function ({bookingId}) {
    const booking = Booking.findByPk(bookingId);
    if (!booking) throw new Error('Booking does not exist!');

    await Booking.destroy({
      where: {id : bookingId}
    })
    return booking.id
  };


  return Booking;
};
