'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
      await queryInterface.bulkInsert('Toys', [
      {
        userId: 1,
        description: 'Package Grand Sport standard performance equipment Specific front fender inserts, Z06-style grille and wider rear fenders Front splitter, rockers and wicker bill rear spoiler Specific Grand Sport cup-style wheels Michelin® Pilot® Super Sport summer-only tires 6-piston 14.6" (371 mm) front and 4-piston 14.4" (366 mm) rear Brembo® brakes Magnetic Selective Ride Control™ and electronic Limited Slip Differential (eLSD) Safety-Interior Rear Vision Camera When in Reverse, provides the driver of a view of the scene directly behind the vehicle on the Infotainment screen to help the driver park and avoid nearby objects during low-speed maneuvering Airbag system Frontal airbags work with the seat belt system to help reduce the risk of injury to the driver and passenger if involved in a moderate to severe frontal impact Seat-mounted side-impact driver and passenger airbags help reduce the risk of injuries for the driver and seat passenger in side impacts Passenger Sensing System automatically switches the passenger seat frontal airbag (and knee airbag, when equipped) on or off',
        year: 2019,
        make: 'Chevrolet',
        model: 'Corvette',
        type: 'Sports Car',
        level: 4,
        price: 150,
      },
      {
        userId: 2,
        description: 'Package Grand Sport standard performance equipment Specific front fender inserts, Z06-style grille and wider rear fenders Front splitter, rockers and wicker bill rear spoiler Specific Grand Sport cup-style wheels Michelin® Pilot® Super Sport summer-only tires 6-piston 14.6" (371 mm) front and 4-piston 14.4" (366 mm) rear Brembo® brakes Magnetic Selective Ride Control™ and electronic Limited Slip Differential (eLSD) Safety-Interior Rear Vision Camera When in Reverse, provides the driver of a view of the scene directly behind the vehicle on the Infotainment screen to help the driver park and avoid nearby objects during low-speed maneuvering Airbag system Frontal airbags work with the seat belt system to help reduce the risk of injury to the driver and passenger if involved in a moderate to severe frontal impact Seat-mounted side-impact driver and passenger airbags help reduce the risk of injuries for the driver and seat passenger in side impacts Passenger Sensing System automatically switches the passenger seat frontal airbag (and knee airbag, when equipped) on or off',
        year: 2019,
        make: 'Chevrolet',
        model: 'Corvette',
        type: 'Sports Car',
        level: 4,
        price: 170,
      },
      {
        userId: 3,
        description: 'Package Grand Sport standard performance equipment Specific front fender inserts, Z06-style grille and wider rear fenders Front splitter, rockers and wicker bill rear spoiler Specific Grand Sport cup-style wheels Michelin® Pilot® Super Sport summer-only tires 6-piston 14.6" (371 mm) front and 4-piston 14.4" (366 mm) rear Brembo® brakes Magnetic Selective Ride Control™ and electronic Limited Slip Differential (eLSD) Safety-Interior Rear Vision Camera When in Reverse, provides the driver of a view of the scene directly behind the vehicle on the Infotainment screen to help the driver park and avoid nearby objects during low-speed maneuvering Airbag system Frontal airbags work with the seat belt system to help reduce the risk of injury to the driver and passenger if involved in a moderate to severe frontal impact Seat-mounted side-impact driver and passenger airbags help reduce the risk of injuries for the driver and seat passenger in side impacts Passenger Sensing System automatically switches the passenger seat frontal airbag (and knee airbag, when equipped) on or off',
        year: 2019,
        make: 'Chevrolet',
        model: 'Corvette',
        type: 'Sports Car',
        level: 4,
        price: 350,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Toys', null, {});
  }
};
