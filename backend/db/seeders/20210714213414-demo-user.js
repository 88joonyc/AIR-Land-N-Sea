'use strict';

const faker = require('faker');
const bcrypt = require('bcryptjs');
const user = require('../models/user');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'demo',
        lastName: 'user',
        email: 'demo@user.io',
        username: 'Demo',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'demo2',
        lastName: 'user2',
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: 'demo3',
        lastName: 'user3',
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: 'demo4',
        lastName: 'user4',
        email: faker.internet.email(),
        username: 'FakeUser3',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: 'demo5',
        lastName: 'user5',
        email: faker.internet.email(),
        username: 'FakeUser4',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Users', null, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
     });
  }
};
