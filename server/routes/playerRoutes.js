const express = require('express');
const router = express.Router();
const axios = require('axios'); // For API request

const API_KEY = process.env.RAPID_API_KEY;
const HOST = 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com';

router.get('/', async (req, res) => {
    console.log('Route /all has been hit');
    const options = {
        method: 'GET',
        url: `https://${HOST}/getNFLPlayerList`,
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': HOST
        }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data);

        res.json(response.data);
    } catch (error) {
    console.error('Error fetching players from API:', error);
    res.status(500).send('Error fetching players');
    }
});

module.exports = router;

// Route to fetch all NFL Players
// router.get('/allPlayers', async (req,res) => {
//     try {
//         const response = await axios.get({
//             method: 'GET',
//             url: 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLPlayerList', 
//             headers: {
//                 'X-RapidAPI-Key': process.env.RAPID_API_KEY,
//                 'X-RapidAPI-Host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
//             }
//         });
//         console.log(response.data);
//         const players = response.data;
//         res.json(players);

//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error fetching players');
//     }
// });

// module.exports = router;