const express = require('express')

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Image } = require('../../db/models');
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3')

const router = express.Router();

router.get('/', requireAuth, asyncHandler (async (req, res) => {
    console.log('req.v', req.body)
    const image = await Image.findAll({});

    return res.json(image)
}))

router.get('/:id', requireAuth, asyncHandler (async (req, res) => {
    console.log('req.v', req.body)
    const image = await Image.findAll({where: {toyId : req.params.id}});
    return res.json(image)
}))


//s3
router.post('/', requireAuth, singleMulterUpload("image"), asyncHandler (async (req, res) => {
    const { toyId } = req.body
    const imageS3 = await singlePublicFileUpload(req.file)
    const image = Image.create({ toyId, url: imageS3 })

    return res.json({
        image,
    })
}))

// router.post('/', requireAuth, asyncHandler (async (req, res) => {
//     const { toyId, url } = req.body
//     const image = Image.create({ toyId, url })

//     return res.json({
//         image,
//     })
// }))

router.delete('/:id', asyncHandler (async (req, res) => {
    const imageId = await Image.destroy({where: {
        id: req.params.id
    }})
    return res.json({imageId})
}))

// router.put()

module.exports = router;
