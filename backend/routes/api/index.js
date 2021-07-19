const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const router = require('express').Router();

// const { User } = require('../../db/models');
const sessionRouter  = require('./session');
const userRouter = require('./users');
const toyRouter = require('./toys');
const bookingRouter = require('./bookings');

router.use('/session', sessionRouter);
router.use('/users', userRouter);
router.use('/toys', toyRouter );
router.use('/bookings', bookingRouter );

// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }))

// router.get('/restore-user', restoreUser, (req, res) => (
//     res.json(req.user)
// ))

// router.get('/require-auth', requireAuth, (req, res) => (
//     res.json(req.user)
// ))

// router.get('/test', function(req, res) {
//     res.json({ requestBody: req.body });
// });


module.exports = router;
