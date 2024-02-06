// import React, { useState, useEffect } from 'react';
import React from 'react';
import SignOut from '../../components/SignOut';
import './Home.css';
// import Leaderboard from '../../components/Leaderboard';

const Home = () => {

    return (
        <div>
            
                <h1 className='headerLeaderboard'>
                    League Name
                </h1>
                <SignOut />
                <div className="boundary">
                
            </div>
        </div>
    );
};

export default Home;

    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get('/api/nfl-box-score/20231105_DAL@PHI');
    //             setData(response.data);
    //             console.log(response.data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

//  <Leaderboard className="leaderboardCo"/> 
                //  {data ? (
                //     <pre>{JSON.stringify(data, null, 2)}</pre>
                // ) : (
                //     <p>Loading scores...</p>
                // )} 