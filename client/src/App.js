import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomeLeaderBoard/Home';
import MyTeam from './pages/MyTeam/MyTeam';
import Landing from './pages/Landing/Landing';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<div className="homePage"><Home /></div>} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/myTeam' element={<MyTeam />} />
      </Routes>
    </Router>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
