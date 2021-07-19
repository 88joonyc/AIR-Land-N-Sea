const express = require('express')

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateBooking = [
    check("startDate")
        .exists({checkFalsy: true}),
    check("endDate")
        .exists({checkFalsy: true}),
    check("bookedVals")

    ,
    handleValidationErrors
]

router.get('/', requireAuth, asyncHandler (async (req, res) => {
    const booking = await Booking.findAll()
    return res.json(booking)
}))

router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    const booking = await Booking.findByPk(req.params.id)
    return res.json(booking)
}))

router.post('/', requireAuth, validateBooking, asyncHandler (async (req, res) => {
    const bookedVals = await Booking.findAll();
    const { toyId, userId, startDate, endDate } = req.body;
    const booked = await Booking.book({ toyId, userId, startDate, endDate });

    return res.json({
        booked,
    })
}))

module.exports = router;
