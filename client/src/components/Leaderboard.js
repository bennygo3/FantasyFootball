import React from 'react';
import './compCss/comp.css';

const teams = [
    {
        teamName: 'Team A',
        wins: 5,
        losses: 3,
        pointsFor: 875,
        pointsAgainst: 825,
        currentStreak: 'W2',
    },
    {
        teamName: 'Team B',
        wins: 2,
        losses: 6,
        pointsFor: 600,
        pointsAgainst: 900,
        currentStreak: 'L5',
    },
    {
        teamName: 'Team C',
        wins: 5,
        losses: 3,
        pointsFor: 876,
        pointsAgainst: 780,
        currentStreak: 'W5',
    },
];

const getWinPercentage = (team) => {
    return team.wins / (team.wins + team.losses);
};

const sortByRank = (teams) => {
    return [...teams].sort((a, b) => {
        // Sort by win percentage
        const winPercentageDiff = getWinPercentage(b) - getWinPercentage(a);
        if (winPercentageDiff !== 0) return winPercentageDiff;

        // If win percentage is the same, sort by points for
        return b.pointsFor - a.pointsFor;

        // Need to add head to head matchup for 2nd tiebreaker
    });
};

const Leaderboard = () => {
    const sortedTeams = sortByRank(teams);

    return(
        <table className='leaderboardTable'>
            <thead>
                <tr className='tableHeader'>
                    <th>Rank</th>
                    <th>Team Name</th>
                    <th>W-L</th>
                    <th>Win %</th>
                    <th>Points For</th>
                    <th>Points Against</th>
                    <th>Streak</th>
                </tr>
            </thead>
            <tbody>
                {sortedTeams.map((team, index) => (
                    <tr key={team.teamName} className='tableRow'>
                        <td>{index + 1}</td>
                        <td>{team.teamName}</td>
                        <td>{`${team.wins}-${team.losses}`}</td>
                        <td>{(getWinPercentage(team) * 100).toFixed(1)}%</td>
                        <td>{team.pointsFor}</td>
                        <td>{team.pointsAgainst}</td>
                        <td>{team.currentStreak}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Leaderboard;

// const getWinPercentage = (team) => {
//     return team.wins / (team.wins + team.losses);
// };

// const sortByRank = (teams) => {
//     return [...teams].sort((a, b) => {
//         // Sort by win percentage
//         const winPercentageDiff = getWinPercentage(b) - getWinPercentage(a);
//         if (winPercentageDiff !== 0) return winPercentageDiff;

//         // If win percentage is the same, sort by points for
//         const pointsDiff = b.pointsFor - a.pointsFor;
//         if(pointsDiff !== 0) return pointsDiff;
//         // return b.pointsFor - a.pointsFor;

//         // Need to add head to head matchup for 2nd tiebreaker
//     });
// };

// const Leaderboard = ({ teams }) => {
//     const sortedTeams = sortByRank(teams);

//     return(
//         <table>
//             <thead>
//                 <tr>
//                     <th>Rank:</th>
//                     <th>Team Name:</th>
//                     <th>W-L:</th>
//                     <th>Win %:</th>
//                     <th>Points For:</th>
//                     <th>Points Against:</th>
//                     <th>Streak:</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {sortedTeams.map((team, index) => (
//                     <tr key={team.teamName}>
//                         <td>{index + 1}</td>
//                         <td>{team.teamName}</td>
//                         <td>{`${team.wins}-${team.losses}`}</td>
//                         <td>{(getWinPercentage(team) * 100).toFixed(1)}%</td>
//                         <td>{team.pointsFor}</td>
//                         <td>{team.pointsAgainst}</td>
//                         <td>{team.currentStreak}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// };

// export default Leaderboard;