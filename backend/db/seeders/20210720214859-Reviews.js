'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        toyId: 2,
        review: 'The pickup developed the diesel glass body. Once the stake bed trucked the service utility van? The diesel rig was accelerated by the biodiesel? The mobility deconstructed the four wheel drive passenger wagon. The 4x4, galvanized wrecker body dumped!',
        stars: 3
      },
      {
        userId: 2,
        toyId: 3,
        review: 'Once the tailboard accelerated the Savana 2500 when the lifted motor vehicle was accelerated by the combo body. Once the motor vehicle upfitted the axle. The tough, 4x4 stabilizer bar developed but once the FTR trucked the GVWR. The vocational, upfitted LCF 5500XD braked. Once the dovetail landscape drove the truck stop. The van manufactured the aluminum vehicle but the bio-fuel 4x4 was manufactured by the cylinder. The welder body totaled the durable F-450 and the wheelbase deconstructed the work-ready empty cargo van.',
        stars: 2
      },
      {
        userId: 3,
        toyId: 1,
        review: 'Once the fire truck totaled the Detroit. The bio-fuel, durable mobility crashed. The durable, aluminum body deconstructed. Once the passenger wagon fixed the welder body. The shock-resistant, shock-resistant automobile trucked?',
        stars: 5
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Reviews', null, {});
  }
};
