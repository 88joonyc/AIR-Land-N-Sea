const express = require('express')

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Toy } = require('../../db/models');

const router = express.Router();

router.get('/', requireAuth, asyncHandler (async (req, res) => {
    const toy = await Toy.create({userId, description, year, make, model, type, level, price})
    return res.json(toy)
}))

router.post('/', requireAuth, asyncHandler (async (req, res) => {
    const { userId, description, year, make, model, type, level, price } = req.body
    const toy = await Toy.create({ userId, description, year, make, model, type, level, price })

    await setTokenCookie(res, toy)

    return res.json({
        toy
    })
}))

module.exports = router;
