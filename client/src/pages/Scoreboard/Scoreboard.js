import React, { useState, useEffect } from 'react';

const Scoreboard = () => {
    const [teams, setTeams] = useState([
        { name: 'Team 1', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 2', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 3', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 4', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 5', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 6', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 7', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 8', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 9', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 10', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 11', wins: 0, losses: 0, pf: 0, pa: 0 },
        { name: 'Team 12', wins: 0, losses: 0, pf: 0, pa: 0 }
    ]);

    useEffect(() => {
        // Fetch data from API and update the teams state
        const fetchData = async () => {
            try {
                const response = await fetch('');
                const data = await response.json();
                setTeams(data.teams);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid">
            <div className="gridItemHeader">Team</div>
            <div className="gridItemHeader">Wins</div>
            <div className="gridItemHeader">Losses</div>
            <div className="gridItemHeader">PF</div>
            <div className="gridItemHeader">PA</div>

            {teams.map((team) => (
                <>
                    <div className="gridItem">{team.name}</div>
                    <div className="gridItem">{team.wins}</div>
                    <div className="gridItem">{team.losses}</div>
                    <div className="gridItem">{team.pf}</div>
                    <div className="gridItem">{team.pa}</div>
                </>
            ))}
        </div>
    );
};

export default Scoreboard;