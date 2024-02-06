const express = require('express');
const router = express.Router();
const Team = require('../models/teamSchema');

router.get('/leaderboard', async (req,res) => {
    try {
        const teams = await Team.find({}).sort({ wins: -1, pointsFor: -1 });
        res.json(teams);
    } catch (error) {
        res.status(500).send('Error fetching leaderboard data');
    }
});

module.exports = router;
