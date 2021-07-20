const express = require('express')

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');

const router = express.Router();

router.get('/', requireAuth, asyncHandler (async (req, res) => {
    console.log(req.body)
    const image = await Image.findAll({});

    return res.json(image)
}))

router.post('/', requireAuth, asyncHandler (async (req, res) => {
    const { toysId, url } = req.body
    const image = Image.create({ toyId, url })

    return res.json({
        image,
    })
}))

router.delete('/:id', asyncHandler (async (req, res) => {
    const imageId = await Image.deleteItem(req.params.id)
    return res.json({imageId})
}))

// router.put()

module.exports = router;
