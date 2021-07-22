// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Toy extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       Toy.belongsTo(models.User, {foreignKey: "userId"})
//     }
//   };
//   Toy.init({
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//         references: {
//           model: "Users",
//         },
//     },
//     description: {
//       type: DataTypes.STRING,
//     },
//     year: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     make: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     model: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     type: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     level: {
//       type: DataTypes.integer,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.integer,
//       allowNull: false,
//     },
//   }, {
//     sequelize,
//     modelName: 'Toy',
//   });
//   return Toy;
// };

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Toy = sequelize.define('Toy', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
        references: {
          model: {
            tableName: "Toys",
          },
        },
    },
    description: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
        validate: {
        min: 0,
        max: 5
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    scopes: {
      currentToy: {
        attributes: {},
      },
    },
  });
  Toy.associate = function(models) {
    Toy.belongsTo(models.User, {foreignKey: "userId"})
    Toy.hasMany(models.Image, {foreignKey: 'toyId'})
    // Toy.hasMany(models.Review, {foreignKey: "toyId"})
  };

  // Toy.getCurrentToyById = async function(id) {
  //   return await Toy.scope('currentToy').findByPk(id)
  // }

  Toy.make = async function({ userId, description, year, make, model, type, level, price }) {
    const toy = await Toy.create({
      userId,
      description,
      year,
      make,
      model,
      type,
      level,
      price,
    });
    return await Toy.findByPk(toy.id)
  };

  // Toy.update = async function (details) {
  //   const toy = details.id
  //   delete details.id
  //   await Toy.update(details, {
  //     where: { toy },
  //     returning: true,
  //     plain
  //   })

  //   return await Toy.findByPk(toy)
  // }


  Toy.delete = async function ({toyId}) {
    const toy = Toy.findByPk(toyId);
    if (!toy) throw new Error('This toy does not exist!');

    await Toy.destroy({
      where: {id : toyId}
    })
    return toy.id
  };

  return Toy;
};
