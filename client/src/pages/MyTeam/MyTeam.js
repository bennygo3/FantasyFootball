import React, { useState, useEffect } from 'react';
import { fetchAllPlayers } from '../../apiCalls/playersCall';
import "./MyTeam.css";

const MyTeam = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getPlayers = async () => {
            try {
                const offensivePos = ["QB", "RB", "WR", "TE", "PK"];
                const playersData = await fetchAllPlayers(offensivePos);
                console.log("Fetched players data:", playersData);
                setPlayers(playersData);
                console.log(players);
                console.log(playersData);
                console.log("Players state after setPlayers:", players);
            } catch (error) {
                console.error('Failed to fetch players:', error);
            }
        };

        getPlayers(); 
    }, []);

    if (!players) {
        return <div>Loading players...</div>;
    }

    return (
        <div className='myTBckg'>
            <section className='starters'>
                <h2>Players</h2>
                <div className='gridContainer'>
                    {players.map((player, index) => (
                        <React.Fragment key={index}>
                            <div className='gridItem'>{player.pos}</div>
                            <div className='gridItem'>{player.team}</div>
                            <div className='gridItem'>{player.espnName}</div>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MyTeam;



// import React, { useState, useEffect } from 'react';
// import { fetchPlayersByPositions } from '../../apiCalls/playersCall';
// import "./MyTeam.css";

// const MyTeam = () => {
//     const [players, setPlayers] = useState([]);

//     useEffect(() => {
//         const myPlayers = async () => {
//            const players = await fetchPlayersByPositions();
//            setPlayers(players);
//         };

//        myPlayers(); 
//     }, []);

//     return (
//         <div className='myTBckg'>
    
//             <section className='starters'>
//                 <h2>Players</h2>
//                 <div className='gridContainer'>
//                     {players.map(player => (
//                         <React.Fragment key={player.id}>
//                             <div className='gridItem'>{player.position}</div>
//                             <div className='gridItem'>{player.opponent}</div>
//                             <div className='gridItem'>{player.projectedPoints}</div>
//                             <div className='gridItem'>{player.currentPoints}</div>
//                         </React.Fragment>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     )
// };

// export default MyTeam;


// const MyTeam = () => {
//     return (
//         <div className='myTBckg'>
//             <h1>Team Name</h1>
//             <h2>Owner</h2>
//             <h2>Bio</h2>
//             <h2>Champ</h2>
//             <section className="starters">
//                 <h2>Starters</h2>
//                 <div>QB</div>
//                 <div>RB</div>
//                 <div>RB</div>
//                 <div>WR</div>
//                 <div>WR</div>
//                 <div>TE</div>
//                 <div>FLEX</div>
//                 <div>D/ST</div>
//                 <div>K</div>
//             </section>
//             <section>
//                 <h2>Bench</h2>
//                 <div>Bench</div>
//                 <div>Bench</div>
//                 <div>Bench</div>
//                 <div>Bench</div>
//                 <div>Bench</div>
//                 <div>Bench</div>
//                 <div>Bench</div>
//                 <div>IR</div>
//             </section>
//         </div>
//     );
// };

// export default MyTeam;

