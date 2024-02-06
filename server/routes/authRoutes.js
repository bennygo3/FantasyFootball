const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const User = require('../models/user');

const router = express.Router();

// Registration/signUp route
router.post('/register', async (req, res) => {
    const passwordValidation = Joi.string()
        .min(7)
        .pattern(new RegExp('(?=.*[!@#$%^&*])'))
        .required();
    
    // Validate request body
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: passwordValidation,
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if user already exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) return res.status(400).send('Username already exists');

    // Create new user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    await user.save();

    res.status(201).send('User created successfully');
});

router.post('/login', async (req, res) => {
    // Validates request body
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        // Find user by username
        const user = await User.findOne({ email: req.body.email });
        if(!user) {
            return res.status(401).send('Invalid email or password');
        }

        // Check password
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(401).send('Invalid email or password');
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal service error');
    }
});

module.exports = router;