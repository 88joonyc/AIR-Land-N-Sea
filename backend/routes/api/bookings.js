const express = require('express')

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { requireAuth } = require('../../utils/auth');
const { Booking, Toy, User } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const booking = require('../../db/models/booking');

const router = express.Router();

const validateBooking = [
    check("startDate")
        .exists({checkFalsy: true})
        .withMessage('Please specify a start date'),
    check("endDate")
        .exists({checkFalsy: true})
        .withMessage('Please specifgy an end date'),
    handleValidationErrors
]

router.get('/', requireAuth, asyncHandler (async (req, res) => {
    const booking = await Booking.findAll()
    return res.json(booking)
}))


// router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
//     const booking = await Booking.findByPk(req.params.id, {
//         include: [User, Toy]
//     })
//     return res.json(booking)
// }))


router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    const booking = await Booking.findAll({
        include: [Toy], where:{userId: req.params.id}
    })
    return res.json(booking)
}))

router.post('/', requireAuth, validateBooking, asyncHandler (async (req, res) => {

    const { toyId, userId, startDate, endDate } = req.body;
    const booked = await Booking.book({ toyId, userId, startDate, endDate });

    return res.json({
        booked,
    })
}))

router.put('/:id', requireAuth, asyncHandler (async (req, res) => {

    const book = await Booking.update(req.body, {
        where: {
            id: req.params.id
        }
    })

    return res.json(book)
}))

router.delete('/:id', asyncHandler (async (req, res) => {
    const book = await Booking.findByPk(req.params.id)

    await Booking.destroy({where: {
        id: req.params.id
    }})
    return res.json({book})
}))

module.exports = router;
