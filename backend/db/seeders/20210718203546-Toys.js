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
        make: 'BMW',
        model: 'i8',
        type: 'Sports Car',
        level: 2,
        price: 154,
      },
      {
        userId: 2,
        description: 'Package Grand Sport standard performance equipment Specific front fender inserts, Z06-style grille and wider rear fenders Front splitter, rockers and wicker bill rear spoiler Specific Grand Sport cup-style wheels Michelin® Pilot® Super Sport summer-only tires 6-piston 14.6" (371 mm) front and 4-piston 14.4" (366 mm) rear Brembo® brakes Magnetic Selective Ride Control™ and electronic Limited Slip Differential (eLSD) Safety-Interior Rear Vision Camera When in Reverse, provides the driver of a view of the scene directly behind the vehicle on the Infotainment screen to help the driver park and avoid nearby objects during low-speed maneuvering Airbag system Frontal airbags work with the seat belt system to help reduce the risk of injury to the driver and passenger if involved in a moderate to severe frontal impact Seat-mounted side-impact driver and passenger airbags help reduce the risk of injuries for the driver and seat passenger in side impacts Passenger Sensing System automatically switches the passenger seat frontal airbag (and knee airbag, when equipped) on or off',
        year: 2019,
        make: 'Nissan',
        model: 'Skyline',
        type: 'Sports Car',
        level: 4,
        price: 111,
      },
      {
        userId: 3,
        description: 'Package Grand Sport standard performance equipment Specific front fender inserts, Z06-style grille and wider rear fenders Front splitter, rockers and wicker bill rear spoiler Specific Grand Sport cup-style wheels Michelin® Pilot® Super Sport summer-only tires 6-piston 14.6" (371 mm) front and 4-piston 14.4" (366 mm) rear Brembo® brakes Magnetic Selective Ride Control™ and electronic Limited Slip Differential (eLSD) Safety-Interior Rear Vision Camera When in Reverse, provides the driver of a view of the scene directly behind the vehicle on the Infotainment screen to help the driver park and avoid nearby objects during low-speed maneuvering Airbag system Frontal airbags work with the seat belt system to help reduce the risk of injury to the driver and passenger if involved in a moderate to severe frontal impact Seat-mounted side-impact driver and passenger airbags help reduce the risk of injuries for the driver and seat passenger in side impacts Passenger Sensing System automatically switches the passenger seat frontal airbag (and knee airbag, when equipped) on or off',
        year: 2019,
        make: 'Chevrolet',
        model: 'Corvette',
        type: 'Sports Car',
        level: 4,
        price: 351,
      },
      {
        userId: 4,
        description: 'Package Grand Sport standard performance equipment Specific front fender inserts, Z06-style grille and wider rear fenders Front splitter, rockers and wicker bill rear spoiler Specific Grand Sport cup-style wheels Michelin® Pilot® Super Sport summer-only tires 6-piston 14.6" (371 mm) front and 4-piston 14.4" (366 mm) rear Brembo® brakes Magnetic Selective Ride Control™ and electronic Limited Slip Differential (eLSD) Safety-Interior Rear Vision Camera When in Reverse, provides the driver of a view of the scene directly behind the vehicle on the Infotainment screen to help the driver park and avoid nearby objects during low-speed maneuvering Airbag system Frontal airbags work with the seat belt system to help reduce the risk of injury to the driver and passenger if involved in a moderate to severe frontal impact Seat-mounted side-impact driver and passenger airbags help reduce the risk of injuries for the driver and seat passenger in side impacts Passenger Sensing System automatically switches the passenger seat frontal airbag (and knee airbag, when equipped) on or off',
        year: 2015,
        make: 'Audi',
        model: 'r8',
        type: 'Sports Car',
        level: 4,
        price: 299,
      },
      {
        userId: 5,
        description: 'Great Beginner Bike ‘New school’ gets a new contender with the entry lightweight Kawasaki Z400 ABS motorcycle. A fiercely authentic supernaked, the Z400 ABS exudes fresh street style and is immediately recognizable in a crowd with its compact chassis and aggressive styling. Comfortable, balanced and capable, the new Z400 ABS offers a visceral riding experience that’s sure to turn heads.',
        year: 2015,
        make: 'Kawasaki',
        model: 'Ninja',
        type: 'Motorcycle',
        level: 4,
        price: 40,
      },
      {
        userId: 1,
        description: 'Mercedes-Benz G-Class delivers a Twin Turbo Premium Unleaded V-8 5.5 L/333 engine powering this Automatic transmission. Wheels: 20" AMG 5-Twin-Spoke Alloy, Valet Function, Trip computer.* This Mercedes-Benz G-Class Features the Following Options *Transmission: AMG SPEEDSHIFT PLUS 7G-TRONIC Auto, Transmission w/Driver Selectable Mode and TouchShift Sequential Shift Control w/Steering Wheel Controls, Trailing Link Rear Suspension w/Coil Springs, Tracker System, Towing Equipment -inc: Trailer Sway Control, Tires: P275/50R20 Performance, Tire Specific Low Tire Pressure Warning, Tailgate/Rear Door Lock Included w/Power Door Locks, Sport Heated Leather/Metal-Look Steering Wheel w/Auto Tilt-Away, Smart Device Integration.*',
        year: 2016,
        make: 'Mercedes-Benz',
        model: 'G-class',
        type: 'Sports Car',
        level: 2,
        price: 288,
      },
      {
        userId: 7,
        description: "The SC 46 has set a new standard for performance catamarans with its state of the art styling combined with its unsurpassed speed and handling. the SC 46 looks like nothing else. Sharp edgy contoured lines capture your eye in this sleek modern Cat. Available in full canopy or open top versions and optional Carbon Fiber Lamination, the SC 46 is built to withstand it all. Powered by Mercury Racing 1350s, propel the SC 46 to speeds greater than 170mph. and it handles it with ease. The carbon fiber dash, designed with modern simplicity in mind, boasts three flat screen Garmins and no gauges taking advantage of today's technology. The Cockpit, with 6 sit down bucket seats, keep passengers safe and secure. Optional Alcantara wrapped seats enhance the cockpit's richness and style. the SC 46 turns on a dime and handles rough water impeccable, which is why the SC 46 is the future of catamaran boating.",
        year: 2016,
        make: 'Outerlimits',
        model: 'SC-46',
        type: 'Speed boat',
        level: 5,
        price: 28800,
      },
      {
        userId: 7,
        description: "The SC 46 has set a new standard for performance catamarans with its state of the art styling combined with its unsurpassed speed and handling. the SC 46 looks like nothing else. Sharp edgy contoured lines capture your eye in this sleek modern Cat. Available in full canopy or open top versions and optional Carbon Fiber Lamination, the SC 46 is built to withstand it all. Powered by Mercury Racing 1350s, propel the SC 46 to speeds greater than 170mph. and it handles it with ease. The carbon fiber dash, designed with modern simplicity in mind, boasts three flat screen Garmins and no gauges taking advantage of today's technology. The Cockpit, with 6 sit down bucket seats, keep passengers safe and secure. Optional Alcantara wrapped seats enhance the cockpit's richness and style. the SC 46 turns on a dime and handles rough water impeccable, which is why the SC 46 is the future of catamaran boating.",
        year: 2022,
        make: 'Bezos',
        model: 'XR-261-c2r',
        type: 'Rocket',
        level: 5,
        price: 288000043,
      },
      {
        userId: 3,
        description: "The Polaris Slingshot is a 2-seat, 3-wheel wonder. It's classified as a motorcycle, but it's not. It's a 4-cylinder, 5-speed trike with 176 horsepower. It casts a unique design on the roads!! It is a unique, exciting, and eye catching toy in which you can be in today! Enjoy the fast, yet comfortable ride! The Polaris Slingshot weighs 1,725 pounds. It's a minimalist approach to transportation for anyone who wants to try something new and exciting. It defines fun on the road.",
        year: 2016,
        make: 'Polaris',
        model: 'Slingshot',
        type: '2-Seater',
        level: 3,
        price: 98,
      },
      {
        userId: 1,
        description: "The Polaris Slingshot is a 2-seat, 3-wheel wonder. It's classified as a motorcycle, but it's not. It's a 4-cylinder, 5-speed trike with 176 horsepower. It casts a unique design on the roads!! It is a unique, exciting, and eye catching toy in which you can be in today! Enjoy the fast, yet comfortable ride! The Polaris Slingshot weighs 1,725 pounds. It's a minimalist approach to transportation for anyone who wants to try something new and exciting. It defines fun on the road.",
        year: 1971,
        make: 'Honda',
        model: 'CB 350',
        type: 'Esspresso Racer',
        level: 3,
        price: 119,
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
