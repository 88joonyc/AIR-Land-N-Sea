const express = require('express')

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Toy } = require('../../db/models');

const router = express.Router();

// const validateToy = [
//     check()
// ]

router.get('/', requireAuth, asyncHandler (async (req, res) => {
    const toy = await Toy.findAll()
    return res.json(toy)
}))

router.get('/:id', requireAuth, asyncHandler (async (req, res) => {
    const toy = await Toy.findByPk(req.params.id)
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

router.put('/:id', requireAuth, asyncHandler (async(req, res) => {
    const id = await Toy.update(req.body);
    const toy = await Toy.one(id)
    return res.json(toy)
}))

// router.delete()

module.exports = router;
