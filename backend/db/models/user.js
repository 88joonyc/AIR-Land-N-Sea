'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs')

const unknownImage = 'https://cdn.landesa.org/wp-content/uploads/default-user-image.png'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    picture: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: unknownImage,

    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });
  User.associate = function(models) {
    User.hasMany(models.Toy, {foreignKey: 'userId'})
    User.hasMany(models.Booking, {foreignKey: 'userId'})
    User.hasMany(models.Review, {foreignKey: 'userId'})
  };

  User.prototype.toSafeObject = function() {
    const { id, firstName, lastName, username, email, picture } = this;
    return { id, firstName, lastName, username, email, picture }
  }

  User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };

  User.getCurrentUserById = async function(id) {
    return await User.scope('currentUser').findByPk(id)
  }

  User.login = async function({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          username: credential,
          email: credential,
        }
      }
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function({ firstName, lastName, email, username, password }) {
    const hashedPassword = bcrypt.hashSync(password)
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id)
  };
  return User;
};
