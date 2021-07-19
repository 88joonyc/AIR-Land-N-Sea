'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
     await queryInterface.bulkInsert('Images', [
      { toyId: 1 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/DWWemVoMSTulmgNwtPWAfQ.1440x700.jpg' },
      { toyId: 1 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/3XYFdtROSouwrfGWD61qcw.1440x700.jpg' },
      { toyId: 1 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/V1FHA3cWSM2OsKWu__ZSOQ.1440x700.jpg' },
      { toyId: 1 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/jynOsHwjQr-4xW8i46pbRQ.1440x700.jpg' },
      { toyId: 1 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/BBocpqzNQWSKQs2eiCebBg.1440x700.jpg' },
      { toyId: 1 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/F0wh3XIERkaWx4Ny6oLXsA.1440x700.jpg' },
      { toyId: 1 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/qooFXelUQgGeucC5VJ4KRg.1440x700.jpg' },
      { toyId: 1 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/Boty7gcXQeiRj_W-KRxqKA.1440x700.jpg' },
      { toyId: 2 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/sMxIVMPlTPCh9U8UC_KVGQ.1440x700.jpg' },
      { toyId: 2 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/cMd7qvMMTE2UJug1T5kqYA.1440x700.jpg' },
      { toyId: 2 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/ACKZySPZQsukPrg5fglYXw.1440x700.jpg' },
      { toyId: 2 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/gkDvFb32Sy2jeTjiWHUgWw.1440x700.jpg' },
      { toyId: 2 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/qn6rzf42SGKPIwSRS5-prQ.1440x700.jpg' },
      { toyId: 2 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/GdvcqyKrT9yZRJvtTZP6Bg.1440x700.jpg' },
      { toyId: 3 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/Fsu6Ad3jQw-SeWGo3wfn7A.1440x700.jpg' },
      { toyId: 3 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/smOcHVpPRYuwjTCmis4Qcw.1440x700.jpg' },
      { toyId: 3 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/5rmaQrY5TZ--ln1w6xoBPw.1440x700.jpg' },
      { toyId: 3 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/fpWU4AbTTVmjsw9-TJDChQ.1440x700.jpg' },
      { toyId: 3 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/SOTv3pBYT7e-ayJGIA0UGw.1440x700.jpg' },
      { toyId: 3 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/n71hnuUYQKakWDkaHIWmzA.1440x700.jpg' },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('Images', null, {});
  }
};
