const express = require('express');
const User = require('../Models/user.model');

const router = express.Router();

router.route(`/`)
    .post(async (req, res) => {

        let dupEmail = await User.find({ email: { $eq: req.body.user.email } });
        if (dupEmail.length > 0) {
            return res.status(400).send(`Email is already registered`);
        };

        let dupUsername = await User.find({ username: { $eq: req.body.user.username } });
        if (dupUsername.length > 0) {
            return res.status(400).send(`Username is already taken`);
        };

        try {
            await User.create(req.body.user);
            res.status(200).send(`Success`);
        } catch (err) {
            console.log(err);

        }
    });

module.exports = router;