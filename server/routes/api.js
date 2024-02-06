// const express = require('express');
// const router = express.Router();
// const axios = require('axios');

// const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
// const HOST = 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com';


// // Endpoint to get NFL box score
// router.get('/nfl-box-score/:gameID', async (req, res) => {
//     const { gameID } = req.params;

//     const apiUrl = `https://${HOST}/getNFLBoxScore`;
//     const options = {
//         method: 'GET',
//         url: apiUrl,
//         params: { 
//             gameID: gameID,
//             fantasyPoints: 'true',
//             twoPointConversions: '2',
//             passYards: '.04',
//             passAttempts: '0',
//             passTD: '4',
//             passCompletions: '0',
//             passInterceptions: '-2',
//             pointsPerReception: '.5',
//             carries: '.2',
//             rushYards: '.1',
//             rushTD: '6',
//             fumbles: '-2',
//             receivingYards: '.1',
//             receivingTD: '6',
//             targets: '0',
//             defTD: '6' 
//         },
//         headers: {
//             'X-RapidAPI-Key': API_KEY,
//             'X-RapidAPI-Host': HOST,
//         },
//     };

//     try {
//         const response = await axios.request(options);
//         res.json(response.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//     }
// });

// module.exports = router;

