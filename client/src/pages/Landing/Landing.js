import React, { useState } from 'react';
import LoginForm from "../../components/Login";
import SignUp from "../../components/SignUp";
import "./Landing.css";

function Landing() {
    const [showSignUp, setShowSignUp] = useState(false);

    const toggleSignUp = (event) => {
        event.target.blur(); // Removes focus from the "click here" button
        setShowSignUp(!showSignUp);
    };
    return (
        <div className="signAndLog">
            {!showSignUp ? (
                <>
                    <div className="textBackground">
                        <LoginForm />
                    </div>
                    <p>
                        If you are a new user, <button onClick={(event) => toggleSignUp(event)}>click here</button> to register.
                    </p>
                </>
            ) : (
                <>
                    <div className="textBackground">
                        <SignUp />
                    </div>
                    <p>
                        If you already have an account, <button onClick={(event) => toggleSignUp(event)}>click here</button> to login.
                    </p>
                </>
            )}

        </div>
    )
}

export default Landing;