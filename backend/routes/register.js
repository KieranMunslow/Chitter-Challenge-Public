const express = require('express');
const User = require('../Models/user.model');

const router = express.Router();

router.route(`/validateEmail`)
    .post((req, res) => {
        User.find({ email: { $eq: req.body.email } }, (error, users) => {
            error ? res.status(404).send(`Invalid`) : res.json(users);
        }
        );
    });

router.route(`/validateUsername`)
    .post((req, res) => {
        User.find({ username: { $eq: req.body.username } }, (error, users) => {
            error ? res.status(404).send(`Invalid`) : res.json(users);
        }
        );
    });

router.route(`/`)
    .post(async (req, res) => {

        try {
            await User.create(req.body.user);
            res.status(200).send(`Success`);
        } catch (err) {
            console.log(err);
        }
    }
    );

module.exports = router;