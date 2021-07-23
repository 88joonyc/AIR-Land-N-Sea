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
