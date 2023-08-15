import React from "react";

function navbar() {
    return(
        <>
            <nav>
            <div className={'Navbar'}>
                <h1>Gary</h1>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Tutorials</li>
                </ul>
                    <button>Contact Me</button>
            </div>
            </nav>
        </>
    );
}

export default navbar;