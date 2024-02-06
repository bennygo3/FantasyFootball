import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');

        navigate('/landing');
    };

    return (
        <button onClick={handleSignOut} className='signOutButton'>
            Sign Out
        </button>
    )
};

export default SignOut;
