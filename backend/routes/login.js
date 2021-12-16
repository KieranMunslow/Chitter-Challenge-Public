const express = require('express');
const User = require('../Models/user.model');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.route(`/`)
    .put(async (req, res) => {
        let validUser = await User.findOne(
            { $and: [{ username: { $eq: req.body.username } }, { password: { $eq: req.body.password } }] }
        );

        console.log(validUser);
        if (validUser) {
            const id = validUser._id;
            const token = jwt.sign({ id }, "chitterSecret", {
                expiresIn: 300,
            });

            return res.status(200).json({ auth: true, token: token, validUser });
        } else {
            return res.status(400).json({ auth: false, message: `U/P pair not found` });
        }
    })

module.exports = router;