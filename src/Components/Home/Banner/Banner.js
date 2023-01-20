import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
    <div className='banner-bg'>
        <div className="content-container">
            {/* HEADER BUTTON  */}
            <div className="header-text">
                {/* HEADER TITLE  */}
                <div className="header-content">
                    <h1>Find your next stay</h1>
                    <p>Search deals on hotels, homes, and much more...</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;