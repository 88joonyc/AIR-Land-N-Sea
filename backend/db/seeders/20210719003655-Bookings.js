'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('Bookings', [
      {
        toyId: 2,
        userId: 1,
        startDate: '2021-07-19T00:39:18.469Z',
        endDate: '2021-07-21T00:39:18.469Z',
      },
      {
        toyId: 3,
        userId: 2,
        startDate: '2021-08-01T00:39:18.469Z',
        endDate: '2021-08-03T00:39:18.469Z',
      },
      {
        toyId: 4,
        userId: 3,
        startDate: '2021-01-22T00:39:18.469Z',
        endDate: '2021-02-21T00:39:18.469Z',
      },
      {
        toyId: 5,
        userId: 4,
        startDate: '2021-06-01T00:39:18.469Z',
        endDate: '2021-06-04T00:39:18.469Z',
      },
      {
        toyId: 6,
        userId: 5,
        startDate: '2021-12-15T00:39:18.469Z',
        endDate: '2021-12-21T00:39:18.469Z',
      },
      {
        toyId: 1,
        userId: 3,
        startDate: '2021-03-23T00:39:18.469Z',
        endDate: '2021-03-24T00:39:18.469Z',
      },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Bookings', null, {});
  }
};
