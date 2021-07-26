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
      { toyId: 4 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/toCEzkAdQhqU73pTfxqfyw.1440x700.jpg' },
      { toyId: 4 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/WmoP_i2jS76HLldyc07Ckw.1440x700.jpg' },
      { toyId: 4 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/-k0AmtT5QT6tgVx3MLSicQ.1440x700.jpg' },
      { toyId: 4 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/6rrVe5r8Td-QiD12UV4KLw.1440x700.jpg' },
      { toyId: 4 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/gz7N2GwAQ66AqKQvpLiyFg.1440x700.jpg' },
      { toyId: 4 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/lI28MoxdQDmhQU3-HKRr_g.1440x700.jpg' },
      { toyId: 4 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/RTQvu7WuSa-2HIJTG4fjiA.1440x700.jpg' },
      { toyId: 4 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/GjPMKcL5QRuhpW3Fjr6CZw.1440x700.jpg' },
      { toyId: 4 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/AtkXSVwtTIuE0fzcTzEFqQ.1440x700.jpg' },
      { toyId: 5 , url: 'https://ucarecdn.com/fdf91721-0ea9-4c3c-93ff-c290147f749d/-/crop/1959x1103/0,102/-/preview/-/format/auto/-/quality/smart/-/resize/488x/' },
      { toyId: 5 , url: 'https://ucarecdn.com/f3b23ac0-5c90-4fb5-9dc9-86eca3b0ecfe/-/crop/1959x1103/0,201/-/preview/-/format/auto/-/quality/smart/-/resize/488x/' },
      { toyId: 5 , url: 'https://ucarecdn.com/bdabcad1-5a86-4e04-b893-64b957490157/-/crop/1959x1103/0,182/-/preview/-/format/auto/-/quality/smart/-/resize/488x/' },
      { toyId: 5 , url: 'https://ucarecdn.com/0839642f-ddd6-468b-a734-121e63e18e1d/-/crop/1958x1102/0,204/-/preview/-/format/auto/-/quality/smart/-/resize/488x/' },
      { toyId: 5 , url: 'https://ucarecdn.com/1ac64663-5759-45c5-b8df-96b7777db354/-/crop/1959x1103/0,102/-/preview/-/format/auto/-/quality/smart/-/resize/488x/' },
      { toyId: 6 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/jOvleWeHQbqDyjAwG0wECA.1440x700.jpg' },
      { toyId: 6 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/HmRJzokYTV-1_t9HOLjnwQ.1440x700.jpg' },
      { toyId: 6 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/s88SNamsTNaVpwcEW-iumA.1440x700.jpg' },
      { toyId: 6 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/y187PA7wShiNOMydmAfEAQ.1440x700.jpg' },
      { toyId: 6 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/dAVzpihORFexymXJpomv7g.1440x700.jpg' },
      { toyId: 7 , url: 'https://images.boats.com/resize/1/60/98/7096098_20190528114059310_1_XLARGE.jpg?t=1626968581000&w=600&h=600' },
      { toyId: 7 , url: 'https://images.boats.com/resize/1/60/98/7096098_20190528114058946_1_XLARGE.jpg?t=1626968581000&w=600&h=600' },
      { toyId: 7 , url: 'https://images.boats.com/resize/1/60/98/7096098_20190528114059648_1_XLARGE.jpg?t=1626968581000&w=600&h=600' },
      { toyId: 7 , url: 'https://images.boats.com/resize/1/60/98/7096098_20190528114100098_1_XLARGE.jpg?t=1626968581000&w=600&h=600' },
      { toyId: 7 , url: 'https://images.boats.com/resize/1/60/98/7096098_20190528114100589_1_XLARGE.jpg?t=1626968581000&w=600&h=600' },
      { toyId: 7 , url: 'https://images.boats.com/resize/1/60/98/7096098_20190528114058457_1_XLARGE.jpg?t=1626968581000&w=600&h=600' },
      { toyId: 7 , url: 'https://images.boats.com/resize/1/60/98/7096098_20190528114057936_1_XLARGE.jpg?t=1626968581000&w=600&h=600' },
      { toyId: 8 , url: 'https://i.insider.com/60f8404f2a723b0011e50613?width=700' },
      { toyId: 8 , url: 'https://cms.qz.com/wp-content/uploads/2020/10/New-Shepard-Blue-Origin-Jeff-Bezos-profit-business-rocket-launch-payload.jpg?quality=75&strip=all&w=900&h=900&crop=1' },
      { toyId: 9 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/eg4oDT5hRtqLGdll31B6ig.1440x700.jpg' },
      { toyId: 9 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/tbXdW2fTR6WxZyz6dNtxqA.1440x700.jpg' },
      { toyId: 9 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/lFiv4uLqRLCxM9xeaeElWQ.1440x700.jpg' },
      { toyId: 9 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/MwsyI8LqSDWdwXr6GwqlJw.1440x700.jpg' },
      { toyId: 9 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/6TLWvcQ5Tjij62zCUDWS2Q.1440x700.jpg' },
      { toyId: 9 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/jjRmxXB7SdyBiqqQSSZSBw.1440x700.jpg' },
      { toyId: 9 , url: 'https://d1zgdcrdir5wgt.cloudfront.net/media/vehicle/images/eg4oDT5hRtqLGdll31B6ig.1440x700.jpg' },
      { toyId: 10 , url: 'https://2.bp.blogspot.com/-rUmVROJPPXg/VmqvY2CmujI/AAAAAAACM_A/oAJgOmcTFzQ/s640/foxcafe-03.jpg' },
      { toyId: 10 , url: 'https://4.bp.blogspot.com/-0Bn2v753VF0/VmqvZBknvUI/AAAAAAACM_I/qpWVAZhSccs/s640/foxcafe-04.jpg' },
      { toyId: 10 , url: 'https://3.bp.blogspot.com/-yQI1RrbgLDE/VmqvZWdj0SI/AAAAAAACM_M/jkvJJZYFqTc/s640/foxcafe-05.jpg' },
      { toyId: 10 , url: 'https://2.bp.blogspot.com/-bpZ6DofNmmg/VmqvZsedT2I/AAAAAAACM_Q/FYd8t7BFiZQ/s640/foxcafe-06.jpg' },
      { toyId: 10 , url: 'https://2.bp.blogspot.com/-1-JSFo52M0M/Vmqvac3INqI/AAAAAAACM_k/wJ0prFcAZh8/s640/foxcafe-07.jpg' },
      { toyId: 10 , url: 'https://2.bp.blogspot.com/-v7wAmludHX8/VmqvaU8x3oI/AAAAAAACM_o/u_8RK9_kMuI/s640/foxcafe-08.jpg' },
      { toyId: 10 , url: 'https://3.bp.blogspot.com/-fU1ZV5KKL40/Vmqva6O3XcI/AAAAAAACM_s/RNqH3pCMdDo/s640/foxcafe-09.jpg' },
      { toyId: 10 , url: 'https://4.bp.blogspot.com/-W3UOubeBT44/VmqvbA2C8_I/AAAAAAACM_0/7U-8ro-ZWXM/s640/foxcafe-10.jpg' },
      { toyId: 10 , url: 'https://1.bp.blogspot.com/-IcXhMOXaSow/VmqvbgO0WrI/AAAAAAACM_8/qf_LK3LRHWM/s640/foxcafe-12.jpg' },
      { toyId: 10 , url: 'https://1.bp.blogspot.com/-ESvo5-uvTTU/Vmqvb8EbSXI/AAAAAAACNAA/aO21Vm34Xws/s640/foxcafe-13.jpg' },
      { toyId: 10 , url: 'https://1.bp.blogspot.com/-XmVkpU5PDH8/VmqvcIuit-I/AAAAAAACNAI/AF3I1huQMpw/s640/foxcafe-14.jpg' },
      { toyId: 10 , url: 'https://4.bp.blogspot.com/-j9UMrcQVfg0/VmqvcsjHoGI/AAAAAAACNAQ/VpRRXkMLeqs/s640/foxcafe-15.jpg' },
      { toyId: 10 , url: 'imhttps://1.bp.blogspot.com/-DwQmR227Jq4/Vmqvc-kHqII/AAAAAAACNAY/qc8aenFtQHo/s640/foxcafe-17.jpgage' },
      { toyId: 10 , url: 'https://4.bp.blogspot.com/--rRMYA0zUdI/VmqveczMB6I/AAAAAAACNBA/i3Sfe4w5If8/s640/foxcafe-22.jpg' },
      { toyId: 10 , url: 'https://1.bp.blogspot.com/-9q6vyphzMJQ/Vmqveketr4I/AAAAAAACNBE/1gsLYbSIIrc/s640/foxcafe-23.jpg' },


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
