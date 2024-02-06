const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    bDay: String,
    espnID: String,
    espnName: String,
    espnHeadshot: String,
    espnIDFull: String,
    cbsLongName: String,
    teamID: String,
    weight: String,
    pos: String,
    school: String,
    cbsPlayerID: String,
    jerseyNum: String,
    longName: String,
    height: String,
    cbsPlayerIDFull: String,
    cbsShortName: String,
    playerId: String,
    team: String,
    exp: String,
    age: String,
    espnLink: String,
    lastFetched: String, // Will keep track of the last time the data was updated
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Player', playerSchema);