const express = require('express')

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking } = require('../../db/models');

const router = express.Router();

router.get('/', requireAuth, asyncHandler (async (req, res) => {
    const booking = await Booking.findAll()
    return res.json(booking)
}))

router.post('/', requireAuth, asyncHandler (async (req, res) => {
    const { toyId, userId,startDate, endDate } = req.body;
    const booked = await Booking.createBooking({ toyId, userId,startDate, endDate });

    const token = req.token
    console.log(token)

    await setTokenCookie(res, userId);

    console.log('token',res)

    return res.json({
        booked,
    })
}))

module.exports = router;
