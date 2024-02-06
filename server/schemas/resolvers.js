const axios = require('axios');
const Player = require('../models/Player');

const resolvers = {
  Query: {
    players: async (_, args) => {
      try {
        const { positions } = args;

        let query = {};
        if (positions) {
          query = { pos: { $in: positions } };
        }

        // Fetch players from MongoDB
        const playersData = await Player.find(query);

        return playersData;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch players')
      }
    },
    // ... other resolvers
  },
  // ... other types
};

module.exports = resolvers;