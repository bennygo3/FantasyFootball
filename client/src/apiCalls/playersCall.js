import axios from "axios";

const fetchAllPlayers = async (positions) => {
  console.log("Fetching players for positions:", positions);
  try {
    const query = `
      query GetAllPlayers($positions: [String]) {
        players(positions: $positions) {
          espnName
          pos
          team
        }
      }
    `;

    const variables = {
      positions: positions,
    };

    const playerResponse = await axios.post('http://localhost:3001/graphql', { 
      query,
      variables: {
        positions,
      },
    });
    if (playerResponse.data.errors) {
      console.error('GraphQL errors:', playerResponse.data.errors);
      return [];
    }
    if (!playerResponse.data.data || !playerResponse.data.data.players) {
      console.error('No players data received');
      return [];
    }
    console.log(playerResponse.data.data.players); // Log the players array
    return playerResponse.data.data.players; // Return the players array
  } catch (error) {
    console.error('Error fetching players', error);
    return [];
  }
};

export { fetchAllPlayers };





// import axios from "axios";

// const fetchPlayersByPositions = async () => {
//     try {
//         const offense = ['QB', 'RB', 'WR', 'TE', 'K'];
        
//         const query = `
//             query GetPlayersByPosition($positions: [String!]) {
//                 players(positions: $positions) {
//                     espnName
//                     pos
//                     team
//                 }
//             }
//         `;

//         const variables = {
//             positions: offense
//         };

//         const playerResponse = await axios.post('http://localhost:3001/graphql', { query, variables });
//         console.log(playerResponse.data.data.players);
//         return playerResponse.data.data.players;
//     } catch (error) {
//         console.error('Error fetching players', error);
//         return [];
//     }
// };

// export { fetchPlayersByPositions };
