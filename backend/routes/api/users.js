const express = require('express');

const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('firstName')
        .exists({checkFalsy: true})
        .isLength({ min: 2 })
        .withMessage('Please provide a firstName that is at least 2 characters long.'),
    check('lastName')
        .exists({checkFalsy: true})
        .isLength({ min: 2 })
        .withMessage('Please provide a lastName that is at least 2 characters long.'),
    check('email')
        .exists({checkFalsy: true})
        .isEmail()
        .withMessage('Please provide a valid email address!!'),
    check('username')
        .exists({checkFalsy: true})
        .isLength({ min: 4 })
        .withMessage('Please provide a username that is at least 4 characters long.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be your email address!!'),
    check('password')
        .exists({checkFalsy: true})
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long!!'),
    handleValidationErrors,
]

router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { firstName, lastName, email, username, password } = req.body;
    const user = await User.signup({ firstName, lastName, email, username, password });

    await setTokenCookie(res, user);

    return res.json({
        user,
    });
}));

module.exports = router;
