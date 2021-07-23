const express = require('express')

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Review, Toy, User } = require('../../db/models');

const router = express.Router();

router.get('/', requireAuth, asyncHandler (async (req, res) => {
    const review = await Review.findAll({
        include: Toy
    })
    return res.json(review)
}))


router.post('/', requireAuth, asyncHandler (async (req, res) => {
    const { userId, toyId, review, stars } = req.body
    const reviews = await Review.make({ userId, toyId, review, stars })

    return res.json({
        reviews
    })
}))

router.put('/:id', requireAuth, asyncHandler (async(req, res) => {

    const id = await Review.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    return res.json(id)
}))

router.delete('/:id', asyncHandler(async function (req, res) {
    const review = await Review.findByPk(req.params.id);

    await Review.destroy({where: {
        id: req.params.id
    }})
    return res.json({review})
}))

module.exports = router;
