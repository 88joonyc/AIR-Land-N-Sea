// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Review extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Review.init({
//     userId: DataTypes.INTEGER,
//     toyId: DataTypes.INTEGER,
//     review: DataTypes.STRING,
//     stars: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Review',
//   });
//   return Review;
// };



"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define( "Review",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Users",
          },
        },
      },
      toyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Toys",
          },
        },
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5
        }
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
  Review.associate = function (models) {
    Review.belongsTo(models.User, {foreignKey: "userId"})
    Review.belongsTo(models.Toy, {foreignKey: "toyId"})
  };

  Review.make = async function({ userId, toyId, review, stars }) {
    const rev = await Review.create({
      userId,
      toyId,
      review,
      stars
    })

    return await Review.findByPk(rev.id)
  }

  Review.delete = async function ({reviewId}) {
    const review = Review.findByPk(reviewId);
    if (!review) throw new Error('Review does not exist!');

    await Review.destroy({
      where: {id : reviewId}
    })
    return review.id
  };


  return Review;
};
