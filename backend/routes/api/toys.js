const express = require('express')

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Toy, Image } = require('../../db/models');

const router = express.Router();

// const validateToy = [
//     check()
// ]

router.get('/', requireAuth, asyncHandler (async (req, res) => {
    const toy = await Toy.findAll({
        include: Image
    })
    return res.json(toy)
}))

router.get('/:id', requireAuth, asyncHandler (async (req, res) => {
    const toy = await Toy.findByPk(req.params.id, {
        include: Image
    })
    return res.json(toy)
}))

router.post('/', requireAuth, asyncHandler (async (req, res) => {
    const { userId, description, year, make, model, type, level, price } = req.body
    const toy = await Toy.make({ userId, description, year, make, model, type, level, price })

    // await setTokenCookie(res, toy)

    return res.json({
        toy
    })
}))

router.put('/:id', requireAuth, asyncHandler (async(req, res) => {

    const id = await Toy.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    return res.json(id)
}))

router.delete('/:id', asyncHandler(async function (req, res) {
    const toy = await Toy.findByPk(req.params.id);

    await Toy.destroy({where: {
        id: req.params.id
    }})
    return res.json({toy})
}))

// export const deleteToy = async (toyId) => {
//     const toy = await Toy.findByPk(toyId);

//     await toy.destroy({where: {
//         id: toy.id
//     }})
// }

module.exports = router;
