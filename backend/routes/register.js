const express = require('express');
const User = require('../Models/user.model');

const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        const user = new User(req.body.user);
        user.save()
            .then(user => {
                res.status(200).json({ 'user': `user added successfully` });
            })
            .catch(err => res.status(400).send(`Adding new user failed`));
    });

module.exports = router;