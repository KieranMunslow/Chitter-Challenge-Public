const express = require('express');
const Peep = require('../Models/peep.model');

const router = express.Router();

router.route(`/`)
    .post((req, res) => {
        console.log(req.body.peep.name);
        const peep = new Peep(req.body.peep);
        console.log(peep);
        peep.save()
            .then(peep => {
                res.status(200).json({ 'peep': `peep added successfully` });
            })
            .catch(err => res.status(400).send(`Adding new peep failed`));
    });

module.exports = router;