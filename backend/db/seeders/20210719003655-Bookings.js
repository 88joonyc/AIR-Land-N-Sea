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
        toyId: 1,
        userId: 1,
        startDate: '2021-07-19T00:39:18.469Z',
        endDate: '2021-09-19T00:39:18.469Z',
      },
      {
        toyId: 2,
        userId: 2,
        startDate: '2021-08-01T00:39:18.469Z',
        endDate: '2021-06-15T00:39:18.469Z',
      },
      {
        toyId: 3,
        userId: 3,
        startDate: '2021-07-19T00:39:18.469Z',
        endDate: '2021-12-21T00:39:18.469Z',
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

Booking.book = async function({ toyId, userId, startDate, endDate }) {
  const booking = await Booking.create({
    toyId,
    userId,
    startDate,
    endDate
  })
}
