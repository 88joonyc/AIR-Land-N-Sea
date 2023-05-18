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
        firstName: 'Jphn',
        lastName: 'Doe',
        email: 'demo@user.io',
        username: 'Demo',
        picture: "https://st2.depositphotos.com/1006318/5909/v/600/depositphotos_59094701-stock-illustration-businessman-profile-icon.jpg",
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Larney',
        lastName: 'Hunter',
        email: faker.internet.email(),
        username: 'Demo2',
        picture: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70",
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Boxname',
        lastName: 'Breifs',
        email: faker.internet.email(),
        username: 'Demo3',
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUlS3GCOdYAk0kRZ-9Z7jy1WS8tzCLcyGZ82ZBtGylPA-Lz3v7dbuJpPDQyFZWIBp0tc&usqp=CAU",
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        firstName: 'Jobbler',
        lastName: 'Cartmam',
        email: faker.internet.email(),
        username: 'FakeUser3',
        picture: "https://images.squarespace-cdn.com/content/v1/5070f2f8c4aa65eb3b6394d0/1436318768958-ULREN0B0NTGY4OK5ABAN/LYB+People+Profile+%2810%29.jpg?format=1000w",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: 'Tiffany',
        lastName: 'Alabama',
        email: faker.internet.email(),
        username: 'FakeUser4',
        picture: "https://images.squarespace-cdn.com/content/v1/5070f2f8c4aa65eb3b6394d0/1436318761703-SUWVQ0QPHE569A8FNBHH/LYB+People+Profile+%2808%29.jpg?format=1000w",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: 'Darnkit',
        lastName: 'Broxnier',
        email: faker.internet.email(),
        username: 'FakeUser5',
        picture: "https://images.squarespace-cdn.com/content/v1/5070f2f8c4aa65eb3b6394d0/1436318746666-GXLI2HOP5833WWXLN7JX/LYB+People+Profile+%2802%29.jpg?format=1000w",
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        firstName: 'Hallenfat',
        lastName: 'Chou',
        email: faker.internet.email(),
        username: 'FakeUser6',
        picture: "https://images.squarespace-cdn.com/content/v1/5070f2f8c4aa65eb3b6394d0/1436318751363-4P9DI071NDKK5PKLX4JL/LYB+People+Profile+%2805%29.jpg?format=1000w",
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
