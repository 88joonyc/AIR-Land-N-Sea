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
// const { Validator } = require('sequelize');
// const bcrypt = require('bcryptjs')

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
  };

//   // User.prototype.toSafeObject = function() {
//   //   const { id, username, email } = this;
//   //   return { id, username, email }
//   // }

//   // Toy.prototype.validatePassword = function(password) {
//   //   return bcrypt.compareSync(password, this.hashedPassword.toString());
//   // };

  Toy.getCurrentToyById = async function(id) {
    return await Toy.scope('currentToy').findByPk(id)
  }

//   // User.login = async function({ credential, password }) {
//   //   const { Op } = require('sequelize');
//   //   const user = await User.scope('loginUser').findOne({
//   //     where: {
//   //       [Op.or]: {
//   //         username: credential,
//   //         email: credential,
//   //       }
//   //     }
//   //   });
//   //   if (user && user.validatePassword(password)) {
//   //     return await User.scope('currentUser').findByPk(user.id);
//   //   }
//   // };

  Toy.create = async function({ userId, description, year, make, model, type, level, price }) {
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
    return await Toy.scope('currentToy').findByPk(toy.id)
  };

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
