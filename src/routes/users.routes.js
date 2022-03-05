const { Router } = require('express');

const Users = require('../models/users')
const router = Router();

router.get('/', async (req, res) => {

    const users = await Users.find();
    res.json(users);

});

router.post('/', async (req, res) => {

    const user = new Users(req.body);
    await user.save();
    res.status(201).json({
        message: 'User saved successfully',
        user
    })
});

module.exports = router;