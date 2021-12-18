import React from 'react';
import { Link } from "react-router-dom";


export function Header() {

    return (
        <div className="box-area">
            <header>
                <div className="wrapper">
                    <div className="logo">
                        <a href="/">Story Time</a>
                    </div>
                </div>
                <nav>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/addStory">Add Stroy</Link>
                    <Link className="link" to="/stories">Stories</Link>
                    <Link className="link" to="/signUp">Sign up</Link>
                </nav>
                
            </header>
            <div className="banner-area">
                <h2>A story of struggle street</h2>
            </div>
            
        </div>
    )
}