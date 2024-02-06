const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    wins: Number,
    losses: Number, 
    pointsFor: Number,
    pointsAgainst: Number,
    currentStreak: String,
});

const Team = mongoose.model('Team', teamSchema);